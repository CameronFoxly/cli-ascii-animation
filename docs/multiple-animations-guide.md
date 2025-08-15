# Multiple Animations Feature

This document explains how to add new animations to the ASCII animation player.

## Animation Structure

Each animation is a TypeScript file in the `src/animations/` folder following the naming pattern `animation-XX.ts` where XX is an incremented number (01, 02, 03, etc.).

### Animation File Template

```typescript
/**
 * Animation XX: Your Animation Name
 * 
 * Description of what the animation does.
 */

import type { Animation, AnimationFrame } from '../animation-registry';

const frames: AnimationFrame[] = [
  {
    title: "Frame Name",
    duration: 200, // Duration in milliseconds
    content: `
Your ASCII art content here
Multi-line strings are supported
    `
  },
  // Add more frames as needed
];

const animation: Animation = {
  metadata: {
    id: 'animation-XX', // Must match filename
    name: 'Display Name', // Shown in dropdown
    description: 'Optional description'
  },
  frames
};

export default animation;
```

## Key Features

### Automatic Discovery
- Animations are automatically discovered from the `animations/` folder
- No need to manually register new animations
- The system uses Vite's `import.meta.glob()` for dynamic imports

### Responsive Dimensions
- The terminal screen automatically resizes to fit the largest frame in the current animation
- Different animations can have completely different dimensions
- Content is automatically centered

### Animation Metadata
- Each animation has an ID (must match filename)
- Display name shown in the dropdown selector
- Optional description for documentation

## Current Animations

1. **Animation 01**: "Welcome Animation" - The original complex welcome animation
2. **Animation 02**: "Simple Loading" - A basic loading spinner
3. **Animation 03**: "Progress Bar" - A progress bar animation

## Adding New Animations

1. Create a new file in `src/animations/` following the naming pattern `animation-04.ts`, `animation-05.ts`, etc.
2. Copy the template above
3. Replace the frames array with your ASCII art
4. Update the metadata (id, name, description)
5. Save the file - it will be automatically discovered and appear in the dropdown

## Setting Default Animation

To change which animation loads by default, modify the `defaultAnimationId` in `src/animation-registry.ts`:

```typescript
private defaultAnimationId: string = 'animation-01'; // Change this
```

## Frame Properties

- **title**: A name for the frame (used for debugging/organization)
- **duration**: How long to display this frame in milliseconds
- **content**: The ASCII art content as a multi-line string

## Tips

- Keep ASCII art aligned for best results
- Use consistent spacing and formatting
- Test with different terminal sizes if targeting mobile devices
- Larger animations will automatically resize the terminal to fit
- Frame durations can vary within the same animation for dramatic effects
