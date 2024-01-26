import React, { useEffect } from "react";
import VideoCard, { adVideoCard } from "./VideoCard";
import { YOUTUBE_VIDEO_API } from "../utils/costant";
import { useDispatch, useSelector } from "react-redux";
import { addYoutubeVideo } from "../rtk/videoSlice";
import { Link } from "react-router-dom";

const VideoContainer = () => {
  const dispatch = useDispatch();
  const videoList = useSelector((store) => store.ytVideo.videoList);

  const getVideos = async () => {
    const data = await fetch(YOUTUBE_VIDEO_API);
    const { items } = await data.json();
    dispatch(addYoutubeVideo(items));
  };

  useEffect(() => {
    getVideos();
  }, []);

// const adVideoCardReturenCompenent = adVideoCard(VideoCard)

  return (
    videoList && (
      <div className="lg:flex lg:flex-wrap">
        {/* <adVideoCardReturenCompenent videoData={videoList[1]} /> */}
        {videoList.map((videoData,index) => (
          
          <VideoCard key={videoData.id} videoData={videoData} />
        ))}
      </div>
    )
  );
};

export default VideoContainer;
