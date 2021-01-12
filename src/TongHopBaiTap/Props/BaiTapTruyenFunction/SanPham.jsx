import React, { Component } from "react";

export default class SanPham extends Component {
  styleImg = { width: 300, height: 300 };
  render() {
    let { dt } = this.props;

    return (
      <div className="card">
        <img
          className="card-img-top"
          src={dt.hinhAnh}
          alt={dt.hinhAnh}
          style={this.styleImg}
        />
        <div className="card-body">
          <h4 className="card-title">{dt.tenSP}</h4>
          <p className="card-text">{dt.giaBan}</p>

          <button
            className="btn btn-success"
            style={{ width: 130 }}
            onClick={() => this.props.xemChiTietButton(dt)}
          >
            Xem chi tiết
          </button>
          <button className="btn btn-warning ml-2" style={{ width: 130 }}>
            Thêm
          </button>
        </div>
      </div>
    );
  }
}
