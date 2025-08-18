# ASCII Animation Player

A simple rig for playing back ascii animation to test timing, style and dynamic elements. 

<img width="1436" height="1196" alt="Screenshot 2025-08-18 at 9 18 12 AM" src="https://github.com/user-attachments/assets/ebb9f94d-e47c-47c6-8c97-7bf73347dab5" />

🔗 [Live demo](https://cameronfoxly.github.io/cli-ascii-animation/)

## Features

- **React-based UI** with modern component architecture
- **Terminal-styled interface** with Fira Code font
- **Dynamic display sizing** that adapts to animation content
- **Editable text** - you can copy and paste the ASCII content
- **Multiple animation support** with dropdown selector
- **Animation controls**:
  - Run/Stop button with loop support
  - Frame-by-frame navigation (previous/next/start/end)
  - Adjustable frame rate (50-2000ms per frame)
- **Version support** for animation-01 with dynamic version loading
- **GitHub Pages deployment** ready

## Development

### Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/cameronfoxly/cli-ascii-animation.git
   cd cli-ascii-animation
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser to `http://localhost:5173`

### Building for Production

```bash
npm run build
```

The built files will be in the `dist/` directory.

### Preview Production Build

```bash
npm run preview
```

## Deployment

This project is configured for automatic deployment to GitHub Pages via GitHub Actions. When you push to the `main` branch, the workflow will:

1. Build the project
2. Deploy to GitHub Pages
3. Make it available at `https://cameronfoxly.github.io/cli-ascii-animation/`

## Customizing the Animation

The ASCII animation frames are now organized in a separate, maintainable component. To modify the animations:

1. **Edit frames directly**: Open `src/animation-frames.ts` and modify the frames array
2. **Use the API**: The `AnimationFrames` class provides methods to add, remove, and update frames programmatically

Example of adding a new frame:
```typescript
// In animation-frames.ts
{
  title: "Frame 13",
  content: `
╔══════════════════════════════════════╗
║        Your ASCII art here...        ║
╚══════════════════════════════════════╝`
}
```

For detailed documentation on the animation system, see [docs/animation-frames.md](docs/animation-frames.md).

## Color Scheme Customization

To change the terminal colors, edit the CSS variables in `src/style.css`:

```css
:root {
  color: #00ff00; /* Text color */
  background-color: #000000; /* Background color */
}
```

Popular terminal color schemes:
- **Amber**: `#ffb000` on `#000000`
- **Blue**: `#0099ff` on `#000000`
- **White**: `#ffffff` on `#000000`

## License

MIT License - feel free to use this project as a template for your own ASCII animations!
