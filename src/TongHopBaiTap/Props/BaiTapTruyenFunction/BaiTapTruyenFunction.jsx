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
  render() {
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
            Giỏ hàng (0)
          </span>
        </div>

        <DanhSachSanPham />
        <Modal mangDataPhone={this.state.mangDataPhone} />
      </div>
    );
  }
}
