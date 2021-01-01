import React, { Component } from "react";
import data from "../../../data/data.json";
import PhimRCC from "./PhimRCC";
// import PhimRFC from "./PhimRFC";

export default class DemoPropsOther extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mangPhim: data,
    };
  }

  renderPhim = () => {
    return this.state.mangPhim.map((phim, index) => {
      return (
        <div className="col-4" key={index}>
          {/* <PhimRFC phim_input={phim} /> */}
          <PhimRCC phim_input={phim} />
        </div>
      );
    });
  };
  render() {
    return (
      <div className="container">
        <div className="row">{this.renderPhim()}</div>
      </div>
    );
  }
}
