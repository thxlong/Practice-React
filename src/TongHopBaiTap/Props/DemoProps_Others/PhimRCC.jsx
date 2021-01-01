import React, { Component } from "react";

export default class PhimRCC extends Component {
  render() {
    const { hinhAnh, tenPhim, moTa } = this.props.phim_input;

    return (
      <div className="card">
        <img className="card-img-top" src={hinhAnh} alt={hinhAnh} />
        <div className="card-body text-right">
          <h4 className="card-title">{tenPhim}</h4>
          <p className="card-text">{moTa}</p>
          <button className="btn btn-info">Chi tiết</button>
        </div>
      </div>
    );
  }
}
