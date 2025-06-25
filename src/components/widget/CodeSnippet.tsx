import React, { useState } from 'react';
import { Copy } from 'lucide-react';

type CodeSnippetProps = {
  code: string;
};

const CodeSnippet: React.FC<CodeSnippetProps> = ({ code }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative">
      <pre className="bg-gray-100 p-4 rounded-lg text-sm overflow-x-auto">
        <code>{code}</code>
      </pre>
      <button
        onClick={handleCopy}
        className="absolute top-2 right-2 p-2 bg-white rounded border hover:bg-gray-50 transition-colors"
      >
        <Copy size={16} />
      </button>
      {copied && (
        <span className="absolute top-2 right-10 text-xs bg-gray-800 text-white px-2 py-1 rounded">
          Copied!
        </span>
      )}
    </div>
  );
};

export default CodeSnippet; 