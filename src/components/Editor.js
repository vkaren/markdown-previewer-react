import React from "react";

function Editor(props) {
  return (
    <div className="editor">
      <div className="header-editor">Editor</div>
      <textarea
        name=""
        id="editor"
        cols="70"
        rows="10"
        defaultValue={props.input}
        onInput={props.handleInputChange}
      ></textarea>
    </div>
  );
}

export default Editor;
