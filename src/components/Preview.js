import React from "react";
import ReactMarkdown from "react-markdown";

function Preview(props) {
  return (
    <div className="preview">
      <div className="header-preview">Preview</div>
      <div id="preview">
        <ReactMarkdown children={props.input} />
      </div>
    </div>
  );
}

export default Preview;
