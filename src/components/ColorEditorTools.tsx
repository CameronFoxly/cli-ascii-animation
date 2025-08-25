import React from 'react';

interface ColorEditorToolsProps {
  selectedTool: 'brush' | 'eraser';
  onToolChange: (tool: 'brush' | 'eraser') => void;
  canUndo: boolean;
  canRedo: boolean;
  onUndo: () => void;
  onRedo: () => void;
  onCopyFrame: () => void;
  onExport: () => void;
}

const ColorEditorTools: React.FC<ColorEditorToolsProps> = ({
  selectedTool,
  onToolChange,
  canUndo,
  canRedo,
  onUndo,
  onRedo,
  onCopyFrame,
  onExport,
}) => {
  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.metaKey || event.ctrlKey) {
      if (event.key === 'z' && !event.shiftKey && canUndo) {
        event.preventDefault();
        onUndo();
      } else if ((event.key === 'Z' || (event.key === 'z' && event.shiftKey)) && canRedo) {
        event.preventDefault();
        onRedo();
      }
    }
  };

  React.useEffect(() => {
    const handleGlobalKeyDown = (event: KeyboardEvent) => {
      if (event.metaKey || event.ctrlKey) {
        if (event.key === 'z' && !event.shiftKey && canUndo) {
          event.preventDefault();
          onUndo();
        } else if ((event.key === 'Z' || (event.key === 'z' && event.shiftKey)) && canRedo) {
          event.preventDefault();
          onRedo();
        }
      }
    };

    document.addEventListener('keydown', handleGlobalKeyDown);
    return () => document.removeEventListener('keydown', handleGlobalKeyDown);
  }, [canUndo, canRedo, onUndo, onRedo]);

  return (
    <div className="color-editor-tools" onKeyDown={handleKeyDown} tabIndex={0}>
      <div className="tool-section">
        <h3>Tools</h3>
        <div className="tool-buttons">
          <button
            className={`tool-button ${selectedTool === 'brush' ? 'active' : ''}`}
            onClick={() => onToolChange('brush')}
            title="Brush Tool - Paint characters"
          >
            🖌️ Brush
          </button>
          <button
            className={`tool-button ${selectedTool === 'eraser' ? 'active' : ''}`}
            onClick={() => onToolChange('eraser')}
            title="Eraser Tool - Remove colors"
          >
            🧽 Eraser
          </button>
        </div>
      </div>

      <div className="action-section">
        <h3>Actions</h3>
        <div className="action-buttons">
          <button
            className="action-button"
            onClick={onUndo}
            disabled={!canUndo}
            title="Undo (Cmd+Z)"
          >
            ↶ Undo
          </button>
          <button
            className="action-button"
            onClick={onRedo}
            disabled={!canRedo}
            title="Redo (Cmd+Shift+Z)"
          >
            ↷ Redo
          </button>
          <button
            className="action-button"
            onClick={onCopyFrame}
            title="Copy current frame to clipboard"
          >
            📋 Copy Frame
          </button>
        </div>
      </div>

      <div className="export-section">
        <h3>Export</h3>
        <button
          className="export-button"
          onClick={onExport}
          title="Export animation as .ts file"
        >
          💾 Export Animation
        </button>
      </div>
    </div>
  );
};

export default ColorEditorTools;
