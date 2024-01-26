import React from "react";
import ButtonList from "./ButtonList";
import VideoContainer from "./VideoContainer";

const MianConatiner = () => {
  return (
    <div className="w-[100%] lg:w-[100%] h-[100vh] lg:m-4 mt-4 ">
      <ButtonList />
      <VideoContainer />
    </div>
  );
};

export default MianConatiner;
