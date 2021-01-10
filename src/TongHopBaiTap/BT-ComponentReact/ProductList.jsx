import React, { Component } from "react";
import ProductComponent from "./ProductComponent";

export default class ProductList extends Component {
  renderPhone = () => {
    return this.props.phone.map((sp, index) => {
      return (
        <div key={index} className="col-4">
          <ProductComponent sanPham={sp} xemChiTiet={this.props.xemChiTiet} />
        </div>
      );
    });
  };
  render() {
    return (
      <div className="container text-white">
        <h3 className="text-center ">BEST SMARTPHONE</h3>

        <div className="row">{this.renderPhone()}</div>
      </div>
    );
  }
}
