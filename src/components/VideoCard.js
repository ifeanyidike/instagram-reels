import React, { useRef, useState } from "react";
import VideoHeader from "./VideoHeader";
import VideoFooter from "./VideoFooter";
import "./VideoCard.css";

const VideoCard = ({ src, channel, song, likes, shares, avatarSrc }) => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const videoRef = useRef(null);

  const onVideoPress = () => {
    if (isVideoPlaying) {
      //stop video
      videoRef.current.pause();
      setIsVideoPlaying(false);
    } else {
      //play video
      videoRef.current.play();
      setIsVideoPlaying(true);
    }
  };
  return (
    <div className="videoCard">
      <VideoHeader />

      <video
        ref={videoRef}
        onClick={onVideoPress}
        className="videoCard__player"
        src={src}
        alt=""
        loop
      />

      <VideoFooter
        channel={channel}
        likes={likes}
        shares={shares}
        avatarSrc={avatarSrc}
        song={song}
      />
    </div>
  );
};

export default VideoCard;
