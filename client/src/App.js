import React, { Component } from "react";
import axios from "axios";

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

  submit = () => {
    axios({
      url: "postdata",
      method: "post",
      data: {
        source: "SOURCE",
        amount: 100
      }
    });
  };

  render() {
    return (
      <div>
        {console.log(this.state.data)}
        <button onClick={this.submit}>submit</button>
      </div>
    );
  }
}
