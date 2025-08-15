/**
 * ASCII Animation Frames Component
 * 
 * This module contains the ASCII animation frames and provides a clean interface
 * for accessing them. Frames can be easily modified, added, or removed here
 * without affecting the main application logic.
 */

export interface AnimationFrame {
  title: string;
  content: string;
  duration: number; // Duration in milliseconds for this frame
}

export class AnimationFrames {
  private frames: AnimationFrame[] = [
    {
      title: "Frame 00",
      duration: 50,
      content: ` 
      
      
      
      
      
      
      
      
      
      
      



      `
    },
    {
      title: "Frame 01",
      duration: 50,
      content: `
 ╔══╗ 
╔╝  ╚╗
║    ║
║    ║
║    ║
║    ║
║    ║
║    ║
║    ║
║    ║
║    ║
║    ║
║    ║
╚╗  ╔╝
 ╚══╝`
    },
    {
      title: "Frame 02",
      duration: 50,
      content: `
 ╔════════════╗ 
╔╝▄           ╚╗
║███▄          ║
║███████▄      ║
║█████ ▀█      ║
║█████  █      ║
║█████  █      ║
║█▌ ██▄ █      ║
║█   ▀██▀      ║
║▌   █▐        ║
║    ▌▐        ║
║     ▌        ║
║▌   ▐         ║
╚╗███▀        ╔╝
 ╚════════════╝`
    },
    {
      title: "Frame 03",
      duration: 50,
      content: `
 ╔══════════════════════════╗ 
╔╝▄██████████▄              ╚╗
║███████████████▄            ║
║███████████████████▄        ║
║█████████████████ ▀█        ║
║█████████████████  █        ║
║█████████████████  █        ║
║█████████████▌ ██▄ █        ║
║███▀   ▀█████   ▀██▀        ║
║███     ████▌   █▐          ║
║▀███▄▄▄█████    ▌▐          ║
║  ▀█████████     ▌          ║
║     ▀▀█████▌   ▐           ║
╚╗         ▀▀████▀          ╔╝
 ╚══════════════════════════╝`
    },
    {
      title: "Frame 04",
      duration: 50,
      content: `
 ╔══════════════════════════════════════╗ 
╔╝ Welcome to ▄▄██████████▄             ╚╗
║  ░████░███▄████████████████▄           ║
║  ░█    ░█▄█████████████████████▄       ║
║  ░█░███░█████████████████████ ▀█       ║
║  ░█ ░█ ░█████████████████████  █       ║
║  ░████░██████████████████████  █       ║
║         █████████████████▌ ██▄ █       ║
║  ░████░████████▀   ▀█████   ▀██▀       ║
║  ░█   ░█ ▀█████     ████▌   █▐         ║
║  ░█   ░█  █▀████▄▄▄█████    ▌▐         ║
║  ░█   ░█  █ █ ▀█████████     ▌         ║
║  ░████░████ █    ▀▀█████▌   ▐          ║
╚╗                      ▀▀████▀         ╔╝
 ╚══════════════════════════════════════╝`
    },
    {
      title: "Frame 05",
      duration: 60,
      content: `
 ╔════════════════════════════════════════════════╗ 
╔╝ Welcome to          ▄▄██████████▄              ╚╗
║  ░████░███░█████░█ ▄████████████████▄            ║
║  ░█    ░█   ░█  ░█▄█████████████████████▄        ║
║  ░█░███░█   ░█  ░█████████████████████ ▀█        ║
║  ░█ ░█ ░█   ░█  ░█████████████████████  █        ║
║  ░████░███  ░█  ░█████████████████████  █        ║
║                  █████████████████▌ ██▄ █        ║
║  ░████░████░███▄░███████▀   ▀█████   ▀██▀        ║
║  ░█   ░█ ░█░█ ░█ ░██████     ████▌   █▐          ║
║  ░█   ░█ ░█░████ ░█ ▀████▄▄▄█████    ▌▐          ║
║  ░█   ░█ ░█░█    ░█ ░█ ▀█████████     ▌          ║
║  ░████░████░█   ░███░████ ▀▀█████▌   ▐           ║
╚╗                               ▀▀████▀          ╔╝
 ╚════════════════════════════════════════════════╝`
    },
    {
      title: "Frame 06",
      duration: 70,
      content: `
 ╔═════════════════════════════════════════════════════════╗ 
╔╝ Welcome to                    ▄██████████▄              ╚╗
║  ░████░███░█████░█ ░█░█ ░█  ▄████████████████▄            ║
║  ░█    ░█   ░█  ░█ ░█░█ ░█ ██████████████████████▄        ║
║  ░█░███░█   ░█  ░████░█ ░██████████████████████████       ║
║  ░█ ░█ ░█   ░█  ░█ ░█░█ ░██████████████████▀   ▐██▌▌      ║
║  ░████░███  ░█  ░█ ░█░█████████████████████     ██▌▌      ║
║                           █████████████████▄   ▄███       ║
║  ░████░████░███▄░███░█  ░████▀▀█████████  ████████▀       ║
║  ░█   ░█ ░█░█ ░█ ░█ ░█  ░███    ███████      ▄  ▐         ║
║  ░█   ░█ ░█░████ ░█ ░█  ░█ █▄  ▄███████      █▌ ▌         ║
║  ░█   ░█ ░█░█    ░█ ░█  ░█  ██████████       ▀ ▐          ║
║  ░████░████░█   ░███░███░████  ▀██████▄        ▌          ║
╚╗                                   ▀▀▀██▄▄▄▄▄▄█          ╔╝
 ╚═════════════════════════════════════════════════════════╝`
    },
    {
      title: "Frame 07",
      duration: 80,
      content: `
 ╔════════════════════════════════════════════════════════════════╗ 
╔╝ Welcome to                            ▄███████████▄            ╚╗
║  ░████░███░█████░█ ░█░█ ░█░██▄       ███████████████████▄        ║
║  ░█    ░█   ░█  ░█ ░█░█ ░█░█░█      ███████████████████ ▀█       ║
║  ░█░███░█   ░█  ░████░█ ░█░███▄    ███████████     ████  ██      ║
║  ░█ ░█ ░█   ░█  ░█ ░█░█ ░█░█ ░█    ██████████       ███   █      ║
║  ░████░███  ░█  ░█ ░█░████░████   ▄███████████      ███▄ ▄█      ║
║                                  ██████████████   ▄████████      ║
║  ░████░████░███▄░███░█  ░████░████ ▐███████  ▀▀████▀   ▀▀█       ║
║  ░█   ░█ ░█░█ ░█ ░█ ░█  ░█ ░█  ░██▌ ███████       ▄▄  █▌ ▌       ║
║  ░█   ░█ ░█░████ ░█ ░█  ░█ ░█  ░█▀█████████       ██  █ ▐        ║
║  ░█   ░█ ░█░█    ░█ ░█  ░█ ░█  ░█   ▀██████       ▀▀   ▐▀        ║
║  ░████░████░█   ░███░███░████  ░█      ▀▀███▄         ▄█         ║
╚╗                                           ▀███████████         ╔╝
 ╚════════════════════════════════════════════════════════════════╝`
    },
    {
      title: "Frame 08",
      duration: 90,
      content: `
 ╔══════════════════════════════════════════════════════════════════╗ 
╔╝ Welcome to                                ▄████████████▄         ╚╗
║  ░████░███░█████░█ ░█░█ ░█░██▄           ▄█████████████████▄       ║
║  ░█    ░█   ░█  ░█ ░█░█ ░█░█░█          ███████▀▀▀▀████▀  ▀██      ║
║  ░█░███░█   ░█  ░████░█ ░█░███▄        ███████      ███    ▐██     ║
║  ░█ ░█ ░█   ░█  ░█ ░█░█ ░█░█ ░█        ███████      ▐███    ██     ║
║  ░████░███  ░█  ░█ ░█░████░████       █████████     ▄████  ▄██▄    ║
║                                       ██████▀█████████▀ ▀███▀██▌   ║
║  ░████░████░███▄░███░█  ░████░█████ ▄███████            ▄    ██▌   ║
║  ░█   ░█ ░█░█ ░█ ░█ ░█  ░█ ░█  ░█   ████████       █▌   █▌   ██▌   ║
║  ░█   ░█ ░█░████ ░█ ░█  ░█ ░█  ░█   ████████       █▌   ▀    █▀    ║
║  ░█   ░█ ░█░█    ░█ ░█  ░█ ░█  ░█    ███████▄              ▄█▀     ║
║  ░████░████░█   ░███░███░████  ░█       ▀████▄            ▄█       ║
╚╗                                            ▀████████████▀▀       ╔╝
 ╚══════════════════════════════════════════════════════════════════╝`
    },
    {
      title: "Frame 09",
      duration: 500,
      content: `
 ╔══════════════════════════════════════════════════════════════════╗ 
╔╝ Welcome to                                    ▄███████▄          ╚╗
║  ░████░███░█████░█ ░█░█ ░█░██▄             ▄███████████████▄       ║
║  ░█    ░█   ░█  ░█ ░█░█ ░█░█░█           ▄██▀▀▀▀▀█████▀▀▀▀▀██▄     ║
║  ░█░███░█   ░█  ░████░█ ░█░███▄         ▐██       ███       ██▌    ║
║  ░█ ░█ ░█   ░█  ░█ ░█░█ ░█░█ ░█         ███       ███        ██    ║
║  ░████░███  ░█  ░█ ░█░████░████         ▐██▄     ▄███▄     ▄██▌    ║
║                                         ██▀███████▀ ▀███████▀██    ║
║  ░████░████░███▄░███░█  ░████░█████   ▄███                   ███▄  ║
║  ░█   ░█ ░█░█ ░█ ░█ ░█  ░█ ░█  ░█    █████      █▌   ▐█      █████ ║
║  ░█   ░█ ░█░████ ░█ ░█  ░█ ░█  ░█   ▐█████      █▌   ▐█      █████▌║
║  ░█   ░█ ░█░█    ░█ ░█  ░█ ░█  ░█    █████                   █████ ║
║  ░████░████░█   ░███░███░████  ░█     ▀▀███▄▄             ▄▄███▀▀  ║
╚╗                                          ▀▀▀█████████████▀▀▀     ╔╝
 ╚══════════════════════════════════════════════════════════════════╝`
    },
    {
      title: "Frame 10",
      duration: 80,
      content: `
 ╔══════════════════════════════════════════════════════════════════╗ 
╔╝ Welcome to                                    ▄███████▄          ╚╗
║  ░████░███░█████░█ ░█░█ ░█░██▄             ▄███████████████▄       ║
║  ░█    ░█   ░█  ░█ ░█░█ ░█░█░█           ▄██▀▀▀▀▀█████▀▀▀▀▀██▄     ║
║  ░█░███░█   ░█  ░████░█ ░█░███▄         ▐██       ███       ██▌    ║
║  ░█ ░█ ░█   ░█  ░█ ░█░█ ░█░█ ░█         ███       ███        ██    ║
║  ░████░███  ░█  ░█ ░█░████░████         ▐██▄     ▄███▄     ▄██▌    ║
║                                         ██▀███████▀ ▀███████▀██    ║
║  ░████░████░███▄░███░█  ░████░█████   ▄███                   ███▄  ║
║  ░█   ░█ ░█░█ ░█ ░█ ░█  ░█ ░█  ░█    █████                   █████ ║
║  ░█   ░█ ░█░████ ░█ ░█  ░█ ░█  ░█   ▐█████     ▀▀▀   ▀▀▀     █████▌║
║  ░█   ░█ ░█░█    ░█ ░█  ░█ ░█  ░█    █████                   █████ ║
║  ░████░████░█   ░███░███░████  ░█     ▀▀███▄▄             ▄▄███▀▀  ║
╚╗                                          ▀▀▀█████████████▀▀▀     ╔╝
 ╚══════════════════════════════════════════════════════════════════╝`
    },
    {
      title: "Frame 11",
      duration: 100,
      content: `
 ╔══════════════════════════════════════════════════════════════════╗ 
╔╝ Welcome to                                    ▄███████▄          ╚╗
║  ░████░███░█████░█ ░█░█ ░█░██▄             ▄███████████████▄       ║
║  ░█    ░█   ░█  ░█ ░█░█ ░█░█░█           ▄██▀▀▀▀▀█████▀▀▀▀▀██▄     ║
║  ░█░███░█   ░█  ░████░█ ░█░███▄         ▐██       ███       ██▌    ║
║  ░█ ░█ ░█   ░█  ░█ ░█░█ ░█░█ ░█         ███       ███        ██    ║
║  ░████░███  ░█  ░█ ░█░████░████         ▐██▄     ▄███▄     ▄██▌    ║
║                                         ██▀███████▀ ▀███████▀██    ║
║  ░████░████░███▄░███░█  ░████░█████   ▄███                   ███▄  ║
║  ░█   ░█ ░█░█ ░█ ░█ ░█  ░█ ░█  ░█    █████      █▌   ▐█      █████ ║
║  ░█   ░█ ░█░████ ░█ ░█  ░█ ░█  ░█   ▐█████      █▌   ▐█      █████▌║
║  ░█   ░█ ░█░█    ░█ ░█  ░█ ░█  ░█    █████                   █████ ║
║  ░████░████░█   ░███░███░████  ░█     ▀▀███▄▄             ▄▄███▀▀  ║
╚╗                                          ▀▀▀█████████████▀▀▀     ╔╝
 ╚══════════════════════════════════════════════════════════════════╝`
    }
  ];

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
}
