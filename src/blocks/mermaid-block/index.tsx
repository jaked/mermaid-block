import React from "react";

import { FileBlockProps } from "@githubnext/utils";
import "./index.css";

import mermaid from "mermaid";

mermaid.mermaidAPI.initialize({ startOnLoad: false });

export default function (props: FileBlockProps) {
  const { content } = props;
  const [rendered, setRendered] = React.useState("");

  React.useEffect(() => {
    mermaid.mermaidAPI.render("id", content, (rendered) =>
      setRendered(rendered)
    );
  }, [content]);

  return <div id="mermaid" dangerouslySetInnerHTML={{ __html: rendered }} />;
}
