import React, { Component } from "react";

export default class ProductComponent extends Component {
  render() {
    let { sanPham, xemChiTiet } = this.props;
    let { hinhAnh, tenSP, giaBan } = this.props.sanPham;

    return (
      <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3 col-lg-3">
        <div className="container text-dark">
          <div className="card bg-light" style={{ width: 300 }}>
            <img
              className="card-img-top"
              src={hinhAnh}
              alt={hinhAnh}
              style={{ maxWidth: "100%", height: 250 }}
            />
            <div className="card-body text-center">
              <h4 className="card-title text-center">{tenSP}</h4>
              <p className="card-text'">{giaBan}</p>
              <button
                className="btn btn-primary"
                data-toggle="modal"
                data-target="#modelId"
                onClick={() => {
                  xemChiTiet(sanPham);
                }}
              >
                Detail
              </button>
              <a href="/#" className="btn btn-danger">
                Cart
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
