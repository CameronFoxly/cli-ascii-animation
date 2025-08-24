import { useState, useEffect, useCallback, useRef } from 'react';
import { AnimationFrames } from '../animation-registry';

export const useAnimationPlayer = (animationFrames: AnimationFrames | null) => {
  const [currentFrame, setCurrentFrame] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [isLooping, setIsLooping] = useState<boolean>(false);
  const animationTimeoutRef = useRef<number | null>(null);

  // Schedule the next frame
  const scheduleNextFrame = useCallback(() => {
    if (!isPlaying || !animationFrames) return;
    
    if (currentFrame < animationFrames.getFrameCount() - 1) {
      const currentFrameDuration = animationFrames.getFrameDuration(currentFrame);
      animationTimeoutRef.current = window.setTimeout(() => {
        setCurrentFrame(prev => prev + 1);
      }, currentFrameDuration);
    } else {
      // Animation reached the end
      if (isLooping) {
        // Loop back to the beginning
        const currentFrameDuration = animationFrames.getFrameDuration(currentFrame);
        animationTimeoutRef.current = window.setTimeout(() => {
          setCurrentFrame(0);
        }, currentFrameDuration);
      } else {
        // Animation complete, stop
        setIsPlaying(false);
      }
    }
  }, [isPlaying, animationFrames, currentFrame, isLooping]);

  // Effect to handle frame scheduling
  useEffect(() => {
    if (isPlaying) {
      scheduleNextFrame();
    }
    
    return () => {
      if (animationTimeoutRef.current) {
        clearTimeout(animationTimeoutRef.current);
        animationTimeoutRef.current = null;
      }
    };
  }, [isPlaying, currentFrame, scheduleNextFrame]);

  // Reset frame when animation changes (but not when just updating colors)
  const [lastAnimationId, setLastAnimationId] = useState<string>('');
  
  useEffect(() => {
    if (animationFrames) {
      // Generate a simple ID based on the animation content
      const animationId = animationFrames.getAllFramesAsText().join('|');
      
      // Only reset if it's actually a different animation (different content)
      if (animationId !== lastAnimationId) {
        setCurrentFrame(0);
        setLastAnimationId(animationId);
      }
      
      // But still clamp frame if it exceeds bounds
      const frameCount = animationFrames.getFrameCount();
      if (currentFrame >= frameCount) {
        setCurrentFrame(Math.max(0, frameCount - 1));
      }
    } else {
      setCurrentFrame(0);
      setLastAnimationId('');
    }
  }, [animationFrames, lastAnimationId, currentFrame]);

  const toggleAnimation = useCallback(() => {
    if (isPlaying) {
      setIsPlaying(false);
    } else {
      setIsPlaying(true);
      if (animationFrames && currentFrame === animationFrames.getFrameCount() - 1) {
        setCurrentFrame(0);
      }
    }
  }, [isPlaying, animationFrames, currentFrame]);

  const previousFrame = useCallback(() => {
    if (currentFrame > 0) {
      setCurrentFrame(prev => prev - 1);
    }
  }, [currentFrame]);

  const nextFrame = useCallback(() => {
    if (animationFrames && currentFrame < animationFrames.getFrameCount() - 1) {
      setCurrentFrame(prev => prev + 1);
    }
  }, [animationFrames, currentFrame]);

  const goToStart = useCallback(() => {
    if (isPlaying) {
      setIsPlaying(false);
    }
    setCurrentFrame(0);
  }, [isPlaying]);

  const goToEnd = useCallback(() => {
    if (isPlaying) {
      setIsPlaying(false);
    }
    if (animationFrames) {
      setCurrentFrame(animationFrames.getFrameCount() - 1);
    }
  }, [isPlaying, animationFrames]);

  const toggleLoop = useCallback(() => {
    setIsLooping(prev => !prev);
  }, []);

  return {
    currentFrame,
    isPlaying,
    isLooping,
    toggleAnimation,
    previousFrame,
    nextFrame,
    goToStart,
    goToEnd,
    toggleLoop,
    setCurrentFrame
  };
};
