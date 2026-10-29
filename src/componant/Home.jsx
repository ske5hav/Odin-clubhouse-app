
import React, { useState } from "react";
import "./Home.css";

const Home = ({ userData, setToggle, setIsLoggedIn }) => {
  const [showJoin, setShowJoin] = useState(false);
  const [muserData, setmUsetData] = useState([]);

  const [fromData, setFromData] = useState({
    name: "",
    id: "",
    title: "",
    massage: "",
  });

  const joinbtn = () => {
    setShowJoin(true);
  };

  const showMessages = () => {
    setShowJoin(false);
  };

  // Sabhi form fields ko handle karega
  const handledata = (e) => {
    const { name, value } = e.target;

    setFromData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Form submit karne par
  const handleSubmit = (e) => {
    e.preventDefault();

    setmUsetData((prevUsers) => [...prevUsers, fromData]);

    // Saare fields empty karo
    setFromData({
      name: "",
      id: "",
      title: "",
      massage: "",
    });

    // Form band karo
    setShowJoin(false);
  };

  return (
    <main>
      <nav>
        <h1>LOGO</h1>

        {userData.map((user, index) => (
          <h1 key={index}>
            WELCOME TO ODIN CLUBHOUSE {user.name}
          </h1>
        ))}

        <button
          onClick={() => {
            setIsLoggedIn(false);
            setToggle(true);
          }}
        >
          Logout
        </button>
      </nav>

      <div className="menu">
        <button onClick={showMessages}>Messages</button>
        <button onClick={joinbtn}>Join the Club</button>
      </div>

      <section>
        <div className="massage-s">
          <h1>Messages Page</h1>
          <p>Welcome to Odin Clubhouse!</p>

          <div className="messages-container">
            <div className="card">
              <h1>User:</h1>
              <h3>Name:</h3>
              <p>ID:</p>
              <p>Message: Welcome to Odin Clubhouse!</p>
            </div>

            {muserData.map((muser, index) => (
              <div className="card" key={index}>
                <h1>User: {muser.name}</h1>
                <h3>Title: {muser.title}</h3>
                <p>ID: {muser.id}</p>
                <p>Message: {muser.massage}</p>
              </div>
            ))}
          </div>
        </div>

        <div className={`join-s ${showJoin ? "" : "hide"}`}>
          <div className="join-header">
            <h2>Join the Club</h2>
            <p onClick={showMessages}>X</p>
          </div>

          <form onSubmit={handleSubmit}>
            <label>Username</label>
            <input
              type="text"
              name="name"
              placeholder="Enter username"
              value={fromData.name}
              onChange={handledata}
              required
            />

            <label>ID</label>
            <input
              type="text"
              name="id"
              placeholder="Enter ID"
              value={fromData.id}
              onChange={handledata}
              required
            />

            <label>Title</label>
            <input
              type="text"
              name="title"
              placeholder="Enter title"
              value={fromData.title}
              onChange={handledata}
              required
            />

            <label>Message</label>
            <textarea
              name="massage"
              placeholder="Write your message..."
              rows="5"
              value={fromData.massage}
              onChange={handledata}
              required
            />

            <button type="submit">Submit</button>
          </form>
        </div>
      </section>
    </main>
  );
};

export default Home;
