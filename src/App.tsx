import React, { useState, useEffect, useCallback } from 'react';
import { AnimationRegistry, AnimationFrames } from './animation-registry';
import AnimationSelector from './components/AnimationSelector.tsx';
import VersionControl from './components/VersionControl.tsx';
import TerminalScreen from './components/TerminalScreen.tsx';
import Controls from './components/Controls.tsx';
import ColorPaletteComponent from './components/ColorPaletteComponent.tsx';
import ColorEditorTools from './components/ColorEditorTools.tsx';
import { useAnimationPlayer } from './hooks/useAnimationPlayer';
import { ColorPalette } from './color-palette';
import { ColorEditState } from './color-edit-state';
import { AnimationExporter } from './animation-exporter';
import './style.css';

const App: React.FC = () => {
  const [animationRegistry] = useState(() => new AnimationRegistry());
  const [currentAnimationFrames, setCurrentAnimationFrames] = useState<AnimationFrames | null>(null);
  const [currentAnimationId, setCurrentAnimationId] = useState<string>('');
  const [animationSupportsVersion, setAnimationSupportsVersion] = useState<boolean>(false);
  const [version, setVersion] = useState<string>('0.0.1');
  const [frameDuration, setFrameDuration] = useState<number>(100);
  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  // Color editing state
  const [colorPalette] = useState(() => new ColorPalette());
  const [colorEditState] = useState(() => new ColorEditState());
  const [animationExporter] = useState(() => new AnimationExporter());
  const [selectedTool, setSelectedTool] = useState<'brush' | 'eraser'>('brush');
  const [selectedColor, setSelectedColor] = useState<number>(15); // Default to white
  const [, setForceUpdate] = useState(0); // For triggering re-renders

  const {
    currentFrame,
    isPlaying,
    isLooping,
    toggleAnimation,
    previousFrame,
    nextFrame,
    goToStart,
    goToEnd,
    toggleLoop
  } = useAnimationPlayer(currentAnimationFrames);

  // Initialize the app
  useEffect(() => {
    const initializeApp = async () => {
      try {
        await animationRegistry.loadAnimations();
        const defaultId = animationRegistry.getDefaultAnimationId();
        setCurrentAnimationId(defaultId);
        
        // Check if default animation supports version
        const supportsVersion = await animationRegistry.supportsVersion(defaultId);
        setAnimationSupportsVersion(supportsVersion);
        
        // Load frames with version support
        const frames = await animationRegistry.createAnimationFramesWithVersion(defaultId, version) || null;
        
        if (frames) {
          setCurrentAnimationFrames(frames);
          setFrameDuration(frames.getFrameDuration(0));
        }
        
        setIsLoaded(true);
      } catch (error) {
        console.error('Failed to initialize app:', error);
      }
    };

    initializeApp();
  }, [animationRegistry]);

  // Update frame duration when current frame changes
  useEffect(() => {
    if (currentAnimationFrames) {
      setFrameDuration(currentAnimationFrames.getFrameDuration(currentFrame));
    }
  }, [currentAnimationFrames, currentFrame]);

  const handleAnimationChange = async (animationId: string) => {
    setCurrentAnimationId(animationId);
    
    // Check if the animation supports version parameters
    const supportsVersion = await animationRegistry.supportsVersion(animationId);
    setAnimationSupportsVersion(supportsVersion);
    
    // Create frames with version if supported, otherwise use regular method
    const frames = await animationRegistry.createAnimationFramesWithVersion(animationId, version) || null;
    
    if (frames) {
      setCurrentAnimationFrames(frames);
    }
  };

  const handleVersionChange = async (newVersion: string) => {
    setVersion(newVersion);
    
    // Only update frames if current animation supports version
    if (animationSupportsVersion && currentAnimationId) {
      const frames = await animationRegistry.createAnimationFramesWithVersion(currentAnimationId, newVersion) || null;
      if (frames) {
        setCurrentAnimationFrames(frames);
      }
    }
  };

  const updateFrameDuration = (newDuration: number) => {
    if (currentAnimationFrames) {
      currentAnimationFrames.setFrameDuration(currentFrame, newDuration);
      setFrameDuration(newDuration);
    }
  };

  // Color editing handler
  const handleCharacterEdit = useCallback((row: number, col: number) => {
    if (!currentAnimationFrames) return;
    
    const frames = currentAnimationFrames.getAllFrames();
    
    colorEditState.startBatch();
    
    if (selectedTool === 'brush') {
      colorEditState.paintCharacter(frames, currentFrame, row, col, selectedColor);
    } else {
      colorEditState.eraseCharacter(frames, currentFrame, row, col);
    }
    
    colorEditState.commitBatch();
    
    // Force re-render without changing the animation frames reference
    setForceUpdate(prev => prev + 1);
  }, [currentAnimationFrames, currentFrame, selectedTool, selectedColor, colorEditState, setForceUpdate]);

  const handleUndo = useCallback(() => {
    if (!currentAnimationFrames) return;
    
    const frames = currentAnimationFrames.getAllFrames();
    const success = colorEditState.undo(frames);
    
    if (success) {
      // Force re-render to show the undone changes
      setForceUpdate(prev => prev + 1);
    }
  }, [currentAnimationFrames, colorEditState]);

  const handleRedo = useCallback(() => {
    if (!currentAnimationFrames) return;
    
    const frames = currentAnimationFrames.getAllFrames();
    const success = colorEditState.redo(frames);
    
    if (success) {
      // Force re-render to show the redone changes
      setForceUpdate(prev => prev + 1);
    }
  }, [currentAnimationFrames, colorEditState]);

  const handleCopyFrame = useCallback(async () => {
    if (!currentAnimationFrames) return;
    
    try {
      const frameText = currentAnimationFrames.getFrameText(currentFrame);
      await navigator.clipboard.writeText(frameText);
      console.log('Frame copied to clipboard');
    } catch (error) {
      console.error('Failed to copy frame to clipboard:', error);
      // Fallback for older browsers or when clipboard API is not available
      const textArea = document.createElement('textarea');
      textArea.value = currentAnimationFrames.getFrameText(currentFrame);
      document.body.appendChild(textArea);
      textArea.select();
      try {
        document.execCommand('copy');
        console.log('Frame copied to clipboard (fallback)');
      } catch (fallbackError) {
        console.error('Fallback copy failed:', fallbackError);
      }
      document.body.removeChild(textArea);
    }
  }, [currentAnimationFrames, currentFrame]);

  const handleColorPaletteChange = useCallback((colorIndex: number, r: number, g: number, b: number) => {
    colorPalette.setColor(colorIndex, { r, g, b });
    // Force re-render to update the color display
    setForceUpdate(prev => prev + 1);
  }, [colorPalette]);

  const handlePaletteLoad = useCallback((paletteColors: Array<{ r: number; g: number; b: number }>) => {
    // Load all colors from the selected terminal palette
    paletteColors.forEach((color, index) => {
      if (index < 16) { // Ensure we don't exceed our 16-color palette
        colorPalette.setColor(index, color);
      }
    });
    // Force re-render to update the color display
    setForceUpdate(prev => prev + 1);
  }, [colorPalette]);

  const handleExportAnimation = useCallback(() => {
    if (!currentAnimationFrames) return;
    
    console.log('Export button clicked');
    
    const frames = currentAnimationFrames.getAllFrames();
    console.log('Frames to export:', frames.length);
    
    const animationName = `Custom Animation ${new Date().toISOString().slice(0, 10)}`;
    
    const animation = animationExporter.createAnimationFromFrames(
      frames,
      animationName,
      'Exported from color editor'
    );
    
    console.log('Animation created:', animation);
    
    try {
      animationExporter.downloadAnimation(animation);
      console.log('Download initiated');
    } catch (error) {
      console.error('Export error:', error);
    }
  }, [currentAnimationFrames, animationExporter]);

  if (!isLoaded) {
    return <div className="loading">Loading animations...</div>;
  }

  if (!currentAnimationFrames) {
    return <div className="error">Failed to load animation</div>;
  }

  const dimensions = currentAnimationFrames.getMaxDimensions();
  const rows = Math.max(17, dimensions.maxHeight + 2);
  const cols = 80;

  return (
    <div className="app">
      <div className="app-layout">
        <div className="main-content">
          <AnimationSelector
            animationRegistry={animationRegistry}
            currentAnimationId={currentAnimationId}
            onAnimationChange={handleAnimationChange}
          />
          
      <VersionControl
        isVisible={animationSupportsVersion}
        version={version}
        onVersionChange={handleVersionChange}
      />          <TerminalScreen
            content={currentAnimationFrames.getFrameText(currentFrame)}
            rows={rows}
            cols={cols}
            frame={currentAnimationFrames.getFrame(currentFrame)}
            colorPalette={colorPalette}
            isEditMode={true}
            selectedTool={selectedTool}
            selectedColor={selectedColor}
            onCharacterEdit={handleCharacterEdit}
          />
          
          <Controls
            isPlaying={isPlaying}
            isLooping={isLooping}
            currentFrame={currentFrame}
            totalFrames={currentAnimationFrames.getFrameCount()}
            frameDuration={frameDuration}
            onToggleAnimation={toggleAnimation}
            onPreviousFrame={previousFrame}
            onNextFrame={nextFrame}
            onGoToStart={goToStart}
            onGoToEnd={goToEnd}
            onToggleLoop={toggleLoop}
            onUpdateFrameDuration={updateFrameDuration}
          />
        </div>
        
        <div className="sidebar">
          <ColorPaletteComponent
            colorPalette={colorPalette}
            selectedColor={selectedColor}
            onColorSelect={setSelectedColor}
            onColorChange={handleColorPaletteChange}
            onPaletteLoad={handlePaletteLoad}
          />
          
          <ColorEditorTools
            selectedTool={selectedTool}
            onToolChange={setSelectedTool}
            canUndo={colorEditState.canUndo()}
            canRedo={colorEditState.canRedo()}
            onUndo={handleUndo}
            onRedo={handleRedo}
            onCopyFrame={handleCopyFrame}
            onExport={handleExportAnimation}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
