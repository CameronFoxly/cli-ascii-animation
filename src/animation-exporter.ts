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
   * Generate color helper constants for the animation file
   */
  private generateColorConstants(): string {
    const constants = ANSI_COLOR_NAMES.map((name, index) => {
      const constantName = name.toUpperCase().replace(/\s+/g, '_');
      return `const ${constantName} = ${index};`;
    });
    
    return constants.join('\n');
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
   * Generate a frame object string
   */
  private generateFrame(frame: AnimationFrame): string {
    const colorsString = this.generateFrameColors(frame.colors);
    
    return `  {
    title: "${frame.title}",
    duration: ${frame.duration},
    content: \`${frame.content}\`${colorsString}
  }`;
  }

  /**
   * Generate the complete animation file content
   */
  generateAnimationFile(animation: Animation, version: string = '0.0.1'): string {
    const colorConstants = this.generateColorConstants();
    const frames = animation.frames.map((frame) => 
      this.generateFrame(frame)
    ).join(',\n');

    const description = animation.metadata.description || 'Custom animation created with color editor';

    return `/**
 * ${animation.metadata.name}
 * 
 * ${description}
 */

import type { Animation, AnimationFrame } from '../animation-registry';

// Color constants for easy reference
${colorConstants}

export function createAnimation(version: string = '${version}'): Animation {
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

export default createAnimation;
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
