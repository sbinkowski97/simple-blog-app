import React from "react";
import "./TagCloud.scss";

const TagCloud = () => {
  return (
    <div className="tagcloud">
      <h3 className="sidebar__header">Tags</h3>
      <ul className="tagcloud__list">
        <li className="tagcloud__item">1</li>
        <li className="tagcloud__item">2</li>
        <li className="tagcloud__item">3</li>
        <li className="tagcloud__item">4</li>
      </ul>
    </div>
  );
};

export default TagCloud;
