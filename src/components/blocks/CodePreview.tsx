import { useEffect, useState } from "react";
import hljs from "highlight.js";
import typescript from "highlight.js/lib/languages/typescript";
import "highlight.js/styles/atom-one-dark.css";

interface CodePreviewProps {
  code: string;
}

const CodePreview: React.FC<CodePreviewProps> = ({ code }) => {
  // -----------------------------
  // State
  const [getCopied, setCopied] = useState<boolean>(false);

  // -----------------------------
  // Effects
  useEffect(() => {
    hljs.registerLanguage("typescript", typescript);
    hljs.highlightAll();
  }, []);

  // -----------------------------
  // Render
  return (
    <div className="relative">
      <pre>
        <code className={"language-typescript"}>{code}</code>
      </pre>
      <button
        onClick={() => {
          if (getCopied) return;
          navigator.clipboard.writeText(code);
          setCopied(true);
          setTimeout(() => setCopied(false), 2000);
        }}
        className="absolute right-2.5 top-2.5 bg-white hover:bg-ui-accent-1 text-black hover:text-white rounded-md h-8 w-8 flex items-center justify-center text-sm transition-colors duration-200"
        aria-label="Copy code"
        title="Copy code"
      >
        <span className="sr-only">Copy code</span>
        {getCopied ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="16"
            viewBox="0 0 448 512"
            className="fill-current"
          >
            <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7l233.4-233.3c12.5-12.5 32.8-12.5 45.3 0z" />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="16"
            viewBox="0 0 448 512"
            className="fill-current"
          >
            <path d="M208 0h124.1C344.8 0 357 5.1 366 14.1L433.9 82c9 9 14.1 21.2 14.1 33.9V336c0 26.5-21.5 48-48 48H208c-26.5 0-48-21.5-48-48V48c0-26.5 21.5-48 48-48zM48 128h80v64H64v256h192v-32h64v48c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V176c0-26.5 21.5-48 48-48z" />
          </svg>
        )}
      </button>
    </div>
  );
};

export default CodePreview;
