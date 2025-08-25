import React, { useEffect, useRef, useState, useCallback } from 'react';
import type { AnimationFrame } from '../animation-registry';
import { ColorPalette } from '../color-palette';

interface TerminalScreenProps {
  content: string;
  rows: number;
  cols: number;
  frame?: AnimationFrame;
  colorPalette: ColorPalette;
  isEditMode?: boolean;
  selectedTool?: 'brush' | 'eraser';
  selectedColor?: number;
  onCharacterEdit?: (row: number, col: number) => void;
}

const TerminalScreen: React.FC<TerminalScreenProps> = ({
  content,
  rows,
  cols,
  frame,
  colorPalette,
  isEditMode = false,
  selectedTool = 'brush',
  selectedColor = 15, // Default to white
  onCharacterEdit,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStarted, setDragStarted] = useState(false);

  // Parse content into a 2D character grid
  const parseContent = useCallback((): string[][] => {
    const lines = content.split('\n');
    const grid: string[][] = [];
    
    for (let row = 0; row < rows; row++) {
      const line = lines[row] || '';
      const characters: string[] = [];
      
      for (let col = 0; col < cols; col++) {
        characters.push(line[col] || ' ');
      }
      
      grid.push(characters);
    }
    
    return grid;
  }, [content, rows, cols]);

  const characterGrid = parseContent();

  // Get color for a character at specific position
  const getCharacterColor = useCallback((row: number, col: number): string => {
    const position = `${row},${col}`;
    const colorIndex = frame?.colors?.[position];
    
    if (colorIndex !== undefined) {
      return colorPalette.getCSSColor(colorIndex);
    }
    
    return '#ffffff'; // Default white
  }, [frame?.colors, colorPalette]);

  // Handle character click/drag
  const handleCharacterInteraction = useCallback((row: number, col: number) => {
    if (!isEditMode || !onCharacterEdit) return;
    
    const char = characterGrid[row]?.[col];
    if (!char || char === ' ') return; // Don't edit spaces
    
    onCharacterEdit(row, col);
  }, [isEditMode, onCharacterEdit, characterGrid]);

  // Mouse event handlers
  const handleMouseDown = useCallback((row: number, col: number) => {
    if (!isEditMode) return;
    
    setIsDragging(true);
    setDragStarted(true);
    handleCharacterInteraction(row, col);
  }, [isEditMode, handleCharacterInteraction]);

  const handleMouseEnter = useCallback((row: number, col: number) => {
    if (!isDragging || !dragStarted) return;
    
    handleCharacterInteraction(row, col);
  }, [isDragging, dragStarted, handleCharacterInteraction]);

  const handleMouseUp = useCallback(() => {
    setIsDragging(false);
    setDragStarted(false);
  }, []);

  // Global mouse up listener for drag operations
  useEffect(() => {
    if (isDragging) {
      document.addEventListener('mouseup', handleMouseUp);
      return () => document.removeEventListener('mouseup', handleMouseUp);
    }
  }, [isDragging, handleMouseUp]);

  useEffect(() => {
    // Simple fade-in effect
    if (containerRef.current) {
      requestAnimationFrame(() => {
        if (containerRef.current) {
          containerRef.current.style.opacity = '1';
        }
      });
    }
  }, []);

  return (
    <div
      ref={containerRef}
      className={`terminal-screen-container ${isEditMode ? 'edit-mode' : ''}`}
      style={{ 
        opacity: '0', 
        transition: 'opacity 0.3s ease-in'
      }}
    >
      <div className="terminal-grid">
        {characterGrid.map((row, rowIndex) => (
          <div key={rowIndex} className="terminal-row">
            {row.map((char, colIndex) => (
              <span
                key={`${rowIndex}-${colIndex}`}
                className={`terminal-char ${isEditMode && char !== ' ' ? 'editable' : ''}`}
                style={{
                  color: getCharacterColor(rowIndex, colIndex),
                  cursor: isEditMode && char !== ' ' ? 'pointer' : 'default'
                }}
                onMouseDown={() => handleMouseDown(rowIndex, colIndex)}
                onMouseEnter={() => handleMouseEnter(rowIndex, colIndex)}
                data-row={rowIndex}
                data-col={colIndex}
              >
                {char}
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TerminalScreen;
