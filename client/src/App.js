import React, { Component } from "react";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: ""
    };
  }

  componentDidMount() {
    fetch("/backend")
      .then(res => res.json())
      .then(data => this.setState({ data }));
  }

  render() {
    return <div>{console.log(this.state.data)}</div>;
  }
}
