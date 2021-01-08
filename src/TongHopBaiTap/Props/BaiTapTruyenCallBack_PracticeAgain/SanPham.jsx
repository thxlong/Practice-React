import React, { Component } from "react";

export default class SanPham extends Component {
  render() {
    let { dt } = this.props;
    return (
      <div className="card">
        <img
          className="card-img-top"
          src={dt.hinhAnh}
          alt={dt.hinhAnh}
          style={{ width: 300, height: 300 }}
        />
        <div className="card-body">
          <h4 className="card-title">{dt.tenSP}</h4>
          <p className="card-text">{dt.giaBan.toLocaleString()}</p>
          <button
            className="btn btn-success"
            onClick={() => this.props.xemChiTietButton(dt)}
          >
            Chi tiết
          </button>
        </div>
      </div>
    );
  }
}
