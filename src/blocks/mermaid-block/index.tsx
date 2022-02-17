import {
  FileBlockProps,
} from "@githubnext/utils";
import "./index.css";

import mermaid from 'mermaid';

mermaid.mermaidAPI.initialize({ startOnLoad: false });

const Mermaid: React.FC = (props) => {
  const __html = mermaid.mermaidAPI.render(
    'id',
    String(props.children),
  );
  return <div dangerouslySetInnerHTML={{ __html }}/>;
}

export default function (props: FileBlockProps) {
  const { context, content, metadata, onUpdateMetadata } = props;
  return <Mermaid>{content}</Mermaid>;
}
