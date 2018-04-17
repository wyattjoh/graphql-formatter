import React, { Component } from "react";
import PropTypes from "prop-types";
import { GraphqlCodeBlock } from "graphql-syntax-highlighter-react";
import "./Formatter.css";

class Formatter extends Component {
  static propTypes = {
    query: PropTypes.string
  };

  render() {
    const { query } = this.props;

    return (
      <div className="Formatter">
        <GraphqlCodeBlock className="GraphqlCodeBlock" queryBody={query} />
      </div>
    );
  }
}

export default Formatter;
