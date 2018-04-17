import React, { Component } from "react";
import Editor from "./Editor";
import Formatter from "./Formatter";
import "./App.css";

class App extends Component {
  state = {
    code: '{"query":"{\\n name \\n}"}',
    query: "{ name }"
  };

  onChange = code => {
    let query = null;
    try {
      const parsed = JSON.parse(code);
      query = parsed.query;
    } catch (err) {}

    this.setState({ code, query });
  };

  render() {
    const { code, query } = this.state;

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">GraphQL Formatter</h1>
        </header>
        <Editor code={code} onChange={this.onChange} />
        <Formatter query={query} />
      </div>
    );
  }
}

export default App;
