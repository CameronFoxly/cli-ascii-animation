/**
 * Color Palette Management
 * 
 * Manages the 16 ANSI colors with customizable RGB values for the session.
 * Default colors follow the standard 4-bit ANSI color scheme.
 */

export interface RGBColor {
  r: number;
  g: number;
  b: number;
}

export const DEFAULT_ANSI_COLORS: RGBColor[] = [
  // Basic Colors (0-7)
  { r: 0, g: 0, b: 0 },       // 0: Black
  { r: 128, g: 0, b: 0 },     // 1: Red
  { r: 0, g: 128, b: 0 },     // 2: Green
  { r: 128, g: 128, b: 0 },   // 3: Yellow
  { r: 0, g: 0, b: 128 },     // 4: Blue
  { r: 128, g: 0, b: 128 },   // 5: Magenta
  { r: 0, g: 128, b: 128 },   // 6: Cyan
  { r: 192, g: 192, b: 192 }, // 7: White
  
  // Bright Colors (8-15)
  { r: 128, g: 128, b: 128 }, // 8: Bright Black (Gray)
  { r: 255, g: 0, b: 0 },     // 9: Bright Red
  { r: 0, g: 255, b: 0 },     // 10: Bright Green
  { r: 255, g: 255, b: 0 },   // 11: Bright Yellow
  { r: 0, g: 0, b: 255 },     // 12: Bright Blue
  { r: 255, g: 0, b: 255 },   // 13: Bright Magenta
  { r: 0, g: 255, b: 255 },   // 14: Bright Cyan
  { r: 255, g: 255, b: 255 }, // 15: Bright White
];

export const ANSI_COLOR_NAMES = [
  'Black', 'Red', 'Green', 'Yellow', 'Blue', 'Magenta', 'Cyan', 'White',
  'Bright Black', 'Bright Red', 'Bright Green', 'Bright Yellow',
  'Bright Blue', 'Bright Magenta', 'Bright Cyan', 'Bright White'
];

export class ColorPalette {
  private colors: RGBColor[];

  constructor() {
    this.colors = [...DEFAULT_ANSI_COLORS];
  }

  /**
   * Get color at specific palette index
   */
  getColor(index: number): RGBColor {
    if (index < 0 || index >= 16) {
      throw new Error(`Color index ${index} out of range (0-15)`);
    }
    return { ...this.colors[index] };
  }

  /**
   * Set color at specific palette index
   */
  setColor(index: number, color: RGBColor): void {
    if (index < 0 || index >= 16) {
      throw new Error(`Color index ${index} out of range (0-15)`);
    }
    this.colors[index] = { ...color };
  }

  /**
   * Get CSS color string for a palette index
   */
  getCSSColor(index: number): string {
    const color = this.getColor(index);
    return `rgb(${color.r}, ${color.g}, ${color.b})`;
  }

  /**
   * Reset palette to default ANSI colors
   */
  resetToDefaults(): void {
    this.colors = [...DEFAULT_ANSI_COLORS];
  }

  /**
   * Get all colors as an array
   */
  getAllColors(): RGBColor[] {
    return this.colors.map(color => ({ ...color }));
  }

  /**
   * Get color name for display
   */
  getColorName(index: number): string {
    if (index < 0 || index >= 16) {
      return 'Unknown';
    }
    return ANSI_COLOR_NAMES[index];
  }
}
