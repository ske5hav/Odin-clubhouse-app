
import React, { useState } from "react";

const Singup = ({ setToggle, setUsetData }) => {
  const [fromData, setFromData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handledata = (e) => {
    const { name, value } = e.target;
    setFromData({ ...fromData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setUsetData((prevUsers) => [...prevUsers, fromData]);

    setFromData({
      name: "",
      email: "",
      password: "",
    });

    setToggle((prev) => !prev);
  };

  return (
    <div className="bg-white w-90 max-w-[90vw] p-8 rounded-2xl shadow-2xl border border-gray-100 flex flex-col gap-6">
      <h1 className="text-3xl font-bold text-gray-800 text-center">
        Create Account
      </h1>

      <p className="text-center text-gray-500 text-sm">
        Join the Odin Clubhouse
      </p>

      <form onSubmit={handleSubmit} className="flex flex-col gap-5">
        <input
          required
          value={fromData.name}
          name="name"
          onChange={handledata}
          className="p-3 border border-gray-300 rounded-lg outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
          type="text"
          placeholder="Enter your name"
        />

        <input
          required
          value={fromData.email}
          name="email"
          onChange={handledata}
          className="p-3 border border-gray-300 rounded-lg outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
          type="email"
          placeholder="Enter your email"
        />

        <input
          required
          value={fromData.password}
          name="password"
          onChange={handledata}
          className="p-3 border border-gray-300 rounded-lg outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
          type="password"
          placeholder="Enter your password"
        />

        <button
          type="submit"
          className="p-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 active:scale-[0.98] transition duration-200"
        >
          Sign Up
        </button>

        <p className="text-center text-sm text-gray-600">
          Already have an account?{" "}
          <span
            onClick={() => setToggle((prev) => !prev)}
            className="text-blue-600 font-semibold cursor-pointer hover:underline"
          >
            Login here
          </span>
        </p>
      </form>
    </div>
  );
};

export default Singup;
