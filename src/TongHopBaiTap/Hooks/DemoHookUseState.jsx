import React, { useState } from "react";

export default function DemoHookUseState(props) {
  // (1) this.state={}
  //   (2) this.setState(newState)

  // tuple
  let [state, setState] = useState({
    like: 0,
  });

  const handleLike = () => {
    //   lấy like +1 và setState cho like

    setState({
      like: state.like + 1,
    });
  };

  return (
    <div className="container">
      <div className="card-body">
        <img
          className="card-img-top"
          src="https://picsum.photos/200/200"
          alt="https://picsum.photos/200/200"
          style={{ width: 200, height: 200 }}
        />
        <h4 className="card-title">Picture</h4>
        <p className="card-text" style={{ color: "red" }}>
          {state.like} ♥
        </p>
      </div>

      <button className="btn btn-danger" onClick={handleLike}>
        Like
      </button>
    </div>
  );
}
