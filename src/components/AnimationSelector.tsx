import React from 'react';
import { AnimationRegistry } from '../animation-registry';

interface AnimationSelectorProps {
  animationRegistry: AnimationRegistry;
  currentAnimationId: string;
  onAnimationChange: (animationId: string) => void;
}

const AnimationSelector: React.FC<AnimationSelectorProps> = ({
  animationRegistry,
  currentAnimationId,
  onAnimationChange,
}) => {
  const animationOptions = animationRegistry.getAnimationMetadata().map(meta => (
    <option key={meta.id} value={meta.id}>
      {meta.name}
    </option>
  ));

  return (
    <div className="animation-selector">
      <label htmlFor="animation-select">Animation:</label>
      <select
        id="animation-select"
        value={currentAnimationId}
        onChange={(e) => onAnimationChange(e.target.value)}
      >
        {animationOptions}
      </select>
    </div>
  );
};

export default AnimationSelector;
