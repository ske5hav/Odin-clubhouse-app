
import React, { useState } from "react";

const Login = ({ userData, setToggle, setIsLoggedIn }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    const user = userData.find(
      (user) =>
        user.email === email &&
        user.password === password
    );

    if (user) {
      setError("");
      setIsLoggedIn(true);
    } else {
      setError("Email ya password galat hai. Pehle Signup karo.");
    }
  };

  return (
    <div className="bg-white w-90 max-w-[90vw] p-8 rounded-2xl shadow-2xl border border-gray-100 flex flex-col gap-6">
      <h1 className="text-3xl font-bold text-gray-800 text-center">
        Login Screen
      </h1>

      <form onSubmit={handleLogin} className="flex flex-col gap-5">
        <input
          className="p-3 border border-gray-300 rounded-lg outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          className="p-3 border border-gray-300 rounded-lg outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        {error && (
          <p className="text-sm text-red-600">{error}</p>
        )}

        <button
          type="submit"
          className="p-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition duration-200"
        >
          Login
        </button>

        <p className="text-center text-sm text-gray-600">
          Don't have an account?{" "}
          <span
            onClick={() => setToggle((prev) => !prev)}
            className="text-blue-600 cursor-pointer font-semibold hover:underline"
          >
            Register here
          </span>
        </p>
      </form>
    </div>
  );
};

export default Login;
