import React from "react";

const SideBar = () => {
  const menuItem = [
    "Home",
    "Shorts",
    "Subscription",
    "Your Channel",
    "History",
    "Your videos",
    "Watch later",
  ];

  return (
    <div className="w-[35%] lg:w-[20%] h-[100vh] shadow-lg ">
      <ul className="m-2">
        {menuItem.map((item, index) => (
          <li className="text-sm font-semibold px-6 py-2 hover:bg-zinc-100 rounded-md text-nowrap">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SideBar;
