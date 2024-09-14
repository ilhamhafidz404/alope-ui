import { useEffect } from "react";

import Prism from "prismjs";

export default function Code({
  code,
  language,
}: {
  code: string;
  language: string;
}) {
  useEffect(() => {
    Prism.highlightAll();
  }, []);
  return (
    <div className="Code">
      <pre>
        <code className={`language-${language}`}>{code}</code>
      </pre>
    </div>
  );
}
