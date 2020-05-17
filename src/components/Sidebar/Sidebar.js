import React from "react";
import "./Sidebar.scss";
import SearchBox from "../SidebarComponents/SearchBox/SearchBox";
import Categories from "../SidebarComponents/Categories/Categories";
import TopArticles from "../SidebarComponents/TopArticles/TopArticles";
import TagCloud from "../SidebarComponents/TagCloud/TagCloud";
import Paragraph from "../SidebarComponents/Paragraph/Paragraph";
const Sidebar = () => {
  return (
    <div className="sidebar">
      <SearchBox />
      <Categories />
      <TopArticles />
      <TagCloud />
      <Paragraph />
    </div>
  );
};

export default Sidebar;
