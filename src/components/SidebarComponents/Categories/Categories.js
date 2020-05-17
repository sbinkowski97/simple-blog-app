import React from "react";
import "./Categories.scss";

const Categories = () => {
  return (
    <div className="categories">
      <h3 className="sidebar__header">Categories</h3>
      <ul className="categories__list">
        <li className="categories__item">fashion</li>
        <li className="categories__item">tech</li>
        <li className="categories__item">travel</li>
      </ul>
    </div>
  );
};

export default Categories;
