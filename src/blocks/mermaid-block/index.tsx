import React from "react";

import { FileBlockProps } from "@githubnext/utils";
import "./index.css";

import mermaid from "mermaid";

mermaid.mermaidAPI.initialize({ startOnLoad: false });

export default function (props: FileBlockProps) {
  const { content } = props;
  const [rendered, setRendered] = React.useState("");
  console.log("rendering mermaid block");

  React.useEffect(() => {
    console.log("rendering mermaid", content);
    mermaid.mermaidAPI.render("id", content, (rendered) => {
      console.log("rendered mermaid", rendered);
      setRendered(rendered);
    });
  }, [content]);

  return (
    <div
      key={content}
      id="mermaid"
      dangerouslySetInnerHTML={{ __html: rendered }}
    />
  );
}
