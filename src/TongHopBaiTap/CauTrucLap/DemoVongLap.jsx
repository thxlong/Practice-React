import React, { Component } from "react";

export default class DemoVongLap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mangSanPham: [
        { maSP: "1", tenSP: "IphoneX", gia: 10000 },
        { maSP: "2", tenSP: "IphoneXS", gia: 12000 },
        { maSP: "3", tenSP: "IphoneXS Max", gia: 14000 },
      ],
    };
  }

  //   Viết phương thức render các sản phẩm thành các tag tr

  renderSanPham = () => {
    let contentTable = [];

    contentTable = this.state.mangSanPham.map((sanPham, index) => {
      return (
        <tr key={index}>
          <td>{sanPham.maSP}</td>
          <td>{sanPham.tenSP}</td>
          <td>{sanPham.gia}</td>
        </tr>
      );
    });

    return contentTable;
  };
  render() {
    return (
      <div className="container">
        <h3 className="bg-dark p-2 text-center text-white">
          DEMO VÒNG LẶP REACT
        </h3>
        <table className="table">
          <thead>
            <tr>
              <th>Mã sản phẩm</th>
              <th>Tên sản phẩm</th>
              <th>Giá</th>
            </tr>
          </thead>
          <tbody>{this.renderSanPham()}</tbody>
        </table>
      </div>
    );
  }
}
