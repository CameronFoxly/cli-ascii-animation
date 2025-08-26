// Test script to verify the export functionality with template literals
import { AnimationExporter } from './src/animation-exporter.js';

// Create a simple test animation with template literals
const testAnimation = {
  metadata: {
    id: 'test-animation',
    name: 'Test Animation',
    description: 'Test animation with dynamic version'
  },
  frames: [
    {
      title: 'Frame 1',
      duration: 100,
      content: `
┌──────────────────────────────────────────────────────────────────────────────┐
│                              CLI Version ${createVersionLine(version, 8)}                     │
└──────────────────────────────────────────────────────────────────────────────┘
      `
    }
  ]
};

const exporter = new AnimationExporter();
const exported = exporter.generateAnimationFile(testAnimation, '1.0.0');

console.log('Exported animation file:');
console.log(exported);
