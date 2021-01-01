import React, { Component } from "react";

export default class SelectCar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imgCar: `./img/car/products/black-car.jpg`,
    };
  }

  changeColor = (color) => {
    let imgUpdate = ``;
    console.log(color);

    switch (color) {
      case "red":
        imgUpdate = `./img/car/products/red-car.jpg`;

        break;

      case "silver":
        imgUpdate = `./img/car/products/silver-car.jpg`;

        break;

      case "black":
        imgUpdate = `./img/car/products/black-car.jpg`;

        break;
      default:
        break;
    }

    console.log(this.state.imgCar);
    // gọi phương thức setState để truyen2 img mới từ sự kiện click của button ===> render lại giao điên
    this.setState({
      imgCar: imgUpdate,
    });
  };

  render() {
    return (
      <div>
        <div>
          <img
            src={this.state.imgCar}
            alt={this.state.imgCar}
            style={{ width: 400, height: 200 }}
          />
        </div>
        <h4 style={{ marginLeft: 100 }}>Change Color</h4>
        <div className="ml-5">
          <button
            className="btn-danger"
            onClick={() => {
              this.changeColor("red");
            }}
          >
            Red Color
          </button>
          <button
            onClick={() => {
              this.changeColor("silver");
            }}
          >
            Silver Color
          </button>
          <button
            className="btn-dark"
            onClick={() => {
              this.changeColor("black");
            }}
          >
            Black Color
          </button>
        </div>
      </div>
    );
  }
}
