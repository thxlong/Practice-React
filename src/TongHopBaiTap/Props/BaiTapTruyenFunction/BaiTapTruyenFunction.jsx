import React, { Component } from "react";
import DanhSachSanPham from "./DanhSachSanPham";
import dataPhone from "../../../data/phoneData.json";

export default class BaiTapTruyenFunction extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mangSanPham: dataPhone,
    };
  }

  renderSanPham = () => {
    return this.state.mangSanPham.map((sp, index) => {
      return (
        <div className="col-4" key={index}>
          <DanhSachSanPham hanlderDetail={this.hanlderDetail} mangSanPhamInput={sp} />
        </div>
      );
    });
  };

  hanlderDetail = (sanPham) => {
    console.log(sanPham);
    //Thay đổi giá trị phone
    this.setState({});
  };

  render() {
    const {
      maSP,
      tenSP,
      hinhAnh,
      giaBan,
      manHinh,
      heDieuHanh,
      cameraTruoc,
      cameraSau,
      ram,
      rom,
    } = this.state.mangSanPham[0];
    return (
      <div className="container">
        <div className="row">{this.renderSanPham()}</div>

        <div className="row">
          <div className="col-4">
            <img
              className="mt-4"
              src={hinhAnh}
              alt={hinhAnh}
              style={{ width: 350, height: 400 }}
            />
          </div>
          <div className="col-8">
            <table className="table">
              <thead>
                <tr>
                  <th>Mã sản phẩm</th>
                  <th>{maSP}</th>
                </tr>
                <tr>
                  <th>Tên sản phẩm</th>
                  <th>{tenSP}</th>
                </tr>
                <tr>
                  <th>Màn hình</th>
                  <th>{manHinh}</th>
                </tr>
                <tr>
                  <th>Hệ điều hành</th>
                  <th>{heDieuHanh}</th>
                </tr>
                <tr>
                  <th>Camera trước</th>
                  <th>{cameraTruoc}</th>
                </tr>
                <tr>
                  <th>Camera sau</th>
                  <th>{cameraSau}</th>
                </tr>
                <tr>
                  <th>ram</th>
                  <th>{ram}</th>
                </tr>
                <tr>
                  <th>rom</th>
                  <th>{rom}</th>
                </tr>
                <tr>
                  <th>giaBan</th>
                  <th>{giaBan.toLocaleString()}</th>
                </tr>
              </thead>
            </table>
          </div>
        </div>
      </div>
    );
  }
}
