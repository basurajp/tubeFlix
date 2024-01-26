import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const SideBar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpenFlag);

  const menuItem = [
    "Home",
    "Shorts",
    "Subscription",
    "Your Channel",
    "History",
    "Your videos",
    "Watch later",
  ];
  if (!isMenuOpen) return null;

  return (
    <div className="w-[35%] lg:w-[20%] h-[100vh] shadow-lg absolute bg-white">
      <ul className="m-2">
        {menuItem.map((item, index) => (
          <Link to={"/"} key={index}>
            <li className="text-sm font-semibold px-6 py-2 hover:bg-zinc-100 rounded-md text-nowrap">
              {item}
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default SideBar;
