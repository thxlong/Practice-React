import React, { Component } from "react";

export default class Event extends Component {
  // Xử lý cho nút click
  hanldeShowMessage = (message) => {
    alert(message);
  };
  render() {
    let message = "Hello Cybersoft";
    return (
      <div className="container">
        <button
          className="btn btn-success"
          onClick={() => this.hanldeShowMessage(message)}
        >
          Show message
        </button>
        {/* <button
          className="btn btn-success"
          onClick={this.hanldeShowMessage.bind(this, message)}
        >
          Show message
        </button> */}
      </div>
    );
  }
}
