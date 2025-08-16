import React, { useEffect, useRef } from 'react';

interface TerminalScreenProps {
  content: string;
  rows: number;
  cols: number;
}

const TerminalScreen: React.FC<TerminalScreenProps> = ({
  content,
  rows,
  cols,
}) => {
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    // Simple fade-in effect
    if (textareaRef.current) {
      requestAnimationFrame(() => {
        if (textareaRef.current) {
          textareaRef.current.style.opacity = '1';
        }
      });
    }
  }, []);

  return (
    <textarea
      ref={textareaRef}
      id="terminal-screen"
      className="terminal-screen"
      readOnly
      rows={rows}
      cols={cols}
      value={content}
      style={{ opacity: '0', transition: 'opacity 0.3s ease-in' }}
    />
  );
};

export default TerminalScreen;
