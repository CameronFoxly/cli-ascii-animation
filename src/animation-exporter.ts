/**
 * Animation Export Utilities
 * 
 * Handles exporting animations with color data to .ts files
 * in the same format as existing animation files.
 */

import type { Animation, AnimationFrame } from './animation-registry';
import { ANSI_COLOR_NAMES } from './color-palette';

export class AnimationExporter {
  /**
   * Get all unique color indices used in the animation
   */
  private getUsedColorIndices(animation: Animation): Set<number> {
    const usedColors = new Set<number>();
    
    animation.frames.forEach(frame => {
      if (frame.colors) {
        Object.values(frame.colors).forEach(colorIndex => {
          usedColors.add(colorIndex);
        });
      }
    });
    
    return usedColors;
  }

  /**
   * Generate color helper constants for the animation file (only for used colors)
   */
  private generateColorConstants(animation: Animation): string {
    const usedColorIndices = this.getUsedColorIndices(animation);
    
    if (usedColorIndices.size === 0) {
      return ''; // No colors used, no constants needed
    }
    
    const constants = Array.from(usedColorIndices)
      .sort((a, b) => a - b) // Sort by color index for consistent output
      .map(index => {
        const name = ANSI_COLOR_NAMES[index];
        const constantName = name.toUpperCase().replace(/\s+/g, '_');
        return `const ${constantName} = ${index};`;
      });
    
    return constants.length > 0 ? constants.join('\n') : '';
  }

  /**
   * Generate the colors object for a frame
   */
  private generateFrameColors(colors?: Record<string, number>): string {
    if (!colors || Object.keys(colors).length === 0) {
      return '';
    }

    const colorEntries = Object.entries(colors).map(([position, colorIndex]) => {
      const colorName = ANSI_COLOR_NAMES[colorIndex].toUpperCase().replace(/\s+/g, '_');
      return `      "${position}": ${colorName}`;
    });

    return `,
    colors: {
${colorEntries.join(',\n')}
    }`;
  }

  /**
   * Check if content contains template literal expressions
   */
  private containsTemplateLiterals(content: string): boolean {
    return /\$\{[^}]+\}/.test(content);
  }

  /**
   * Convert resolved version strings back to template literal syntax
   */
  private convertVersionToTemplateLiteral(content: string): string {
    // Pattern to match "CLI Version X.X.X" followed by spaces
    const versionPattern = /CLI Version \d+\.\d+\.\d+(\s+)/g;
    
    return content.replace(versionPattern, (_, spaces) => {
      const spaceCount = spaces.length;
      return `\${createVersionLine(version, ${spaceCount})}`;
    });
  }

  /**
   * Generate a frame object string
   */
  private generateFrame(frame: AnimationFrame): string {
    const colorsString = this.generateFrameColors(frame.colors);
    
    let processedContent = frame.content;
    
    // If content contains template literals, preserve them
    if (this.containsTemplateLiterals(frame.content)) {
      processedContent = frame.content;
    } else {
      // Try to convert resolved version strings back to template literals
      processedContent = this.convertVersionToTemplateLiteral(frame.content);
    }
    
    const contentString = `\`${processedContent}\``;
    
    return `  {
    title: "${frame.title}",
    duration: ${frame.duration},
    content: ${contentString}${colorsString}
  }`;
  }

  /**
   * Generate helper functions needed by the animation
   */
  private generateHelperFunctions(animation: Animation): string {
    // Check if any frame contains createVersionLine usage (either original or converted)
    const hasVersionLine = animation.frames.some(frame => {
      const originalHasVersionLine = frame.content.includes('createVersionLine');
      const convertedContent = this.convertVersionToTemplateLiteral(frame.content);
      const convertedHasVersionLine = convertedContent.includes('createVersionLine');
      return originalHasVersionLine || convertedHasVersionLine;
    });

    if (hasVersionLine) {
      return `
  // Helper function to create properly spaced version string for alignment
  const createVersionLine = (version: string, spacesAfterVersion: number): string => {
    // Calculate the total width needed: "CLI Version " + version + spaces to maintain alignment
    const baseText = \`CLI Version \${version}\`;
    const targetWidth = 'CLI Version 0.0.1'.length + spacesAfterVersion; // Use default version as baseline
    const currentWidth = baseText.length;
    const paddingNeeded = Math.max(0, targetWidth - currentWidth);
    return baseText + ' '.repeat(paddingNeeded);
  };
`;
    }

    return '';
  }

  /**
   * Generate the complete animation file content
   */
  generateAnimationFile(animation: Animation, version: string = '0.0.1'): string {
    const colorConstants = this.generateColorConstants(animation);
    const helperFunctions = this.generateHelperFunctions(animation);
    const frames = animation.frames.map((frame) => 
      this.generateFrame(frame)
    ).join(',\n');

    const description = animation.metadata.description || 'Custom animation created with color editor';

    const colorSection = colorConstants ? `
// Color constants for easy reference
${colorConstants}
` : '';

    return `/**
 * ${animation.metadata.name}
 * 
 * ${description}
 */

import type { Animation, AnimationFrame } from '../animation-registry';
${colorSection}
export function createAnimation(version: string = '${version}'): Animation {${helperFunctions}
  const frames: AnimationFrame[] = [
${frames}
  ];

  return {
    metadata: {
      id: '${animation.metadata.id}',
      name: '${animation.metadata.name}',
      description: '${description}'
    },
    frames
  };
}

const animation: Animation = createAnimation();
export default animation;
`;
  }

  /**
   * Generate a filename for the animation
   */
  generateFilename(baseName: string): string {
    const sanitized = baseName.toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-+|-+$/g, '');
    
    const timestamp = new Date().toISOString().slice(0, 10).replace(/-/g, '');
    return `animation-${sanitized}-${timestamp}.ts`;
  }

  /**
   * Download the animation file
   */
  downloadAnimation(animation: Animation, filename?: string): void {
    const content = this.generateAnimationFile(animation);
    const finalFilename = filename || this.generateFilename(animation.metadata.name);
    
    console.log('Downloading file:', finalFilename);
    console.log('Content preview:', content.substring(0, 200) + '...');
    
    try {
      // Primary method: Create blob and download link
      const blob = new Blob([content], { type: 'text/plain' });
      const url = URL.createObjectURL(blob);
      
      const link = document.createElement('a');
      link.href = url;
      link.download = finalFilename;
      link.style.display = 'none';
      document.body.appendChild(link);
      
      console.log('Link created, attempting download...');
      link.click();
      
      // Clean up after a short delay
      setTimeout(() => {
        if (document.body.contains(link)) {
          document.body.removeChild(link);
        }
        URL.revokeObjectURL(url);
      }, 100);
      
    } catch (error) {
      console.error('Primary download method failed:', error);
      
      // Fallback method: Try data URL
      try {
        const dataUrl = 'data:text/plain;charset=utf-8,' + encodeURIComponent(content);
        const link = document.createElement('a');
        link.href = dataUrl;
        link.download = finalFilename;
        link.style.display = 'none';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        console.log('Fallback download method used');
      } catch (fallbackError) {
        console.error('Fallback download method also failed:', fallbackError);
        // Last resort: copy to clipboard
        navigator.clipboard.writeText(content).then(() => {
          alert('Download failed, but animation code has been copied to clipboard!');
        }).catch(() => {
          alert('Download failed. Please check browser console for details.');
        });
      }
    }
  }

  /**
   * Create an animation object from frames
   */
  createAnimationFromFrames(
    frames: AnimationFrame[], 
    name: string, 
    description?: string
  ): Animation {
    const id = name.toLowerCase().replace(/[^a-z0-9]+/g, '-');
    
    return {
      metadata: {
        id,
        name,
        description: description || `Custom animation: ${name}`
      },
      frames: [...frames]
    };
  }
}
