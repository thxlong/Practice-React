import React, { Component } from "react";

export default class SinhVien extends Component {
  //Thuộc tính
  hoTen = "Nguyễn Văn A";
  lop = "FrontEnd";
  // tenTrungTam = "ABC1";

  renderThongTinSinhVien = (tenTrungTam) => {
    return (
      <ul>
        <li>Họ tên: {this.hoTen}</li>
        <li>Lớp: {this.lop} </li>
        <li>Trung tâm: {tenTrungTam}</li>
      </ul>
    );
  };

  //   Phương thức render là phương thức thuộc class SinhVien
  render() {
    //   bên trong là biến
    let tenTrungTam = "ABC2";
    return <div className="container">{this.renderThongTinSinhVien(tenTrungTam)}</div>;
  }
}
