import React, { Component } from "react";

export default class Modal extends Component {
  render() {
    const { mangDataPhone } = this.props;

    const renderGH = () => {
      return mangDataPhone.map((spGH, index) => {
        return (
          <tr key={index}>
            <td>{spGH.maSP}</td>
            <td>
              <img
                src={spGH.hinhAnh}
                alt={spGH.hinhAnh}
                style={{ width: 100, height: 100 }}
              />
            </td>
            <td>{spGH.tenSP}</td>
            <td>{spGH.soLuong}</td>
            <td>{spGH.giaBan.toLocaleString()}</td>
            <td>{(spGH.soLuong * spGH.giaBan).toLocaleString()}</td>
            <td>
              <button className="btn btn-danger">Xoá</button>
            </td>
          </tr>
        );
      });
    };
    return (
      <div
        class="modal fade"
        id="modelId"
        tabindex="-1"
        role="dialog"
        aria-labelledby="modelTitleId"
        aria-hidden="true"
      >
        <div class="modal-dialog" role="document">
          <div class="modal-content" style={{ width: 800, maxWidth: 800 }}>
            <div class="modal-header">
              <h5 class="modal-title">Giỏ hàng</h5>
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <table className="table">
                <th>Mã sản phẩm</th>
                <th>Hình ảnh</th>
                <th>Tên sản phẩm</th>
                <th>Số lượng</th>
                <th>Đơn giá</th>
                <th>Thành tiền</th>
                <th>Chức năng</th>
                <tbody>{renderGH()}</tbody>
              </table>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-dismiss="modal"
              >
                Đóng
              </button>
              <button type="button" class="btn btn-primary">
                Mua
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
