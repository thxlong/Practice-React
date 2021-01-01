import React, { Component } from "react";

export default class DemoVongLapBanHang extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mangSanPham: [
        {
          ma: "1",
          tenSP: "Coca",
          hinhAnh: "./img/NuocNgot/coca-cola.jpg",
          donVi: "Thùng",
          soLuong: "1",
          donGia: "160000",
        },
        {
          ma: "2",
          tenSP: "Pepsi",
          hinhAnh: "./img/NuocNgot/pepsi.jpg",
          donVi: "Thùng",
          soLuong: "1",
          donGia: "170000",
        },
        {
          ma: "3",
          tenSP: "Sting",
          hinhAnh: "./img/NuocNgot/sting.jpg",
          donVi: "Thùng",
          soLuong: "1",
          donGia: "180000",
        },
      ],
    };
  }

  renderSanpham = () => {
    let contentTable = [];

    contentTable = this.state.mangSanPham.map((sanPham, i) => {
      let styleImg = { width: 150, height: 75 };
      return (
        <tr key={i}>
          <td>{sanPham.ma}</td>
          <td>{sanPham.tenSP}</td>
          <td>
            <img src={sanPham.hinhAnh} alt={sanPham.hinhAnh} style={styleImg} />
          </td>
          <td>{sanPham.donVi}</td>
          <td>{sanPham.soLuong}</td>
          <td>{sanPham.donGia}</td>
        </tr>
      );
    });
    return contentTable;
  };

  render() {
    return (
      <div className="container">
        <h4 className="bg-dark text-center text-white p-4">MENU SẢN PHẨM</h4>
        <table className="table">
          <thead>
            <tr>
              <th>Mã</th>
              <th>Tên sản phẩm</th>
              <th>Hình ảnh</th>
              <th>Đơn vị</th>
              <th>Số lượng</th>
              <th>Đơn giá</th>
            </tr>
          </thead>
          <tbody>{this.renderSanpham()}</tbody>
        </table>
      </div>
    );
  }
}
