import React, { Component } from "react";
import Footer from "./Footer";
import Header from "./Header";
import ProductList from "./ProductList";
import Slider from "./Slider";
import phoneData from "../../data/phoneData.json";
import Modal from "./Modal";

export default class BTComponentReact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sanPhamModal: phoneData[0], // tạo nguồn dữ liệu thay đổi
    };
  }

  xemChiTiet = (sanPhamChiTiet) => {
    debugger;
    console.log(sanPhamChiTiet);
    this.setState({
      sanPhamModal: sanPhamChiTiet,
    });
  };
  render() {
    return (
      <div className="bg-dark">
        <Header />
        <Slider />
        <ProductList phone={phoneData} xemChiTiet={this.xemChiTiet} />
        <Modal sanPhamModal={this.state.sanPhamModal} />
        <Footer />
      </div>
    );
  }
}
