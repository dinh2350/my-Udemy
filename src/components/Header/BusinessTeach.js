import React from "react";

class BusinessTeach extends React.Component {
  constructor(props) {
    super(props);
    this.hover = React.createRef();
    this.box = React.createRef();
  }
  setHover = () => {
    this.box.current.className = "header__bTDetail show";
  };
  unsetHover = () => {
    this.box.current.className = "header__bTDetail hide";
  };
  render() {
    return (
      <div className="header__businessTeach">
        <div className="header__businessTeachContent">
          <div
            className="header__bTContent"
            ref={this.hover}
            onMouseEnter={this.setHover}
            onMouseLeave={this.unsetHover}
          >
            <p>{this.props.children}</p>
          </div>
          <div className="header__bTDetail hide" ref={this.box}>
            <div>
              <p>
                {" "}
                This has led to anchors often being used in applications based
                on how they look and function instead of what they represent.
              </p>
              <span>link</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BusinessTeach;
