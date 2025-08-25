/**
 * Animation Registry
 * 
 * This module handles the dynamic loading and management of multiple animations.
 * It automatically discovers animation files from the animations folder and
 * provides a unified interface for accessing them.
 */

export interface AnimationFrame {
  title: string;
  content: string;
  duration: number; // Duration in milliseconds for this frame
  colors?: Record<string, number>; // Maps "row,col" positions to palette color indices (0-15)
}

export interface AnimationMetadata {
  id: string;
  name: string;
  description?: string;
}

export interface Animation {
  metadata: AnimationMetadata;
  frames: AnimationFrame[];
}

export class AnimationFrames {
  private frames: AnimationFrame[] = [];

  constructor(frames: AnimationFrame[] = []) {
    this.frames = frames;
  }

  /**
   * Get a frame by index
   * @param index - The frame index (0-based)
   * @returns The frame object or undefined if index is out of bounds
   */
  public getFrame(index: number): AnimationFrame | undefined {
    return this.frames[index];
  }

  /**
   * Get the display text for a frame (content only)
   * @param index - The frame index (0-based)
   * @returns The frame content or empty string if index is out of bounds
   */
  public getFrameText(index: number): string {
    const frame = this.getFrame(index);
    return frame ? frame.content : '';
  }

  /**
   * Get the total number of frames
   * @returns The total frame count
   */
  public getFrameCount(): number {
    return this.frames.length;
  }

  /**
   * Get all frames as an array (for direct manipulation)
   * @returns Array of all frame objects
   */
  public getAllFrames(): AnimationFrame[] {
    return [...this.frames];
  }

  /**
   * Get all frames as an array of display text (for backward compatibility)
   * @returns Array of formatted frame strings
   */
  public getAllFramesAsText(): string[] {
    return this.frames.map((_, index) => this.getFrameText(index));
  }

  /**
   * Add a new frame to the animation
   * @param frame - The frame to add
   */
  public addFrame(frame: AnimationFrame): void {
    this.frames.push(frame);
  }

  /**
   * Remove a frame by index
   * @param index - The frame index to remove
   * @returns True if the frame was removed, false if index was out of bounds
   */
  public removeFrame(index: number): boolean {
    if (index >= 0 && index < this.frames.length) {
      this.frames.splice(index, 1);
      return true;
    }
    return false;
  }

  /**
   * Update a frame at a specific index
   * @param index - The frame index to update
   * @param frame - The new frame data
   * @returns True if the frame was updated, false if index was out of bounds
   */
  public updateFrame(index: number, frame: AnimationFrame): boolean {
    if (index >= 0 && index < this.frames.length) {
      this.frames[index] = frame;
      return true;
    }
    return false;
  }

  /**
   * Get all frame titles
   * @returns Array of frame titles
   */
  public getFrameTitles(): string[] {
    return this.frames.map(frame => frame.title);
  }

  /**
   * Get the duration of a specific frame
   * @param index - The frame index
   * @returns The duration in milliseconds, or 100 if index is out of bounds
   */
  public getFrameDuration(index: number): number {
    if (index >= 0 && index < this.frames.length) {
      return this.frames[index].duration;
    }
    return 100; // default fallback
  }

  /**
   * Set the duration of a specific frame
   * @param index - The frame index
   * @param duration - The new duration in milliseconds
   * @returns True if the duration was set, false if index was out of bounds
   */
  public setFrameDuration(index: number, duration: number): boolean {
    if (index >= 0 && index < this.frames.length) {
      this.frames[index].duration = duration;
      return true;
    }
    return false;
  }

  /**
   * Calculate the maximum dimensions across all frames
   * @returns Object with maxWidth and maxHeight
   */
  public getMaxDimensions(): { maxWidth: number; maxHeight: number } {
    let maxWidth = 0;
    let maxHeight = 0;

    for (const frame of this.frames) {
      const lines = frame.content.split('\n');
      maxHeight = Math.max(maxHeight, lines.length);
      
      for (const line of lines) {
        maxWidth = Math.max(maxWidth, line.length);
      }
    }

    return { maxWidth, maxHeight };
  }
}

export class AnimationRegistry {
  private animations: Map<string, Animation> = new Map();
  private versionSupportMap: Map<string, boolean> = new Map();
  private animationModules: Map<string, any> = new Map();
  private defaultAnimationId: string = 'animation-01';

  /**
   * Load all animations dynamically from the animations folder
   */
  public async loadAnimations(): Promise<void> {
    // Get all animation modules dynamically
    const animationModules = import.meta.glob('./animations/animation-*.ts');
    
    for (const [path, moduleLoader] of Object.entries(animationModules)) {
      try {
        const module = await moduleLoader() as any;
        const animation = module.default as Animation;
        
        if (animation && animation.metadata && animation.frames) {
          this.animations.set(animation.metadata.id, animation);
          this.animationModules.set(animation.metadata.id, module);
          
          // Check if this module has a createAnimation function for version support
          const hasCreateAnimation = typeof module.createAnimation === 'function';
          this.versionSupportMap.set(animation.metadata.id, hasCreateAnimation);
        } else {
          console.warn(`Invalid animation module at ${path}: missing metadata or frames`);
        }
      } catch (error) {
        console.error(`Failed to load animation from ${path}:`, error);
      }
    }
  }

  /**
   * Get an animation by ID
   * @param id - The animation ID
   * @returns The animation or undefined if not found
   */
  public getAnimation(id: string): Animation | undefined {
    return this.animations.get(id);
  }

  /**
   * Get all available animations
   * @returns Array of all animations
   */
  public getAllAnimations(): Animation[] {
    return Array.from(this.animations.values());
  }

  /**
   * Get animation metadata for dropdown population
   * @returns Array of animation metadata sorted by ID
   */
  public getAnimationMetadata(): AnimationMetadata[] {
    return Array.from(this.animations.values())
      .map(animation => animation.metadata)
      .sort((a, b) => a.id.localeCompare(b.id));
  }

  /**
   * Get the default animation ID
   * @returns The default animation ID
   */
  public getDefaultAnimationId(): string {
    return this.defaultAnimationId;
  }

  /**
   * Set the default animation ID
   * @param id - The animation ID to set as default
   */
  public setDefaultAnimationId(id: string): void {
    if (this.animations.has(id)) {
      this.defaultAnimationId = id;
    } else {
      console.warn(`Cannot set default animation to ${id}: animation not found`);
    }
  }

  /**
   * Create an AnimationFrames instance for a specific animation
   * @param id - The animation ID
   * @returns AnimationFrames instance or undefined if animation not found
   */
  public createAnimationFrames(id: string): AnimationFrames | undefined {
    const animation = this.getAnimation(id);
    if (animation) {
      return new AnimationFrames(animation.frames);
    }
    return undefined;
  }

  /**
   * Check if an animation supports version parameters
   * @param id - The animation ID
   * @returns Promise that resolves to true if the animation supports version parameters
   */
  public async supportsVersion(id: string): Promise<boolean> {
    return this.versionSupportMap.get(id) || false;
  }

  /**
   * Create an AnimationFrames instance for any animation with a custom version
   * @param id - The animation ID
   * @param version - The version string to display in the animation
   * @returns Promise that resolves to AnimationFrames instance with custom version
   */
  public async createAnimationFramesWithVersion(id: string, version: string): Promise<AnimationFrames | undefined> {
    try {
      const module = this.animationModules.get(id);
      if (module && typeof module.createAnimation === 'function') {
        const animation = module.createAnimation(version);
        return new AnimationFrames(animation.frames);
      } else {
        // Fall back to regular animation if no createAnimation function
        return this.createAnimationFrames(id);
      }
    } catch (error) {
      console.error(`Failed to create animation ${id} with version:`, error);
      return undefined;
    }
  }
}
