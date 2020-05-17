import React from "react";
import "./Home.scss";
import placeholder from "../../media/placeholder.png";

const Home = () => {
  return (
    <>
      <div className="preview">
        <img src={placeholder} alt="" className="preview__image" />
        <div className="preview__text">
          <h3 className="preview__header">Lorem ipsum dolor sit</h3>
          <div className="preview__meta">
            <div className="preview__meta-item">data</div>
            <div className="preview__meta-item">kategoria</div>
            <div className="preview__meta-item">komentarze</div>
          </div>
          <p className="preview__content">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
            eligendi similique ratione ab optio quo cum laborum sapiente
            obcaecati asperiores inventore suscipit, omnis reiciendis dolores
            dolore aliquam maxime modi consequatur.
          </p>
        </div>
      </div>
    </>
  );
};

export default Home;
