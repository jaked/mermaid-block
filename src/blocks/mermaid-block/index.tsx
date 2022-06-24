import React from "react";

import { FileBlockProps } from "@githubnext/utils";
import "./index.css";

import mermaid from "mermaid";

mermaid.mermaidAPI.initialize({ startOnLoad: false });

export default function (props: FileBlockProps) {
  const { content } = props;
  const [rendered, setRendered] = React.useState("");

  React.useEffect(() => {
    const rendered = mermaid.mermaidAPI.render("id", content);
    setRendered(rendered);
  }, [content]);

  return <div dangerouslySetInnerHTML={{ __html: rendered }} />;
}
