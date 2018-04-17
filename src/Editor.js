import React, { Component } from "react";
import PropTypes from "prop-types";
import CodeMirror from "react-codemirror";

import "./Editor.css";
import "codemirror/lib/codemirror.css";
import "codemirror/mode/javascript/javascript";

const options = {
  lineNumbers: true,
  lineWrapping: true
};

class Editor extends Component {
  static propTypes = {
    code: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired
  };

  render() {
    const { code, onChange } = this.props;

    return (
      <CodeMirror
        className="Editor"
        mode="javascript"
        value={code}
        onChange={onChange}
        options={options}
      />
    );
  }
}

export default Editor;
