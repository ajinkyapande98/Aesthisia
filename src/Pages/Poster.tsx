import React from "react";
import loginBgSVG from "../assets/bg.svg";
import Linkedin from "../assets/exo.svg";
import EXO from "../assets/Frame 45 2.png";
import Insta from "../assets/Insta.png";
import FB from "../assets/FB.png";

const Poster: React.FC = () => {
  return (
    <div className=" relative">
      <img className=" absolute m-5" src={EXO} alt="" />
      <div
        className=" flex justify-between absolute bottom-8 ml-5"
        style={{ width: "70%" }}
      >
        <p className=" text-white">aesthisia.com</p>
        <div className="flex justify-around" style={{ width: "20%" }}>
          <img src={Linkedin} className=" h-5" alt="exo_img" />
          <img src={FB} className=" h-5" alt="" />
          <img src={Insta} className=" h-5" alt="" />
        </div>
      </div>
      <img className="" src={loginBgSVG} alt="" />
      <div className=" absolute top-64 text-white left-5 ">
        <h1 className=" text-4xl font-Poppins font-semibold ">
          100% Uptime😎{" "}
        </h1>
        <p className="font-Poppins text-2xl text-gray-400 mt-2">
          Zero Infrastructure{" "}
        </p>
        <p className="font-Poppins text-2xl text-gray-400 mt-2">Management</p>
      </div>
    </div>
  );
};

export default Poster;
