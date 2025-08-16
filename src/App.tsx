import React, { useState, useEffect } from 'react';
import { AnimationRegistry, AnimationFrames } from './animation-registry';
import AnimationSelector from './components/AnimationSelector.tsx';
import VersionControl from './components/VersionControl.tsx';
import TerminalScreen from './components/TerminalScreen.tsx';
import Controls from './components/Controls.tsx';
import { useAnimationPlayer } from './hooks/useAnimationPlayer';
import './style.css';

const App: React.FC = () => {
  const [animationRegistry] = useState(() => new AnimationRegistry());
  const [currentAnimationFrames, setCurrentAnimationFrames] = useState<AnimationFrames | null>(null);
  const [currentAnimationId, setCurrentAnimationId] = useState<string>('');
  const [version, setVersion] = useState<string>('0.0.1');
  const [frameDuration, setFrameDuration] = useState<number>(100);
  const [isLoaded, setIsLoaded] = useState<boolean>(false);

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
        
        let frames: AnimationFrames | null = null;
        if (defaultId === 'animation-01') {
          frames = await animationRegistry.createAnimationFramesWithVersion('0.0.1') || null;
        } else {
          frames = animationRegistry.createAnimationFrames(defaultId) || null;
        }
        
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
    
    let frames: AnimationFrames | null = null;
    if (animationId === 'animation-01') {
      frames = await animationRegistry.createAnimationFramesWithVersion(version) || null;
    } else {
      frames = animationRegistry.createAnimationFrames(animationId) || null;
    }
    
    if (frames) {
      setCurrentAnimationFrames(frames);
    }
  };

  const handleVersionChange = async (newVersion: string) => {
    setVersion(newVersion);
    
    if (currentAnimationId === 'animation-01') {
      const frames = await animationRegistry.createAnimationFramesWithVersion(newVersion) || null;
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
      <AnimationSelector
        animationRegistry={animationRegistry}
        currentAnimationId={currentAnimationId}
        onAnimationChange={handleAnimationChange}
      />
      
      <VersionControl
        isVisible={currentAnimationId === 'animation-01'}
        version={version}
        onVersionChange={handleVersionChange}
      />
      
      <TerminalScreen
        content={currentAnimationFrames.getFrameText(currentFrame)}
        rows={rows}
        cols={cols}
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
  );
};

export default App;
