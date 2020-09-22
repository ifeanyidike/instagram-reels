import React, { useState, useEffect } from "react";
import "./App.css";
import VideoCard from "./components/VideoCard";
import db from "./firebase";

function App() {
  const [reels, setReels] = useState([]);

  useEffect(() => {
    db.collection("reels").onSnapshot((snapshot) => {
      setReels(snapshot.docs.map((doc) => doc.data()));
    });
  }, []);

  return (
    <div className="app">
      <div className="app__top">
        {/* image at the top -logo */}
        <img
          className="app__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/768px-Instagram_logo_2016.svg.png"
          alt="Instagram logo"
        />

        {/* Reels text */}
        <h1>Reels</h1>
      </div>
      <div className="app__videos">
        {/* Container of apps */}
        {reels.map((reel) => (
          <VideoCard
            channel={reel.channel}
            avatarSrc={reel.avatarSrc}
            song={reel.song}
            src={reel.src}
            likes={reel.likes}
            shares={reel.shares}
          />
        ))}
        {/* <Videos /> */}
        {/* <Videos /> */}
        {/* <Videos /> */}
      </div>
    </div>
  );
}

export default App;
