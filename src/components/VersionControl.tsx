import React from 'react';

interface VersionControlProps {
  isVisible: boolean;
  version: string;
  onVersionChange: (version: string) => void;
}

const VersionControl: React.FC<VersionControlProps> = ({
  isVisible,
  version,
  onVersionChange,
}) => {
  if (!isVisible) {
    return null;
  }

  return (
    <div className="version-control">
      <label htmlFor="version-input">Version:</label>
      <input
        type="text"
        id="version-input"
        value={version}
        onChange={(e) => onVersionChange(e.target.value)}
        placeholder="e.g. 1.2.3"
      />
    </div>
  );
};

export default VersionControl;
