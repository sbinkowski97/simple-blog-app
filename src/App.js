import React from "react";
import Menu from "./components/Menu/Menu";
import Sidebar from "./components/Sidebar/Sidebar";
import ContentBox from "./components/ContentBox/ContentBox";
function App() {
  return (
    <>
      <Menu />
      <div className="container">
        <ContentBox />
        <Sidebar />
      </div>
    </>
  );
}

export default App;
