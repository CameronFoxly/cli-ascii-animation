/**
 * Animation 03: Small Progress Bar
 * 
 * A compact progress bar animation to test different dimensions.
 */

import type { Animation, AnimationFrame } from '../animation-registry';

const frames: AnimationFrame[] = [
  {
    title: "Progress 0%",
    duration: 300,
    content: `
╔═════════════════════════╗
║ Progress: [             ] ║
║           0%              ║
╚═════════════════════════╝`
  },
  {
    title: "Progress 25%",
    duration: 300,
    content: `
╔═════════════════════════╗
║ Progress: [███          ] ║
║           25%             ║
╚═════════════════════════╝`
  },
  {
    title: "Progress 50%",
    duration: 300,
    content: `
╔═════════════════════════╗
║ Progress: [███████      ] ║
║           50%             ║
╚═════════════════════════╝`
  },
  {
    title: "Progress 75%",
    duration: 300,
    content: `
╔═════════════════════════╗
║ Progress: [██████████   ] ║
║           75%             ║
╚═════════════════════════╝`
  },
  {
    title: "Progress 100%",
    duration: 1000,
    content: `
╔═════════════════════════╗
║ Progress: [█████████████] ║
║           100% Complete!  ║
╚═════════════════════════╝`
  }
];

const animation: Animation = {
  metadata: {
    id: 'animation-03',
    name: 'Progress Bar',
    description: 'A simple progress bar animation'
  },
  frames
};

export default animation;
