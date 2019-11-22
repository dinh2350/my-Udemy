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
    if (this.props.styling) {
      this.inputSearch.current.className = "focusInput";
      this.iconSearch.current.className = "fa fa-search focusIcon";
    } else {
      this.inputSearch.current.className = "";
      this.iconSearch.current.className = "fa fa-search";
    }
  };
  componentDidMount() {
    if (this.props.styling) {
      if (this.props.styling) {
        this.inputSearch.current.className = "focusInput";
        this.iconSearch.current.className = "fa fa-search focusIcon";
      }
    }
  }
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
              placeholder="Search for anything"
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
