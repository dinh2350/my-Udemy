import React from "react";

const Categories = props => {
  return (
    <div className="header__categories">
      <div className="header__categoriesContent">
        <div>
          <div className="header__iconCategories">
            <i className="fa fa-calendar-alt"></i>
          </div>
          <div className="header__textCategories">
            <p>Categories</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
