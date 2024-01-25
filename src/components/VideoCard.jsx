import React from 'react'

const VideoCard = () => {
  return (
    <div className="w-full lg:w-[25%]  bg-zinc-100 my-2 p-2">
      <img src="" alt="" className="w-full h-[15vh] lg:h-[25vh]" />
      <div className="">
        <div className="bg-zinc-200 w-full flex items-start my-2 py-2 px-1">
            <img src="" alt="" className=" rounded-full h-8 w-8 bg-red-300 " />
            <h1 className="text-sm font-semibold ml-2"> this is titl of video </h1>
        </div>
      </div>
    </div>
  )
}

export default VideoCard