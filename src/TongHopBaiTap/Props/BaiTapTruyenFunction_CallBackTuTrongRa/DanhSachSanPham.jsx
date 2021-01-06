import React, { Component } from "react";

export default class DanhSachSanPham extends Component {
  render() {
    let { mangSanPhamInput } = this.props;
    let { tenSP, hinhAnh, giaBan, maSP } = mangSanPhamInput;

    return (
      <div className="card text-center">
        <img
          className="card-img-top"
          src={hinhAnh}
          alt={hinhAnh}
          style={{ width: 350, height: 300 }}
        />
        <div className="card-body">
          <h4 className="card-title">{tenSP}</h4>
          <p className="card-text">{giaBan.toLocaleString()}</p>
          <button className="btn btn-success">Thêm giỏ hàng</button>
          <button
            className="btn btn-info ml-3"
            onClick={() => {
              this.props.hanlderDetail(maSP);
            }}
          >
            Xem chi tiết
          </button>
        </div>
      </div>
    );
  }
}
