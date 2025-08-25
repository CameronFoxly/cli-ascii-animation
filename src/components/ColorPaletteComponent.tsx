import React, { useState } from 'react';
import { ColorPalette, ANSI_COLOR_NAMES } from '../color-palette';
import { TERMINAL_PALETTES, getDefaultTerminalPalette } from './palette-library';

interface ColorPaletteComponentProps {
  colorPalette: ColorPalette;
  selectedColor: number;
  onColorSelect: (colorIndex: number) => void;
  onColorChange?: (colorIndex: number, r: number, g: number, b: number) => void;
  onPaletteLoad?: (paletteColors: Array<{ r: number; g: number; b: number }>) => void;
}

const ColorPaletteComponent: React.FC<ColorPaletteComponentProps> = ({
  colorPalette,
  selectedColor,
  onColorSelect,
  onColorChange,
  onPaletteLoad,
}) => {
  const [selectedTerminal, setSelectedTerminal] = useState<string>(getDefaultTerminalPalette().name);

  const handleColorClick = (index: number) => {
    onColorSelect(index);
  };

  const handleColorChange = (index: number, event: React.ChangeEvent<HTMLInputElement>) => {
    if (!onColorChange) return;
    
    const hex = event.target.value;
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    
    onColorChange(index, r, g, b);
  };

  const handleTerminalPaletteChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const terminalName = event.target.value;
    setSelectedTerminal(terminalName);
    
    const terminalPalette = TERMINAL_PALETTES.find(palette => palette.name === terminalName);
    if (terminalPalette && onPaletteLoad) {
      onPaletteLoad(terminalPalette.colors);
    }
  };

  const rgbToHex = (r: number, g: number, b: number): string => {
    return `#${r.toString(16).padStart(2, '0')}${g.toString(16).padStart(2, '0')}${b.toString(16).padStart(2, '0')}`;
  };

  return (
    <div className="color-palette">
      <h3>Color Palette</h3>
      
      <div className="terminal-palette-selector">
        <label htmlFor="terminal-select">Terminal Palette:</label>
        <select 
          id="terminal-select"
          value={selectedTerminal}
          onChange={handleTerminalPaletteChange}
          className="terminal-select"
        >
          {TERMINAL_PALETTES.map((palette) => (
            <option key={palette.name} value={palette.name}>
              {palette.name}
            </option>
          ))}
        </select>
      </div>

      <div className="color-grid">
        {Array.from({ length: 16 }, (_, index) => {
          const color = colorPalette.getColor(index);
          const isSelected = selectedColor === index;
          
          return (
            <div 
              key={index}
              className={`color-swatch ${isSelected ? 'selected' : ''}`}
              title={`${index}: ${ANSI_COLOR_NAMES[index]}`}
            >
              <div
                className="color-display"
                style={{ backgroundColor: colorPalette.getCSSColor(index) }}
                onClick={() => handleColorClick(index)}
              />
              {onColorChange && (
                <input
                  type="color"
                  value={rgbToHex(color.r, color.g, color.b)}
                  onChange={(e) => handleColorChange(index, e)}
                  className="color-picker"
                  title={`Customize ${ANSI_COLOR_NAMES[index]}`}
                />
              )}
              <span className="color-index">{index}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ColorPaletteComponent;
