import React, { Component } from "react";
import SanPham from "./SanPham";
import phoneData from "../../../data/phoneData.json";

export default class DanhSachSanPham extends Component {
  styleImg = { width: 300, height: 300 };

  constructor(props) {
    super(props);
    this.state = {
      sanPhamChiTiet: phoneData,
    };
  }

  // Dữ liệu cần lấy ở component DanhSachSanPham => đặt callback function tại danhSachSanPham
  xemChiTietButton = (sanPhamClicked) => {
    console.log(sanPhamClicked);
    // Thay đổi giá trị phone xemChiTiet
    this.setState({
      sanPhamChiTiet: sanPhamClicked,
    });
  };

  render() {
    let { mangDataPhone, themGioHang } = this.props;
    let { sanPhamChiTiet } = this.state;

    const renderSanPham = () => {
      // Lấy props mảng sản phẩm từ component ngoài vào
      return mangDataPhone.map((dt, index) => {
        return (
          <div className="col-4" key={index}>
            <SanPham
              themGioHang={themGioHang}
              dt={dt}
              xemChiTietButton={this.xemChiTietButton}
            />
          </div>
        );
      });
    };

    return (
      <div className="container">
        <div className="row">{renderSanPham()}</div>

        <div className="row">
          <div className="col-4">
            <h3>{sanPhamChiTiet.tenSP}</h3>

            <img
              src={sanPhamChiTiet.hinhAnh}
              alt={sanPhamChiTiet.hinhAnh}
              style={this.styleImg}
            />
          </div>

          <div className="col-8">
            <table className="table">
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
                  <th>Ram</th>
                  <th>{sanPhamChiTiet.ram}</th>
                </tr>
                <tr>
                  <th>Rom</th>
                  <th>{sanPhamChiTiet.rom}</th>
                </tr>
                <tr>
                  <th>Giá bán</th>
                  <th>{sanPhamChiTiet.giaBan}</th>
                </tr>
              </thead>
            </table>
          </div>
        </div>
      </div>
    );
  }
}
