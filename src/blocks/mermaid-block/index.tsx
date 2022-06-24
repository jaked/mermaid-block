import React from "react";

import { FileBlockProps } from "@githubnext/utils";
import "./index.css";

import mermaid from "mermaid";

mermaid.mermaidAPI.initialize({ startOnLoad: false });

export default function (props: FileBlockProps) {
  const { content } = props;
  const ref = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    mermaid.mermaidAPI.render("id", content, (rendered) => {
      ref.current!.innerHTML = rendered;
    });
  }, [content]);

  return <div ref={ref} id="mermaid" />;
}
