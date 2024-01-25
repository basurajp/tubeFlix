import React from "react";
import VideoCard from "./VideoCard";

const VideoContainer = () => {
  return (
    <div className="lg:flex">
        <VideoCard />
        <VideoCard />
        <VideoCard />
    </div>
  );
};

export default VideoContainer;
