import './style.css'
import { AnimationFrames } from './animation-frames'

// Initialize the animation frames component
const animationFrames = new AnimationFrames();

class ASCIIAnimationPlayer {
  private currentFrame: number = 0;
  private isPlaying: boolean = false;
  private animationInterval: number | null = null;
  private frameRate: number = 100; // milliseconds per frame

  private terminalScreen!: HTMLTextAreaElement;
  private runButton!: HTMLButtonElement;
  private prevButton!: HTMLButtonElement;
  private nextButton!: HTMLButtonElement;
  private frameRateInput!: HTMLInputElement;
  private frameInfo!: HTMLInputElement;

  constructor() {
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
    
    app.innerHTML = `
      <textarea 
        id="terminal-screen" 
        class="terminal-screen" 
        readonly
        rows="15" 
        cols="80"
      ></textarea>
      
      <div class="controls">
        <div class="frame-controls">
          <button id="prev-btn">◀ Prev</button>
          <button id="run-btn" class="run-button">▶ Run</button>
          <button id="next-btn">Next ▶</button>
        </div>
        
        <div class="frame-info">
          <label for="current-frame">Frame:</label>
          <input type="text" id="current-frame" readonly value="1">
          <span>/ ${animationFrames.getFrameCount()}</span>
        </div>
        
        <div class="speed-control">
          <label for="frame-rate">Frame Rate (ms):</label>
          <input type="number" id="frame-rate" value="100" min="50" max="2000" step="50">
        </div>
      </div>
    `;

    // Get references to DOM elements
    this.terminalScreen = document.getElementById('terminal-screen') as HTMLTextAreaElement;
    this.runButton = document.getElementById('run-btn') as HTMLButtonElement;
    this.prevButton = document.getElementById('prev-btn') as HTMLButtonElement;
    this.nextButton = document.getElementById('next-btn') as HTMLButtonElement;
    this.frameRateInput = document.getElementById('frame-rate') as HTMLInputElement;
    this.frameInfo = document.getElementById('current-frame') as HTMLInputElement;
  }

  private bindEvents(): void {
    this.runButton.addEventListener('click', () => this.toggleAnimation());
    this.prevButton.addEventListener('click', () => this.previousFrame());
    this.nextButton.addEventListener('click', () => this.nextFrame());
    this.frameRateInput.addEventListener('change', () => this.updateFrameRate());
  }

  private updateDisplay(): void {
    this.terminalScreen.value = animationFrames.getFrameText(this.currentFrame);
    this.frameInfo.value = (this.currentFrame + 1).toString();
    
    // Update button states
    this.prevButton.disabled = this.currentFrame === 0;
    this.nextButton.disabled = this.currentFrame === animationFrames.getFrameCount() - 1;
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
    
    this.animationInterval = window.setInterval(() => {
      this.updateDisplay();
      
      if (this.currentFrame < animationFrames.getFrameCount() - 1) {
        this.currentFrame++;
      } else {
        // Animation complete, stop and hold on last frame
        this.stopAnimation();
      }
    }, this.frameRate);
  }

  private stopAnimation(): void {
    this.isPlaying = false;
    this.runButton.textContent = '▶ Run';
    
    if (this.animationInterval) {
      clearInterval(this.animationInterval);
      this.animationInterval = null;
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
    if (this.currentFrame < animationFrames.getFrameCount() - 1) {
      this.currentFrame++;
      this.updateDisplay();
    }
  }

  private updateFrameRate(): void {
    this.frameRate = parseInt(this.frameRateInput.value);
    
    // If animation is playing, restart with new frame rate
    if (this.isPlaying) {
      this.stopAnimation();
      this.startAnimation();
    }
  }

}

// Initialize the application
new ASCIIAnimationPlayer();
