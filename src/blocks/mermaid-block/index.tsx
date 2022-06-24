import React from "react";

import { FileBlockProps } from "@githubnext/utils";
import "./index.css";

import mermaid from "mermaid";

mermaid.mermaidAPI.initialize({ startOnLoad: false });

export default function (props: FileBlockProps) {
  const { content } = props;
  const ref = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    try {
      mermaid.mermaidAPI.render("id", content, (rendered) => {
        ref.current!.innerHTML = rendered;
      });
    } catch (error) {
      ref.current!.innerHTML = String(error);
    }
  }, [content]);

  return <div ref={ref} id="mermaid" />;
}
