// Quick test to verify the alignment logic works correctly
function createVersionLine(version, spacesAfterVersion) {
  const baseText = `CLI Version ${version}`;
  const targetWidth = 'CLI Version 0.0.1'.length + spacesAfterVersion;
  const currentWidth = baseText.length;
  const paddingNeeded = Math.max(0, targetWidth - currentWidth);
  return baseText + ' '.repeat(paddingNeeded);
}

// Test various version lengths
const testVersions = ['1.0.0', '10.20.30', '1.2.3-beta.1', '0.0.1', '100.200.300'];
const spacesAfter = 8;

console.log('Testing version alignment:');
console.log('Target width for "CLI Version 0.0.1" + 8 spaces:', 'CLI Version 0.0.1'.length + spacesAfter);
console.log();

testVersions.forEach(version => {
  const result = createVersionLine(version, spacesAfter);
  console.log(`"${result}" (length: ${result.length})`);
});

// Test that the ASCII art always starts at the same position
console.log('\nTesting that ASCII art starts at same position:');
testVersions.forEach(version => {
  const versionLine = createVersionLine(version, spacesAfter);
  const fullLine = `│                              ${versionLine}        ▀▀████████████▀▀      │`;
  console.log(`"${fullLine}"`);
  console.log(`ASCII art starts at position: ${fullLine.indexOf('▀')}`);
});
