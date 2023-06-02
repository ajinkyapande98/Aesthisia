import React from "react";
import LoginPage from "./LoginPage";
import Poster from "./Poster";

const Home: React.FC = () => {
  return (
    <div className="flex justify-center items-center  m-10 ">
      <div className="" style={{ height: "100%", width: "90%" }}>
        <Poster />
      </div>
      <div
        className=" flex justify-center relative "
        style={{ height: "100%", width: "60%" }}
      >
        <LoginPage />
      </div>
    </div>
  );
};

export default Home;
