// Test the export logic directly in the console
// You can run this in the browser console

// Create a test animation with template literals
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
      content: `┌──────────────────────────────────────────────────────────────────────────────┐
│                              CLI Version \${createVersionLine(version, 8)}                     │
└──────────────────────────────────────────────────────────────────────────────┘`
    }
  ]
};

// Import the exporter (this would be done in the actual app)
// const { AnimationExporter } = await import('./animation-exporter.js');
// const exporter = new AnimationExporter();
// const exported = exporter.generateAnimationFile(testAnimation, '1.0.0');
// console.log('Exported animation file:');
// console.log(exported);
