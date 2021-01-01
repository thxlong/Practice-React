import React, { Component } from "react";
import data from "../../data/data.json";

export default class VongLapReact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mangPhim: data,
    };
  }

  renderMangPhim = () => {
    return this.state.mangPhim.map(
      (phim, index) => {
        return (
          <div key={index} className="card col-4">
            <img
              className="card-img-top"
              src={phim.hinhAnh}
              alt={phim.hinhAnh}
              style={{ width: 350, height: 400 }}
            />
            <div className="card-body">
              <h4 className="card-title">{phim.tenPhim}</h4>
              <p className="card-text">
                {phim.moTa.length > 100
                  ? phim.moTa.substr(0, 100) + "..."
                  : phim.moTa}
              </p>
            </div>
          </div>
        );
      },
      () => {
        console.log(this.renderMangPhim);
      }
    );
  };

  render() {
    console.log("mangPhim", this.state.mangPhim);
    return (
      <div>
        <h3 className="bg-info text-white text-center p-3">MENU PHIM</h3>
        {/* <button className="btn btn-success row">Hiện danh sách phim</button> */}

        <div className="container">
          <div className="row">{this.renderMangPhim()}</div>
        </div>
      </div>
    );
  }
}
