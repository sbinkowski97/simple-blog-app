import React, { useEffect } from "react";
import { connect } from "react-redux";
import fetchArticles from "data/actions/articles.actions";
import Menu from "./components/Menu/Menu";
import Sidebar from "./components/Sidebar/Sidebar";
import Home from "pages/Home/Home";
const App = ({ fetchArticles }) => {
  useEffect(() => {
    fetchArticles();
  }, [fetchArticles]);
  return (
    <>
      <Menu />
      <div className="container">
        <div className="wrapper">
          <Home />
        </div>
        <Sidebar />
      </div>
    </>
  );
};

export default connect(
  (state) => {
    return {};
  },
  {
    fetchArticles,
  }
)(App);
