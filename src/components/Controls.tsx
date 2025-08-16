import React from 'react';

interface ControlsProps {
  isPlaying: boolean;
  isLooping: boolean;
  currentFrame: number;
  totalFrames: number;
  frameDuration: number;
  onToggleAnimation: () => void;
  onPreviousFrame: () => void;
  onNextFrame: () => void;
  onGoToStart: () => void;
  onGoToEnd: () => void;
  onToggleLoop: () => void;
  onUpdateFrameDuration: (duration: number) => void;
}

const Controls: React.FC<ControlsProps> = ({
  isPlaying,
  isLooping,
  currentFrame,
  totalFrames,
  frameDuration,
  onToggleAnimation,
  onPreviousFrame,
  onNextFrame,
  onGoToStart,
  onGoToEnd,
  onToggleLoop,
  onUpdateFrameDuration,
}) => {
  return (
    <div className="controls">
      <div className="frame-controls">
        <button onClick={onGoToStart}>⏮ Start</button>
        <button onClick={onPreviousFrame} disabled={currentFrame === 0}>
          ◀ Prev
        </button>
        <button onClick={onToggleAnimation} className="run-button">
          {isPlaying ? '⏸ Stop' : '▶ Run'}
        </button>
        <button onClick={onNextFrame} disabled={currentFrame === totalFrames - 1}>
          Next ▶
        </button>
        <button onClick={onGoToEnd}>End ⏭</button>
      </div>
      
      <div className="loop-control">
        <button 
          onClick={onToggleLoop} 
          className={`loop-button ${isLooping ? 'active' : ''}`}
        >
          🔄 Loop: {isLooping ? 'ON' : 'OFF'}
        </button>
      </div>
      
      <div className="bottom-controls">
        <div className="frame-info">
          <label htmlFor="current-frame">Frame:</label>
          <input 
            type="text" 
            id="current-frame" 
            readOnly 
            value={currentFrame + 1} 
          />
          <span>/ {totalFrames}</span>
        </div>
        
        <div className="speed-control">
          <label htmlFor="frame-duration">Frame Duration (ms):</label>
          <input
            type="number"
            id="frame-duration"
            value={frameDuration}
            onChange={(e) => onUpdateFrameDuration(parseInt(e.target.value))}
            min="50"
            max="2000"
            step="50"
          />
        </div>
      </div>
    </div>
  );
};

export default Controls;
