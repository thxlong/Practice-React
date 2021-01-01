import React, { Component } from "react";

export default class DemoIf extends Component {
  constructor(props) {
    super(props);
    //this.state là thuộc tính có sẵn của component, chứa các thuộc tính có khả năng thay đổi 1 sự kiện nào đó của component
    this.state = {
      isLogin: false,
      userName: "",
    };
  }

  handlerLogin = () => {
    this.setState(
      {
        // this.setState là phương thức kế thừa từ component ===> giúp thay đổi giá trị state và gọi hàm render lại
        //setState là phương thức bất đồng bộ (nghĩa là nó sẽ render ngầm - nên console log sẽ chưa update giá trị.)
        isLogin: true,
        userName: "Long",
      },
      () => {
        console.log(this.state);
      }
    );
  };

  handlerLogout = () => {
    this.setState(
      {
        isLogin: false,
        userName: "No login",
      },
      () => {
        console.log(this.state);
      }
    );
  };

  render() {
    // Phương thức render của component DomeIf
    return (
      <div className="container text-right">
        {this.state.isLogin ? (
          <div>
            <b>{this.state.userName}!</b>
            <button className="btn-danger" onClick={this.handlerLogout}>
              Logout
            </button>
          </div>
        ) : (
          <button className="btn-success" onClick={this.handlerLogin}>
            Login
          </button>
        )}
      </div>
    );
  }
}
