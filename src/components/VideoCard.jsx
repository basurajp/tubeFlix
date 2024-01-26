import React from "react";
import { useSelector } from "react-redux";
import { YT_CHANNELPROFILE_URL } from "../utils/costant";
import { Link } from "react-router-dom";

const VideoCard = ({ videoData }) => {
  const { url } = videoData?.snippet?.thumbnails?.medium;
  const { channelTitle } = videoData?.snippet;
  const { title } = videoData?.snippet;
  const { viewCount } = videoData?.statistics;

  return (
    <Link
      to={`/watch?v=${videoData.id}`}
      className="w-full lg:w-[30%]  lg:mx-1 lg:h-[40vh]    my-2 p-2 hover:shadow-md rounded-lg"
    >
      <img
        src={url}
        alt=""
        className="w-full h-[25vh] lg:h-[30vh] px-2 rounded-2xl "
      />
      <div className="">
        <div className=" w-full flex items-center my-2 py-1 px-1 overflow-hidden ">
          <img
            src={YT_CHANNELPROFILE_URL}
            alt=""
            className=" rounded-full h-8 w-8   "
          />
          <div className="">
            <h1 className="text-[10px] lg:text-sm font-semibold ml-2 leading-4 h-13 lg:h-[7vh]   overflow-hidden py- ">
              {title}
            </h1>
            <h5 className="text-[3vw]  ml-2 text-nowrap lg:text-[12px]">
              {channelTitle}{" "}
              <span className="font-semibold lg:text-[12px]">
                {(viewCount / 1000).toFixed()}K veiws
              </span>
            </h5>
          </div>
        </div>
      </div>
    </Link>
  );
};

export const adVideoCard = (VideoCard) => {
  return ({videoData})=>
    (
      <div className="border border-red-300 p-1 m-1 bg-zinc-500 ">
        <VideoCard videoData={videoData}/>
      </div>
    );
  
};

export default VideoCard;
