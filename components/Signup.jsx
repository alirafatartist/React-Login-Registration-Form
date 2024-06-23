"Use client";
import React, { useState } from "react";

export default function Signup() {
  const [form, setForm] = useState("Sign Up");

  return (
    <div className="bg-white text-black flex flex-col justify-center items-center w-[400px] p-5 rounded-sm gap-8">
      <h1 className="text-[2rem] text-[#673AB7] font-[bold] pt-0 pb-1 px-0 border-b-[3px] border-b-[#673AB7] border-solid">
        {form}
      </h1>
      {form == "Sign Up" ? (
        <div className="relative">
          <i className="fa-solid fa-user absolute right-[87%] top-[35%] text-[#8f8f8f]"></i>
          <input
            type="text"
            name="name"
            id=""
            placeholder="Name"
            className="border rounded p-2.5 outline-none pl-10 bg-[#ebebeb]"
          />
        </div>
      ) : (
        <div></div>
      )}
      <div className="relative">
        <i className="fa-solid fa-envelope absolute right-[87%] top-[35%] text-[#8f8f8f]"></i>
        <input
          type="email"
          name="name"
          id=""
          placeholder="Email"
          className="border rounded p-2.5 outline-none pl-10 bg-[#ebebeb]"
        />
      </div>
      <div className="relative">
        <i className="fa-solid fa-lock absolute right-[87%] top-[35%] text-[#8f8f8f]"></i>
        <input
          type="password"
          name="name"
          id=""
          placeholder="Password"
          className="border rounded p-2.5 outline-none pl-10 bg-[#ebebeb]"
        />
      </div>
      <div className="flex gap-6 justify-center items-center">
        <button
          className={
            form == "Sign Up"
              ? "text-white font-[bold] px-5 py-2.5 rounded-[10px] bg-[#673AB7]"
              : "text-black font-[bold] px-5 py-2.5 rounded-[10px] bg-[#ebebeb]"
          }
          onClick={() => {
            setForm("Sign Up");
          }}
        >
          Sign Up
        </button>
        <button
          className={
            form == "Signin"
              ? "text-white font-[bold] px-5 py-2.5 rounded-[10px] bg-[#673AB7]"
              : "text-black font-[bold] px-5 py-2.5 rounded-[10px] bg-[#ebebeb]"
          }
          onClick={() => {
            setForm("Signin");
          }}
        >
          Login
        </button>
      </div>
    </div>
  );
}
