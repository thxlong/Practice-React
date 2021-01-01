import React, { Component } from "react";
import Footer from "./Footer";
import Header from "./Header";
import ProductList from "./ProductList";
import Slider from "./Slider";
import phoneData from "../../data/phoneData.json";

export default class BTComponentReact extends Component {

  render() {
    return (
      <div className="bg-dark">
        <Header />
        <Slider />
        <ProductList mangPhone={phoneData} />
        <Footer />
      </div>
    );
  }
}
