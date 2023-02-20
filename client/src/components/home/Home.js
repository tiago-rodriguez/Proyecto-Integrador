import React from "react";
import "./home.css";
import GroupOfDev from "./GroupOfDev.png";

function Home() {
  return (
    <div className="home_bg_dos">
      <div className="home_bg">
        <div className="border-solid">
          <img className="imagen" src={GroupOfDev} />
        </div>
      </div>
    </div>
  );
}

export default Home;
