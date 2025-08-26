import React from 'react';

interface ColorEditorToolsProps {
  selectedTool: 'brush' | 'eraser' | 'bucket';
  onToolChange: (tool: 'brush' | 'eraser' | 'bucket') => void;
  canUndo: boolean;
  canRedo: boolean;
  onUndo: () => void;
  onRedo: () => void;
  onCopyFrame: () => void;
  onCopyColorData: () => void;
  onPasteColorData: () => void;
  hasCopiedColorData: boolean;
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
  onCopyColorData,
  onPasteColorData,
  hasCopiedColorData,
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
            title="Brush Tool - Paint characters (Hold Alt + Click to eyedrop colors, Hold Shift + Click to paint lines)"
          >
            🖌️ Brush
          </button>
          <button
            className={`tool-button ${selectedTool === 'bucket' ? 'active' : ''}`}
            onClick={() => onToolChange('bucket')}
            title="Paint Bucket Tool - Flood fill connected areas (Hold Alt + Click to eyedrop colors)"
          >
            🪣 Bucket
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
            title="Copy current frame text to clipboard"
          >
            📋 Copy Text
          </button>
        </div>
        
        <div className="color-action-buttons">
          <button
            className="action-button"
            onClick={onCopyColorData}
            title="Copy color data from current frame"
          >
            🎨 Copy Colors
          </button>
          <button
            className="action-button"
            onClick={onPasteColorData}
            disabled={!hasCopiedColorData}
            title="Paste color data to current frame"
          >
            🖌️ Paste Colors
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

      <div className="help-section">
        <h3>Tips</h3>
        <div className="help-text">
          <p>💡 Hold <kbd>Alt</kbd> + click while using brush or bucket tools to eyedrop colors</p>
          <p>📏 Hold <kbd>Shift</kbd> + click with brush tool to paint straight lines</p>
          <p>🪣 Use bucket tool to flood fill connected areas of the same color</p>
        </div>
      </div>
    </div>
  );
};

export default ColorEditorTools;
