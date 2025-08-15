/**
 * Animation 02: Simple Loading Animation
 * 
 * A simple placeholder animation with a loading spinner effect.
 */

import type { Animation, AnimationFrame } from '../animation-registry';

const frames: AnimationFrame[] = [
  {
    title: "Loading 1",
    duration: 200,
    content: `
┌─────────────────────────┐
│                         │
│       Loading...        │
│                         │
│          |              │
│                         │
└─────────────────────────┘`
  },
  {
    title: "Loading 2",
    duration: 200,
    content: `
┌─────────────────────────┐
│                         │
│       Loading...        │
│                         │
│          /              │
│                         │
└─────────────────────────┘`
  },
  {
    title: "Loading 3",
    duration: 200,
    content: `
┌─────────────────────────┐
│                         │
│       Loading...        │
│                         │
│          -              │
│                         │
└─────────────────────────┘`
  },
  {
    title: "Loading 4",
    duration: 200,
    content: `
┌─────────────────────────┐
│                         │
│       Loading...        │
│                         │
│          \\             │
│                         │
└─────────────────────────┘`
  }
];

const animation: Animation = {
  metadata: {
    id: 'animation-02',
    name: 'Simple Loading',
    description: 'A simple loading spinner animation'
  },
  frames
};

export default animation;
