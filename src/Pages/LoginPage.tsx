import React, { useState, ChangeEvent } from "react";
import Input from "../Components/Input";
import Button from "../Components/Button";
import lotus from "../assets/petals.svg";
const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Perform login logic here
    console.log("Login submitted!");
    console.log("Email:", email);
    console.log("Password:", password);
    // Reset form fields
    setEmail("");
    setPassword("");
  };

  return (
    <div className=" flex " style={{ height: "100%", width: "100%" }}>
      <form onSubmit={handleSubmit} className="flex flex-col gap-5 text-center">
        <div className=" flex flex-col gap-3">
          <img className=" text-center h-10" src={lotus} alt="" />
          <h1 className="font-Poppins text-4xl font-semibold">
            <span className="text-black">Welcome</span>{" "}
            <span className="text-green-500">Back!</span>
          </h1>
          <p className=" text-sm text-gray-400">Glad to see you, Again!</p>
        </div>
        <div>
          <Input
            type="email"
            myStyle={
              " border w-80 px-3 py-2 rounded-lg text-sm placeholder:text-gray-300"
            }
            placeholder="Enter your email"
            value={email}
            onChange={handleEmailChange}
          />
        </div>
        <div className=" ">
          <Input
            type="password"
            myStyle={
              " border w-80 px-3 py-2 rounded-lg  text-sm placeholder:text-gray-300"
            }
            placeholder="Enter your password"
            value={password}
            onChange={handlePasswordChange}
          />
          <span className=" relative ml-48 text-gray-400 text-sm">
            Forgot Password?
          </span>
        </div>
        {/* <button type="submit">Login</button> */}
        <div>
          <Button
            type={"submit"}
            important={true}
            myStyle={
              "bg-black text-white px-3 py-2 w-80 rounded-md mt-3 font-bold"
            }
            value={"Log In"}
          />
        </div>
        <div className="mt-8">
          {/* <input type="text" className=" " /> */}
          <span className="text-sm text-gray-400">
            Don't have an account yet?
          </span>
          <span className="text-sm text-custom-green font-medium">
            {" "}
            Sign Up
          </span>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
