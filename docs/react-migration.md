# React Migration Guide

This document outlines the migration from vanilla TypeScript to React for the CLI ASCII Animation Player.

## Architecture Changes

### Before (Vanilla TypeScript)
- Single `ASCIIAnimationPlayer` class in `main.ts`
- Direct DOM manipulation
- Imperative event handling
- Manual state management

### After (React)
- Component-based architecture
- Declarative UI with JSX
- React hooks for state management
- Custom hooks for reusable logic

## Component Structure

```
src/
├── App.tsx                    # Main application component
├── main.tsx                   # React root renderer
├── components/
│   ├── AnimationSelector.tsx  # Animation dropdown component
│   ├── VersionControl.tsx     # Version input component
│   ├── TerminalScreen.tsx     # ASCII display textarea
│   └── Controls.tsx           # Playback controls component
├── hooks/
│   └── useAnimationPlayer.ts  # Custom hook for animation logic
└── animation-registry.ts      # Unchanged core logic
```

## Key Components

### App.tsx
- Main application container
- Manages global state (animation registry, current animation, version)
- Coordinates between components
- Uses `useAnimationPlayer` hook for playback logic

### useAnimationPlayer Hook
- Encapsulates animation playback logic
- Manages frame progression, looping, and timing
- Provides clean interface for play controls
- Automatically handles cleanup

### Individual Components
- **AnimationSelector**: Dropdown for selecting animations
- **VersionControl**: Version input (only visible for animation-01)
- **TerminalScreen**: ASCII content display with fade-in effect
- **Controls**: All playback controls (play/pause, navigation, loop, speed)

## State Management

### React Hooks Used
- `useState`: Component state
- `useEffect`: Side effects and lifecycle
- `useCallback`: Memoized callbacks
- `useRef`: DOM references and timeout handling

### State Flow
1. App initializes animation registry
2. Loads default animation
3. useAnimationPlayer hook manages playback state
4. Components receive props and call event handlers
5. State updates trigger re-renders

## Migration Benefits

### Code Organization
- Clear separation of concerns
- Reusable components
- Easier to test individual pieces
- Better maintainability

### Performance
- React's efficient re-rendering
- Component memoization opportunities
- Hot Module Replacement during development

### Developer Experience
- Type-safe props and state
- Better debugging with React DevTools
- Familiar React patterns
- More declarative code

## Configuration Changes

### TypeScript Config
```json
{
  "jsx": "react-jsx",
  "types": ["react", "react-dom"]
}
```

### Vite Config
```typescript
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/cli-ascii-animation/'
})
```

### Dependencies Added
- `react`
- `react-dom`
- `@types/react`
- `@types/react-dom`
- `@vitejs/plugin-react`

## Usage Examples

### Using as a Component
```tsx
import { AnimationPlayer } from './src/App';

function MyApp() {
  return (
    <div>
      <h1>My ASCII Animations</h1>
      <AnimationPlayer />
    </div>
  );
}
```

### Extending with Custom Animations
The animation registry system remains unchanged, so adding new animations follows the same pattern as before.

## Future Enhancements

With React architecture in place, these features become easier to implement:

1. **Multiple Animation Players**: Render multiple instances
2. **Animation Playlist**: Queue multiple animations
3. **Custom Themes**: React context for theming
4. **Export Functionality**: Download animations as GIFs
5. **Real-time Editing**: Live animation editor
6. **Animation Library**: Browse and import community animations

## Performance Considerations

- Components are optimized for minimal re-renders
- Animation timing uses native setTimeout (not React state updates)
- Large animation data is memoized
- CSS transitions handle visual effects

This React migration maintains all existing functionality while providing a more scalable and maintainable codebase.
