import React from "react";
import Editor from "./Editor";
import Preview from "./Preview";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      input:
        "# This is a  h1 heading\n\n## This is a h2 heading\n\nThis is a [link](#)\n\nThis is a list:\n1. Hello.\n2. Hi\n3. Hola.\n\n`This is a inline code`\n\n```\nThis is a block code\n```\n\n>A Block Quote!\n\nA **bold text** \n\n![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)",
      textPreview: "",
    };
  }

  handleInputChange = (event) => {
    this.setState({
      input: event.target.value,
    });
  };
  render() {
    return (
      <div className="editor-preview">
        <Editor
          input={this.state.input}
          handleInputChange={this.handleInputChange}
        />
        <Preview input={this.state.input} />
      </div>
    );
  }
}

export default App;
