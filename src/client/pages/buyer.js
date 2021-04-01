import React, { Component } from "react";
import { graphql } from "@apollo/client/react/hoc";
import query from "../queries/buyers";
import { Helmet } from "react-helmet";

class Buyer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  renderUsers() {
    const { loading, buyers } = this.props.data;

    if (loading) {
      return <div> Loading.... </div>;
    }

    if (buyers) {
      return buyers.map((buyer) => {
        return <li key={buyer.id}>{buyer.name}</li>;
      });
    }
  }

  render() {
    return (
      <div>
        <Helmet>
          <title>لیست خریداران</title>
          <meta property="og:title" content="لیست خریداران" />
        </Helmet>
        <ul>{this.renderUsers()}</ul>
        <button onClick={() => console.log("well done")}>Press me!</button>
      </div>
    );
  }
}

export default graphql(query)(Buyer);
