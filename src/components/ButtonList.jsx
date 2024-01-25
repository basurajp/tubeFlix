import React from "react";

const ButtonList = () => {
  const btntext = [
    "all",
    "music",
    "live",
    "comedy clubs",
    "java script",
    "Drama",
    "all",
    "music",
    "live",
    "comedy clubs",
    "java script",
    "Drama",
    "all",
    "music",
    "live",
    "comedy clubs",
    "java script",
    "Drama",
  ];

  return (
    <div className="w-full h-[4vh] lg:h-[10vh] px-2 py-1 overflow-x-auto whitespace-nowrap">
      {btntext.map((item, index) => (
        <button key={index} className="text-sm bg-gray-200 font-semibold px-2 py-1 rounded-lg ml-2">
          {item}
        </button>
      ))}
    </div>
  );
};

export default ButtonList;
