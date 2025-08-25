import type { RGBColor } from '../color-palette';

export interface TerminalPalette {
  name: string;
  colors: RGBColor[];
}

export const TERMINAL_PALETTES: TerminalPalette[] = [
  {
    name: "CGA/EGA/VGA",
    colors: [
      { r: 0, g: 0, b: 0 },       // Black
      { r: 170, g: 0, b: 0 },     // Red
      { r: 0, g: 170, b: 0 },     // Green
      { r: 170, g: 85, b: 0 },    // Yellow
      { r: 0, g: 0, b: 170 },     // Blue
      { r: 170, g: 0, b: 170 },   // Magenta
      { r: 0, g: 170, b: 170 },   // Cyan
      { r: 170, g: 170, b: 170 }, // White
      { r: 85, g: 85, b: 85 },    // Bright Black (Gray)
      { r: 255, g: 85, b: 85 },   // Bright Red
      { r: 85, g: 255, b: 85 },   // Bright Green
      { r: 255, g: 255, b: 85 },  // Bright Yellow
      { r: 85, g: 85, b: 255 },   // Bright Blue
      { r: 255, g: 85, b: 255 },  // Bright Magenta
      { r: 85, g: 255, b: 255 },  // Bright Cyan
      { r: 255, g: 255, b: 255 }, // Bright White
    ]
  },
  {
    name: "Windows Console",
    colors: [
      { r: 0, g: 0, b: 0 },       // Black
      { r: 128, g: 0, b: 0 },     // Red
      { r: 0, g: 128, b: 0 },     // Green
      { r: 128, g: 128, b: 0 },   // Yellow
      { r: 0, g: 0, b: 128 },     // Blue
      { r: 128, g: 0, b: 128 },   // Magenta
      { r: 0, g: 128, b: 128 },   // Cyan
      { r: 192, g: 192, b: 192 }, // White
      { r: 128, g: 128, b: 128 }, // Bright Black (Gray)
      { r: 255, g: 0, b: 0 },     // Bright Red
      { r: 0, g: 255, b: 0 },     // Bright Green
      { r: 255, g: 255, b: 0 },   // Bright Yellow
      { r: 0, g: 0, b: 255 },     // Bright Blue
      { r: 255, g: 0, b: 255 },   // Bright Magenta
      { r: 0, g: 255, b: 255 },   // Bright Cyan
      { r: 255, g: 255, b: 255 }, // Bright White
    ]
  },
  {
    name: "Windows PowerShell 1.0-6.0",
    colors: [
      { r: 0, g: 0, b: 0 },       // Black
      { r: 128, g: 0, b: 0 },     // Red
      { r: 0, g: 128, b: 0 },     // Green
      { r: 238, g: 237, b: 240 }, // Yellow (remapped)
      { r: 0, g: 0, b: 128 },     // Blue
      { r: 1, g: 36, b: 86 },     // Magenta (remapped)
      { r: 0, g: 128, b: 128 },   // Cyan
      { r: 192, g: 192, b: 192 }, // White
      { r: 128, g: 128, b: 128 }, // Bright Black (Gray)
      { r: 255, g: 0, b: 0 },     // Bright Red
      { r: 0, g: 255, b: 0 },     // Bright Green
      { r: 255, g: 255, b: 0 },   // Bright Yellow
      { r: 0, g: 0, b: 255 },     // Bright Blue
      { r: 255, g: 0, b: 255 },   // Bright Magenta
      { r: 0, g: 255, b: 255 },   // Bright Cyan
      { r: 255, g: 255, b: 255 }, // Bright White
    ]
  },
  {
    name: "Visual Studio Code",
    colors: [
      { r: 0, g: 0, b: 0 },       // Black
      { r: 205, g: 49, b: 49 },   // Red
      { r: 13, g: 188, b: 121 },  // Green
      { r: 229, g: 229, b: 16 },  // Yellow
      { r: 36, g: 114, b: 200 },  // Blue
      { r: 188, g: 63, b: 188 },  // Magenta
      { r: 17, g: 168, b: 205 },  // Cyan
      { r: 229, g: 229, b: 229 }, // White
      { r: 102, g: 102, b: 102 }, // Bright Black (Gray)
      { r: 241, g: 76, b: 76 },   // Bright Red
      { r: 35, g: 209, b: 139 },  // Bright Green
      { r: 245, g: 245, b: 67 },  // Bright Yellow
      { r: 59, g: 142, b: 234 },  // Bright Blue
      { r: 214, g: 112, b: 214 }, // Bright Magenta
      { r: 41, g: 184, b: 219 },  // Bright Cyan
      { r: 229, g: 229, b: 229 }, // Bright White
    ]
  },
  {
    name: "Windows 10 Console",
    colors: [
      { r: 12, g: 12, b: 12 },    // Black
      { r: 197, g: 15, b: 31 },   // Red
      { r: 19, g: 161, b: 14 },   // Green
      { r: 193, g: 156, b: 0 },   // Yellow
      { r: 0, g: 55, b: 218 },    // Blue
      { r: 136, g: 23, b: 152 },  // Magenta
      { r: 58, g: 150, b: 221 },  // Cyan
      { r: 204, g: 204, b: 204 }, // White
      { r: 118, g: 118, b: 118 }, // Bright Black (Gray)
      { r: 231, g: 72, b: 86 },   // Bright Red
      { r: 22, g: 198, b: 12 },   // Bright Green
      { r: 249, g: 241, b: 165 }, // Bright Yellow
      { r: 59, g: 120, b: 255 },  // Bright Blue
      { r: 180, g: 0, b: 158 },   // Bright Magenta
      { r: 97, g: 214, b: 214 },  // Bright Cyan
      { r: 242, g: 242, b: 242 }, // Bright White
    ]
  },
  {
    name: "Terminal.app",
    colors: [
      { r: 0, g: 0, b: 0 },       // Black
      { r: 153, g: 0, b: 0 },     // Red
      { r: 0, g: 166, b: 0 },     // Green
      { r: 153, g: 153, b: 0 },   // Yellow
      { r: 0, g: 0, b: 178 },     // Blue
      { r: 178, g: 0, b: 178 },   // Magenta
      { r: 0, g: 166, b: 178 },   // Cyan
      { r: 191, g: 191, b: 191 }, // White
      { r: 102, g: 102, b: 102 }, // Bright Black (Gray)
      { r: 230, g: 0, b: 0 },     // Bright Red
      { r: 0, g: 217, b: 0 },     // Bright Green
      { r: 230, g: 230, b: 0 },   // Bright Yellow
      { r: 0, g: 0, b: 255 },     // Bright Blue
      { r: 230, g: 0, b: 230 },   // Bright Magenta
      { r: 0, g: 230, b: 230 },   // Bright Cyan
      { r: 230, g: 230, b: 230 }, // Bright White
    ]
  },
  {
    name: "PuTTY",
    colors: [
      { r: 0, g: 0, b: 0 },       // Black
      { r: 187, g: 0, b: 0 },     // Red
      { r: 0, g: 187, b: 0 },     // Green
      { r: 187, g: 187, b: 0 },   // Yellow
      { r: 0, g: 0, b: 187 },     // Blue
      { r: 187, g: 0, b: 187 },   // Magenta
      { r: 0, g: 187, b: 187 },   // Cyan
      { r: 187, g: 187, b: 187 }, // White
      { r: 85, g: 85, b: 85 },    // Bright Black (Gray)
      { r: 255, g: 85, b: 85 },   // Bright Red
      { r: 85, g: 255, b: 85 },   // Bright Green
      { r: 255, g: 255, b: 85 },  // Bright Yellow
      { r: 85, g: 85, b: 255 },   // Bright Blue
      { r: 255, g: 85, b: 255 },  // Bright Magenta
      { r: 85, g: 255, b: 255 },  // Bright Cyan
      { r: 255, g: 255, b: 255 }, // Bright White
    ]
  },
  {
    name: "mIRC",
    colors: [
      { r: 0, g: 0, b: 0 },       // Black
      { r: 127, g: 0, b: 0 },     // Red
      { r: 0, g: 147, b: 0 },     // Green
      { r: 252, g: 127, b: 0 },   // Yellow
      { r: 0, g: 0, b: 127 },     // Blue
      { r: 156, g: 0, b: 156 },   // Magenta
      { r: 0, g: 147, b: 147 },   // Cyan
      { r: 210, g: 210, b: 210 }, // White
      { r: 127, g: 127, b: 127 }, // Bright Black (Gray)
      { r: 255, g: 0, b: 0 },     // Bright Red
      { r: 0, g: 252, b: 0 },     // Bright Green
      { r: 255, g: 255, b: 0 },   // Bright Yellow
      { r: 0, g: 0, b: 252 },     // Bright Blue
      { r: 255, g: 0, b: 255 },   // Bright Magenta
      { r: 0, g: 255, b: 255 },   // Bright Cyan
      { r: 255, g: 255, b: 255 }, // Bright White
    ]
  },
  {
    name: "xterm",
    colors: [
      { r: 0, g: 0, b: 0 },       // Black
      { r: 205, g: 0, b: 0 },     // Red
      { r: 0, g: 205, b: 0 },     // Green
      { r: 205, g: 205, b: 0 },   // Yellow
      { r: 0, g: 0, b: 238 },     // Blue
      { r: 205, g: 0, b: 205 },   // Magenta
      { r: 0, g: 205, b: 205 },   // Cyan
      { r: 229, g: 229, b: 229 }, // White
      { r: 127, g: 127, b: 127 }, // Bright Black (Gray)
      { r: 255, g: 0, b: 0 },     // Bright Red
      { r: 0, g: 255, b: 0 },     // Bright Green
      { r: 255, g: 255, b: 0 },   // Bright Yellow
      { r: 92, g: 92, b: 255 },   // Bright Blue
      { r: 255, g: 0, b: 255 },   // Bright Magenta
      { r: 0, g: 255, b: 255 },   // Bright Cyan
      { r: 255, g: 255, b: 255 }, // Bright White
    ]
  },
  {
    name: "Ubuntu",
    colors: [
      { r: 1, g: 1, b: 1 },       // Black
      { r: 222, g: 56, b: 43 },   // Red
      { r: 57, g: 181, b: 74 },   // Green
      { r: 255, g: 199, b: 6 },   // Yellow
      { r: 0, g: 111, b: 184 },   // Blue
      { r: 118, g: 38, b: 113 },  // Magenta
      { r: 44, g: 181, b: 233 },  // Cyan
      { r: 204, g: 204, b: 204 }, // White
      { r: 128, g: 128, b: 128 }, // Bright Black (Gray)
      { r: 255, g: 0, b: 0 },     // Bright Red
      { r: 0, g: 255, b: 0 },     // Bright Green
      { r: 255, g: 255, b: 0 },   // Bright Yellow
      { r: 0, g: 0, b: 255 },     // Bright Blue
      { r: 255, g: 0, b: 255 },   // Bright Magenta
      { r: 0, g: 255, b: 255 },   // Bright Cyan
      { r: 255, g: 255, b: 255 }, // Bright White
    ]
  },
  {
    name: "Eclipse Terminal",
    colors: [
      { r: 0, g: 0, b: 0 },       // Black
      { r: 205, g: 0, b: 0 },     // Red
      { r: 0, g: 205, b: 0 },     // Green
      { r: 205, g: 205, b: 0 },   // Yellow
      { r: 0, g: 0, b: 238 },     // Blue
      { r: 205, g: 0, b: 205 },   // Magenta
      { r: 0, g: 205, b: 205 },   // Cyan
      { r: 229, g: 229, b: 229 }, // White
      { r: 0, g: 0, b: 0 },       // Bright Black (Gray)
      { r: 255, g: 0, b: 0 },     // Bright Red
      { r: 0, g: 255, b: 0 },     // Bright Green
      { r: 255, g: 255, b: 0 },   // Bright Yellow
      { r: 92, g: 92, b: 255 },   // Bright Blue
      { r: 255, g: 0, b: 255 },   // Bright Magenta
      { r: 0, g: 255, b: 255 },   // Bright Cyan
      { r: 255, g: 255, b: 255 }, // Bright White
    ]
  }
];

export const getTerminalPalette = (name: string): TerminalPalette | undefined => {
  return TERMINAL_PALETTES.find(palette => palette.name === name);
};

export const getDefaultTerminalPalette = (): TerminalPalette => {
  return TERMINAL_PALETTES.find(palette => palette.name === "Terminal.app") || TERMINAL_PALETTES[0];
};
