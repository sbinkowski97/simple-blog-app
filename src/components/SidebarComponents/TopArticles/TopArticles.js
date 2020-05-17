import React from "react";
import "./TopArticles.scss";
import placeholder from "../../../media/placeholder.png";

const TopArticles = () => {
  return (
    <div className="top-articles">
      <h3 className="sidebar_header">Popular Articles</h3>
      {/* item from map */}
      <div className="top-articles__item">
        <img src={placeholder} alt="" className="top-articles__image" />
        <div className="top-articles__text">
          <div className="top-articles__header">First Test Article</div>
          <div className="top-articles__meta">
            <div className="top-articles__icon">
              <span className="top-articles__meta-text">data</span>
            </div>
            <div className="top-articles__icon">
              <span className="top-articles__meta-text">autor</span>
            </div>
            <div className="top-articles__icon">
              <span className="top-articles__meta-text">19</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopArticles;
