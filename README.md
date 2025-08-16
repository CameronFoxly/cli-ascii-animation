# CLI ASCII Animation Player

A modern web application for displaying ASCII animations in a terminal-style interface. Built with React, Vite, and TypeScript.

## Features

- **React-based UI** with modern component architecture
- **Terminal-styled interface** with Fira Code font and green-on-black color scheme
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

### Prerequisites

- Node.js 18 or higher
- npm

### Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/cli-ascii-animation.git
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
3. Make it available at `https://yourusername.github.io/cli-ascii-animation/`

### Manual GitHub Pages Setup

1. Go to your repository settings
2. Navigate to "Pages" in the sidebar
3. Under "Source", select "GitHub Actions"
4. The deployment workflow will handle the rest

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

## Technologies Used

- **Vite** - Fast build tool and development server
- **TypeScript** - Type-safe JavaScript
- **CSS3** - Modern styling with Fira Code font
- **GitHub Actions** - Automated deployment

## License

MIT License - feel free to use this project as a template for your own ASCII animations!
