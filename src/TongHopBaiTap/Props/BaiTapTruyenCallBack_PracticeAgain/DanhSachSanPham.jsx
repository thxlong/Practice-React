import React, { Component } from "react";
import phoneData from "../../../data/phoneData.json";
import SanPham from "./SanPham";

let styleImg = { width: 300, height: 300 };

export default class DanhSachSanPham extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sanPhamChiTiet: phoneData[0],
    };
  }

  renderSanPham = () => {
    return phoneData.map((dt, index) => {
      return (
        <div key={index} className="col-4">
          <SanPham dt={dt} xemChiTietButton={this.xemChiTietButton} />
        </div>
      );
    });
  };

  xemChiTietButton = (sanPhamClicked) => {
    console.log(sanPhamClicked);
    // Thay đổi giá trị phone xemChiTiet
    this.setState({
      sanPhamChiTiet: sanPhamClicked,
    });
  };

  renderTable = () => {
    let { sanPhamChiTiet } = this.state;
    return (
      <div className="row">
        <div className="col-6">
          <img
            style={styleImg}
            src={sanPhamChiTiet.hinhAnh}
            alt={sanPhamChiTiet.hinhAnh}
          />
        </div>

        <div className="col-6">
          <table className="table text-left">
            <thead>
              <tr>
                <th>Mã sản phẩm</th>
                <th>{sanPhamChiTiet.maSP}</th>
              </tr>
              <tr>
                <th>Tên sản phẩm</th>
                <th>{sanPhamChiTiet.tenSP}</th>
              </tr>
              <tr>
                <th>Màn hình</th>
                <th>{sanPhamChiTiet.manHinh}</th>
              </tr>
              <tr>
                <th>Hệ điều hành</th>
                <th>{sanPhamChiTiet.heDieuHanh}</th>
              </tr>
              <tr>
                <th>Camera trước</th>
                <th>{sanPhamChiTiet.cameraTruoc}</th>
              </tr>
              <tr>
                <th>Camera sau</th>
                <th>{sanPhamChiTiet.cameraSau}</th>
              </tr>
              <tr>
                <th>ram</th>
                <th>{sanPhamChiTiet.ram}</th>
              </tr>
              <tr>
                <th>rom</th>
                <th>{sanPhamChiTiet.rom}</th>
              </tr>
              <tr>
                <th>giaBan</th>
                <th>{sanPhamChiTiet.giaBan.toLocaleString()}</th>
              </tr>
            </thead>
          </table>
        </div>
      </div>
    );
  };

  render() {
    return (
      <div className="container">
        <div className="text-center">
          <h3 className="text-success display-4">Bài tập truyền function</h3>

          <div className="row">{this.renderSanPham()}</div>

          <div>{this.renderTable()}</div>
        </div>
      </div>
    );
  }
}
