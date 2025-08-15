import './style.css'
import { AnimationRegistry, AnimationFrames } from './animation-registry'

// Initialize the animation registry
const animationRegistry = new AnimationRegistry();
let currentAnimationFrames: AnimationFrames | null = null;

class ASCIIAnimationPlayer {
  private currentFrame: number = 0;
  private isPlaying: boolean = false;
  private isLooping: boolean = false;
  private animationTimeout: number | null = null;
  private currentAnimationId: string = '';

  private terminalScreen!: HTMLTextAreaElement;
  private runButton!: HTMLButtonElement;
  private prevButton!: HTMLButtonElement;
  private nextButton!: HTMLButtonElement;
  private startButton!: HTMLButtonElement;
  private endButton!: HTMLButtonElement;
  private loopButton!: HTMLButtonElement;
  private frameDurationInput!: HTMLInputElement;
  private frameInfo!: HTMLInputElement;
  private animationSelector!: HTMLSelectElement;

  constructor() {
    this.initializeApp();
  }

  private async initializeApp(): Promise<void> {
    // Load all animations first
    await animationRegistry.loadAnimations();
    
    // Set up the default animation
    this.currentAnimationId = animationRegistry.getDefaultAnimationId();
    currentAnimationFrames = animationRegistry.createAnimationFrames(this.currentAnimationId) || null;
    
    if (!currentAnimationFrames) {
      console.error('Failed to load default animation');
      return;
    }

    this.createUI();
    this.bindEvents();
    this.updateDisplay();
    
    // Simple fade-in after DOM is ready
    requestAnimationFrame(() => {
      this.terminalScreen.style.opacity = '1';
    });
  }

  private createUI(): void {
    const app = document.querySelector<HTMLDivElement>('#app')!;
    
    // Calculate dimensions for the current animation
    const dimensions = currentAnimationFrames!.getMaxDimensions();
    const rows = Math.max(17, dimensions.maxHeight + 2); // Add some padding
    const cols = 80; // Fixed width for consistent terminal display
    
    // Generate animation options for the dropdown
    const animationOptions = animationRegistry.getAnimationMetadata()
      .map(meta => `<option value="${meta.id}" ${meta.id === this.currentAnimationId ? 'selected' : ''}>${meta.name}</option>`)
      .join('');
    
    app.innerHTML = `
      <div class="animation-selector">
        <label for="animation-select">Animation:</label>
        <select id="animation-select">
          ${animationOptions}
        </select>
      </div>
      
      <textarea 
        id="terminal-screen" 
        class="terminal-screen" 
        readonly
        rows="${rows}" 
        cols="${cols}"
      ></textarea>
      
      <div class="controls">
        <div class="frame-controls">
          <button id="start-btn">⏮ Start</button>
          <button id="prev-btn">◀ Prev</button>
          <button id="run-btn" class="run-button">▶ Run</button>
          <button id="next-btn">Next ▶</button>
          <button id="end-btn">End ⏭</button>
        </div>
        
        <div class="loop-control">
          <button id="loop-btn" class="loop-button">🔄 Loop: OFF</button>
        </div>
        
        <div class="bottom-controls">
          <div class="frame-info">
            <label for="current-frame">Frame:</label>
            <input type="text" id="current-frame" readonly value="1">
            <span>/ ${currentAnimationFrames!.getFrameCount()}</span>
          </div>
          
          <div class="speed-control">
            <label for="frame-duration">Frame Duration (ms):</label>
            <input type="number" id="frame-duration" value="100" min="50" max="2000" step="50">
          </div>
        </div>
      </div>
    `;

    // Get references to DOM elements
    this.terminalScreen = document.getElementById('terminal-screen') as HTMLTextAreaElement;
    this.runButton = document.getElementById('run-btn') as HTMLButtonElement;
    this.prevButton = document.getElementById('prev-btn') as HTMLButtonElement;
    this.nextButton = document.getElementById('next-btn') as HTMLButtonElement;
    this.startButton = document.getElementById('start-btn') as HTMLButtonElement;
    this.endButton = document.getElementById('end-btn') as HTMLButtonElement;
    this.loopButton = document.getElementById('loop-btn') as HTMLButtonElement;
    this.frameDurationInput = document.getElementById('frame-duration') as HTMLInputElement;
    this.frameInfo = document.getElementById('current-frame') as HTMLInputElement;
    this.animationSelector = document.getElementById('animation-select') as HTMLSelectElement;
  }

  private bindEvents(): void {
    this.runButton.addEventListener('click', () => this.toggleAnimation());
    this.prevButton.addEventListener('click', () => this.previousFrame());
    this.nextButton.addEventListener('click', () => this.nextFrame());
    this.startButton.addEventListener('click', () => this.goToStart());
    this.endButton.addEventListener('click', () => this.goToEnd());
    this.loopButton.addEventListener('click', () => this.toggleLoop());
    this.frameDurationInput.addEventListener('change', () => this.updateCurrentFrameDuration());
    this.animationSelector.addEventListener('change', () => this.changeAnimation());
  }

  private async changeAnimation(): Promise<void> {
    // Stop current animation if playing
    if (this.isPlaying) {
      this.stopAnimation();
    }

    // Switch to new animation
    this.currentAnimationId = this.animationSelector.value;
    currentAnimationFrames = animationRegistry.createAnimationFrames(this.currentAnimationId) || null;
    
    if (!currentAnimationFrames) {
      console.error(`Failed to load animation: ${this.currentAnimationId}`);
      return;
    }

    // Reset to first frame
    this.currentFrame = 0;
    
    // Update the UI dimensions and content
    this.updateTerminalDimensions();
    this.updateFrameCount();
    this.updateDisplay();
  }

  private updateTerminalDimensions(): void {
    const dimensions = currentAnimationFrames!.getMaxDimensions();
    const rows = Math.max(17, dimensions.maxHeight + 2);
    const cols = 80; // Fixed width for consistent terminal display
    
    this.terminalScreen.rows = rows;
    this.terminalScreen.cols = cols;
  }

  private updateFrameCount(): void {
    const frameCountSpan = document.querySelector('.frame-info span');
    if (frameCountSpan) {
      frameCountSpan.textContent = `/ ${currentAnimationFrames!.getFrameCount()}`;
    }
  }

  private updateDisplay(): void {
    if (!currentAnimationFrames) return;
    
    this.terminalScreen.value = currentAnimationFrames.getFrameText(this.currentFrame);
    this.frameInfo.value = (this.currentFrame + 1).toString();
    
    // Update the duration input to show the current frame's duration
    this.frameDurationInput.value = currentAnimationFrames.getFrameDuration(this.currentFrame).toString();
    
    // Update button states
    this.prevButton.disabled = this.currentFrame === 0;
    this.nextButton.disabled = this.currentFrame === currentAnimationFrames.getFrameCount() - 1;
  }

  private toggleAnimation(): void {
    if (this.isPlaying) {
      this.stopAnimation();
    } else {
      this.startAnimation();
    }
  }

  private startAnimation(): void {
    this.isPlaying = true;
    this.runButton.textContent = '⏸ Stop';
    this.currentFrame = 0; // Start from beginning
    this.scheduleNextFrame();
  }

  private scheduleNextFrame(): void {
    if (!this.isPlaying || !currentAnimationFrames) return;
    
    this.updateDisplay();
    
    if (this.currentFrame < currentAnimationFrames.getFrameCount() - 1) {
      const currentFrameDuration = currentAnimationFrames.getFrameDuration(this.currentFrame);
      this.animationTimeout = window.setTimeout(() => {
        this.currentFrame++;
        this.scheduleNextFrame();
      }, currentFrameDuration);
    } else {
      // Animation reached the end
      if (this.isLooping) {
        // Loop back to the beginning
        const currentFrameDuration = currentAnimationFrames.getFrameDuration(this.currentFrame);
        this.animationTimeout = window.setTimeout(() => {
          this.currentFrame = 0;
          this.scheduleNextFrame();
        }, currentFrameDuration);
      } else {
        // Animation complete, stop and hold on last frame
        this.stopAnimation();
      }
    }
  }

  private stopAnimation(): void {
    this.isPlaying = false;
    this.runButton.textContent = '▶ Run';
    
    if (this.animationTimeout) {
      clearTimeout(this.animationTimeout);
      this.animationTimeout = null;
    }
    
    this.updateDisplay();
  }

  private previousFrame(): void {
    if (this.currentFrame > 0) {
      this.currentFrame--;
      this.updateDisplay();
    }
  }

  private nextFrame(): void {
    if (!currentAnimationFrames) return;
    
    if (this.currentFrame < currentAnimationFrames.getFrameCount() - 1) {
      this.currentFrame++;
      this.updateDisplay();
    }
  }

  private updateCurrentFrameDuration(): void {
    if (!currentAnimationFrames) return;
    
    const newDuration = parseInt(this.frameDurationInput.value);
    currentAnimationFrames.setFrameDuration(this.currentFrame, newDuration);
    
    // No need to restart animation as the new duration will be used for the next frame
  }

  private goToStart(): void {
    if (this.isPlaying) {
      this.stopAnimation();
    }
    this.currentFrame = 0;
    this.updateDisplay();
  }

  private goToEnd(): void {
    if (!currentAnimationFrames) return;
    
    if (this.isPlaying) {
      this.stopAnimation();
    }
    this.currentFrame = currentAnimationFrames.getFrameCount() - 1;
    this.updateDisplay();
  }

  private toggleLoop(): void {
    this.isLooping = !this.isLooping;
    this.loopButton.textContent = this.isLooping ? '🔄 Loop: ON' : '🔄 Loop: OFF';
    this.loopButton.classList.toggle('active', this.isLooping);
  }
}

// Initialize the application
new ASCIIAnimationPlayer();
