/**
 * Color Editor State Management
 * 
 * Manages color painting operations with undo/redo functionality.
 * Supports brush and eraser tools with click and drag painting.
 */

import type { AnimationFrame } from './animation-registry';

export interface ColorEditAction {
  type: 'paint' | 'erase';
  position: string; // "row,col"
  previousColor?: number;
  newColor?: number;
  frameIndex: number;
}

export interface ColorEditBatch {
  actions: ColorEditAction[];
  timestamp: number;
}

export interface EditTool {
  type: 'brush' | 'eraser';
  selectedColor: number; // For brush tool (0-15)
}

export class ColorEditState {
  private undoStack: ColorEditBatch[] = [];
  private redoStack: ColorEditBatch[] = [];
  private currentBatch: ColorEditAction[] = [];
  private readonly maxUndoSteps = 10;

  /**
   * Start a new edit batch (for drag operations)
   */
  startBatch(): void {
    this.currentBatch = [];
  }

  /**
   * Add an action to the current batch
   */
  addAction(action: ColorEditAction): void {
    this.currentBatch.push(action);
  }

  /**
   * Commit the current batch to the undo stack
   */
  commitBatch(): void {
    if (this.currentBatch.length === 0) return;

    const batch: ColorEditBatch = {
      actions: [...this.currentBatch],
      timestamp: Date.now()
    };

    this.undoStack.push(batch);
    
    // Limit undo stack size
    if (this.undoStack.length > this.maxUndoSteps) {
      this.undoStack.shift();
    }

    // Clear redo stack when new action is performed
    this.redoStack = [];
    this.currentBatch = [];
  }

  /**
   * Apply a color edit action to frames
   */
  applyAction(frames: AnimationFrame[], action: ColorEditAction): void {
    const frame = frames[action.frameIndex];
    if (!frame) return;

    if (!frame.colors) {
      frame.colors = {};
    }

    if (action.type === 'paint' && action.newColor !== undefined) {
      frame.colors[action.position] = action.newColor;
    } else if (action.type === 'erase') {
      delete frame.colors[action.position];
    }
  }

  /**
   * Undo the last batch of actions
   */
  undo(frames: AnimationFrame[]): boolean {
    const batch = this.undoStack.pop();
    if (!batch) return false;

    // Reverse the actions
    for (let i = batch.actions.length - 1; i >= 0; i--) {
      const action = batch.actions[i];
      const frame = frames[action.frameIndex];
      if (!frame) continue;

      if (!frame.colors) {
        frame.colors = {};
      }

      if (action.previousColor !== undefined) {
        frame.colors[action.position] = action.previousColor;
      } else {
        delete frame.colors[action.position];
      }
    }

    this.redoStack.push(batch);
    return true;
  }

  /**
   * Redo the last undone batch of actions
   */
  redo(frames: AnimationFrame[]): boolean {
    const batch = this.redoStack.pop();
    if (!batch) return false;

    // Apply the actions
    for (const action of batch.actions) {
      this.applyAction(frames, action);
    }

    this.undoStack.push(batch);
    return true;
  }

  /**
   * Check if undo is available
   */
  canUndo(): boolean {
    return this.undoStack.length > 0;
  }

  /**
   * Check if redo is available
   */
  canRedo(): boolean {
    return this.redoStack.length > 0;
  }

  /**
   * Clear all history
   */
  clearHistory(): void {
    this.undoStack = [];
    this.redoStack = [];
    this.currentBatch = [];
  }

  /**
   * Paint a character at a specific position
   */
  paintCharacter(
    frames: AnimationFrame[], 
    frameIndex: number, 
    row: number, 
    col: number, 
    colorIndex: number
  ): void {
    const position = `${row},${col}`;
    const frame = frames[frameIndex];
    if (!frame) return;

    const previousColor = frame.colors?.[position];
    
    // Don't add action if color is the same
    if (previousColor === colorIndex) return;

    const action: ColorEditAction = {
      type: 'paint',
      position,
      previousColor,
      newColor: colorIndex,
      frameIndex
    };

    this.addAction(action);
    this.applyAction(frames, action);
  }

  /**
   * Paint a line between two points using Bresenham's line algorithm
   */
  paintLine(
    frames: AnimationFrame[], 
    frameIndex: number, 
    startRow: number, 
    startCol: number, 
    endRow: number, 
    endCol: number, 
    colorIndex: number
  ): void {
    const points = this.getLinePoints(startCol, startRow, endCol, endRow);
    
    // Paint each point in the line
    for (const [col, row] of points) {
      this.paintCharacter(frames, frameIndex, row, col, colorIndex);
    }
  }

  /**
   * Calculate line points using Bresenham's line algorithm
   */
  private getLinePoints(x0: number, y0: number, x1: number, y1: number): Array<[number, number]> {
    const points: Array<[number, number]> = [];
    
    const dx = Math.abs(x1 - x0);
    const dy = Math.abs(y1 - y0);
    const sx = x0 < x1 ? 1 : -1;
    const sy = y0 < y1 ? 1 : -1;
    let err = dx - dy;

    let x = x0;
    let y = y0;

    while (true) {
      points.push([x, y]);
      
      if (x === x1 && y === y1) break;
      
      const e2 = 2 * err;
      if (e2 > -dy) {
        err -= dy;
        x += sx;
      }
      if (e2 < dx) {
        err += dx;
        y += sy;
      }
    }

    return points;
  }

  /**
   * Erase color at a specific position
   */
  eraseCharacter(
    frames: AnimationFrame[], 
    frameIndex: number, 
    row: number, 
    col: number
  ): void {
    const position = `${row},${col}`;
    const frame = frames[frameIndex];
    if (!frame?.colors?.[position]) return; // Nothing to erase

    const previousColor = frame.colors[position];

    const action: ColorEditAction = {
      type: 'erase',
      position,
      previousColor,
      frameIndex
    };

    this.addAction(action);
    this.applyAction(frames, action);
  }
}
