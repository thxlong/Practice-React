import React, { Component } from "react";
import ProductComponent from "./ProductComponent";

export default class ProductList extends Component {
  renderProduct = () => {
    return this.props.mangPhone.map((sp, index) => {
      return (
        <div key={index} className="col-4">
          <ProductComponent sanPham={sp} />
        </div>
      );
    });
  };

  render() {
    return (
      <div className="container text-white">
        <h3 className="text-center ">BEST SMARTPHONE</h3>

        <div className="row">{this.renderProduct()}</div>
      </div>
    );
  }
}
