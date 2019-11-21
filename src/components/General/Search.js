import React from "react";

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.inputSearch = React.createRef();
    this.iconSearch = React.createRef();
  }
  setFocus = () => {
    this.inputSearch.current.className = "focusInput";
    this.iconSearch.current.className = "fa fa-search focusIcon";
  };
  unSetFocus = () => {
    this.inputSearch.current.className = "";
    this.iconSearch.current.className = "fa fa-search";
  };
  render() {
    return (
      <div className="header__search">
        <div className="header__searchContent">
          <div className="header__input">
            <input
              type="text"
              onBlur={this.unSetFocus}
              onFocus={this.setFocus}
              ref={this.inputSearch}
            />
          </div>
          <div className="header__icon">
            <i className="fa fa-search" ref={this.iconSearch}></i>
          </div>
        </div>
      </div>
    );
  }
}

export default Search;
