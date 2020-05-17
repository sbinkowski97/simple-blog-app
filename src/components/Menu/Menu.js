import React from "react";
import "./menu.scss";
const Menu = () => {
  return (
    <div className="menu">
      {/* reactrouter */}
      <ul className="menu__list">
        <li className="menu__element menu__element--active">Home</li>
        <li className="menu__element ">About</li>
        <li className="menu__element ">Contact</li>
      </ul>
      <div className="menu__footer">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit
        voluptatibus a numquam quidem laudantium quas maiores optio maxime
        labore suscipit vitae atque ea rem, at recusandae illo et vel ullam.
      </div>
    </div>
  );
};

export default Menu;
