# Animation Frames Documentation

## Overview

The ASCII animation frames have been refactored into a separate, maintainable component located in `src/animation-frames.ts`. This provides better organization and makes it easier to manage the animation content.

## Structure

### AnimationFrame Interface
```typescript
interface AnimationFrame {
  title: string;    // Frame title (e.g., "Frame 01")
  content: string;  // ASCII art content
}
```

### AnimationFrames Class

The `AnimationFrames` class provides the following methods:

#### Core Methods
- `getFrame(index: number)` - Get a frame object by index
- `getFrameText(index: number)` - Get formatted frame text (title + content)
- `getFrameCount()` - Get total number of frames
- `getAllFramesAsText()` - Get all frames as formatted text array (for backward compatibility)

#### Management Methods
- `addFrame(frame: AnimationFrame)` - Add a new frame
- `removeFrame(index: number)` - Remove a frame by index
- `updateFrame(index: number, frame: AnimationFrame)` - Update an existing frame
- `getFrameTitles()` - Get array of all frame titles

## Usage in Main Application

```typescript
import { AnimationFrames } from './animation-frames';

// Initialize the animation frames component
const animationFrames = new AnimationFrames();

// Use in your application
const frameText = animationFrames.getFrameText(0);
const totalFrames = animationFrames.getFrameCount();
```

## Adding New Frames

To add new frames, you can either:

1. **Modify the frames array directly** in `animation-frames.ts` (recommended for static content)
2. **Use the API methods** to add frames dynamically:

```typescript
animationFrames.addFrame({
  title: "Frame 13",
  content: `
╔══════════════════════════════════════════════════════════════════════════════╗
║                           [ NEW FRAME CONTENT ]                             ║
║                                                                              ║
╚══════════════════════════════════════════════════════════════════════════════╝`
});
```

## Benefits of This Structure

1. **Separation of Concerns** - Animation data is separate from player logic
2. **Easy Maintenance** - Frames can be modified without touching the main application
3. **Type Safety** - TypeScript interfaces ensure consistent frame structure
4. **Extensibility** - Easy to add new features like frame validation, import/export, etc.
5. **Reusability** - The AnimationFrames class can be used in other projects

## File Organization

```
src/
├── main.ts              # Main application and player logic
├── animation-frames.ts  # Frame data and management
└── style.css           # Styling
```

This structure makes the codebase more maintainable and follows best practices for component organization.
