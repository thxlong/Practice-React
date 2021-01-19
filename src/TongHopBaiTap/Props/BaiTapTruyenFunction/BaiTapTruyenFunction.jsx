import React, { Component } from "react";
import DanhSachSanPham from "./DanhSachSanPham";
import Modal from "./Modal";
import dataPhone from "../../../data/phoneData.json";

export default class BaiTapTruyenFunction extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mangDataPhone: dataPhone,
    };
  }

  // Lấy dữ liệu tại componentBaiTapTruyenFunction
  themGioHang = (sanPhamChon) => {
    console.log(sanPhamChon);
    this.setState({
      sanPhamChiTiet: [...this.state.sanPhamChiTiet, sanPhamChon],
    });
  };

  render() {
    let tongSoLuong = this.state.mangDataPhone.reduce((tongSL, spGH, index) => {
      return (tongSL += spGH.soLuong);
    }, 0);
    return (
      <div className="container">
        <div className="text-center">
          <h1 className="text-success">Bài tập giỏ hàng</h1>
        </div>

        <div className="text-right mb-5">
          <span
            className="text-danger font-weight-bold"
            style={{ cursor: "pointer" }}
            data-toggle="modal"
            data-target="#modelId"
          >
            Giỏ hàng ({tongSoLuong})
          </span>
        </div>

        <DanhSachSanPham
          themGioHang={this.themGioHang}
          mangDataPhone={this.state.mangDataPhone}
        />
        <Modal mangDataPhone={this.state.mangDataPhone} />
      </div>
    );
  }
}
