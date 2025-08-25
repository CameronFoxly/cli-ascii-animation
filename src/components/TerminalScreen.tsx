import React, { useEffect, useRef, useState, useCallback, useMemo } from 'react';
import type { AnimationFrame } from '../animation-registry';
import { ColorPalette } from '../color-palette';

interface TerminalScreenProps {
  content: string;
  rows: number;
  cols: number;
  frame?: AnimationFrame;
  colorPalette: ColorPalette;
  isEditMode?: boolean;
  selectedTool?: 'brush' | 'eraser' | 'bucket';
  selectedColor?: number;
  onCharacterEdit?: (row: number, col: number, isShiftClick?: boolean) => void;
  onEyedropper?: (row: number, col: number) => void;
  forceUpdateKey?: number; // Add this to trigger re-renders when colors change
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
  onEyedropper,
  forceUpdateKey = 0,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStarted, setDragStarted] = useState(false);
  const [isAltPressed, setIsAltPressed] = useState(false);
  const [isShiftPressed, setIsShiftPressed] = useState(false);

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

  // Optimize color rendering with useMemo to prevent flash
  const frameColorMap = useMemo(() => {
    const colorMap = new Map<string, string>();
    
    if (frame?.colors) {
      // Pre-calculate all colors that have been set
      Object.entries(frame.colors).forEach(([position, colorIndex]) => {
        colorMap.set(position, colorPalette.getCSSColor(colorIndex));
      });
    }
    
    return colorMap;
  }, [frame?.colors, colorPalette, forceUpdateKey]);

  // Get color for a character at specific position
  const getCharacterColor = useCallback((row: number, col: number): string => {
    const position = `${row},${col}`;
    return frameColorMap.get(position) || '#ffffff';
  }, [frameColorMap]);

  // Handle character click/drag
  const handleCharacterInteraction = useCallback((row: number, col: number, isEyedropper = false, isShiftClick = false) => {
    if (!isEditMode) return;
    
    const char = characterGrid[row]?.[col];
    if (!char || char === ' ') return; // Don't edit spaces
    
    if (isEyedropper && onEyedropper) {
      onEyedropper(row, col);
    } else if (onCharacterEdit) {
      onCharacterEdit(row, col, isShiftClick);
    }
  }, [isEditMode, onCharacterEdit, onEyedropper, characterGrid]);

  // Mouse event handlers
  const handleMouseDown = useCallback((event: React.MouseEvent, row: number, col: number) => {
    if (!isEditMode) return;
    
    // Check for Alt key (eyedropper mode) for brush and bucket tools
    if (event.altKey && (selectedTool === 'brush' || selectedTool === 'bucket')) {
      event.preventDefault();
      handleCharacterInteraction(row, col, true);
      return;
    }
    
    // Check for Shift key (line painting mode) and brush tool only
    if (event.shiftKey && selectedTool === 'brush') {
      event.preventDefault();
      handleCharacterInteraction(row, col, false, true);
      return;
    }
    
    // For bucket tool, just do a single click (no dragging)
    if (selectedTool === 'bucket') {
      handleCharacterInteraction(row, col);
      return;
    }
    
    // For brush and eraser, enable dragging
    setIsDragging(true);
    setDragStarted(true);
    handleCharacterInteraction(row, col);
  }, [isEditMode, selectedTool, handleCharacterInteraction]);

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

  // Keyboard event listeners for Alt and Shift keys
  useEffect(() => {
    if (!isEditMode) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.altKey && (selectedTool === 'brush' || selectedTool === 'bucket')) {
        setIsAltPressed(true);
      }
      if (event.shiftKey && selectedTool === 'brush') {
        setIsShiftPressed(true);
      }
    };

    const handleKeyUp = (event: KeyboardEvent) => {
      if (!event.altKey) {
        setIsAltPressed(false);
      }
      if (!event.shiftKey) {
        setIsShiftPressed(false);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('keyup', handleKeyUp);
    
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('keyup', handleKeyUp);
    };
  }, [isEditMode, selectedTool]);

  // Simple opacity management for smooth transitions
  useEffect(() => {
    if (containerRef.current) {
      requestAnimationFrame(() => {
        if (containerRef.current) {
          containerRef.current.style.opacity = '1';
        }
      });
    }
  }, [frameColorMap]);

  return (
    <div
      ref={containerRef}
      className={`terminal-screen-container ${isEditMode ? 'edit-mode' : ''}`}
      style={{ 
        opacity: '0', 
        transition: 'opacity 0.15s ease-in'
      }}
    >
      <div className="terminal-grid">
        {characterGrid.map((row, rowIndex) => (
          <div key={rowIndex} className="terminal-row">
            {row.map((char, colIndex) => (
              <span
                key={`${rowIndex}-${colIndex}`}
                className={`terminal-char ${isEditMode && char !== ' ' ? 'editable' : ''} ${
                  isEditMode && char !== ' ' && isAltPressed && (selectedTool === 'brush' || selectedTool === 'bucket') ? 'eyedropper-hover' : ''
                } ${
                  isEditMode && char !== ' ' && isShiftPressed && selectedTool === 'brush' ? 'line-mode-hover' : ''
                } ${
                  isEditMode && char !== ' ' && selectedTool === 'bucket' && !isAltPressed ? 'bucket-hover' : ''
                }`}
                style={{
                  color: getCharacterColor(rowIndex, colIndex),
                  cursor: isEditMode && char !== ' ' 
                    ? (isAltPressed && (selectedTool === 'brush' || selectedTool === 'bucket') ? 'crosshair' 
                      : isShiftPressed && selectedTool === 'brush' ? 'crosshair'
                      : selectedTool === 'bucket' ? 'crosshair'
                      : 'pointer')
                    : 'default'
                }}
                onMouseDown={(event) => handleMouseDown(event, rowIndex, colIndex)}
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
