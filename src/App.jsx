
import React, { useState } from "react";
import Login from "./componant/login.jsx";
import Singup from "./componant/singup.jsx";
import Home from "./componant/Home.jsx";

function App() {
  const [toggle, setToggle] = useState(true);

  const [userData, setUsetData] = useState([]);

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="min-h-screen w-full bg-gray-300 text-black">
      {isLoggedIn ? (
        <div className="min-h-screen w-full">
          <Home
            userData={userData}
            setToggle={setToggle}
            setIsLoggedIn={setIsLoggedIn}
            setUsetData={setUsetData}
          />
        </div>
      ) : (
        <div className="flex min-h-screen w-full items-center justify-center p-10 ">
          <div className="w-full max-w-md">
            {toggle ? (
              <Login
                 userData={userData}
                 setToggle={setToggle}
                 setIsLoggedIn={setIsLoggedIn}
              />
            ) : (
              <Singup
                setToggle={setToggle}
                setUsetData={setUsetData}
              />
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
