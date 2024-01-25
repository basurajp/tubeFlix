import React from "react";
import ButtonList from "./ButtonList";
import VideoContainer from "./VideoContainer";

const MianConatiner = () => {
  return (
    <div className="w-[65%] lg:w-[80%] h-[100vh] lg:m-4 ">
      <ButtonList />
      <VideoContainer />
    </div>
  );
};

export default MianConatiner;
