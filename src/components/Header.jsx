import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../rtk/appSlice";
import { Link, json } from "react-router-dom";
import { YOUTUBE_SEARCH_SUGGESTION } from "../utils/costant";

const Header = () => {
  const [searchQuery, setsearchQuery] = useState("");
  const [searchSuggestion, setsearchSuggestion] = useState(null);
  const [hideSearchSuggestion, sethideSearchSuggestion] = useState(false);
  const dispatch = useDispatch();
 

  const searchCache = useSelector((store) => store.search);

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  const getSearchSuggestion = async () => {
    try {
      const data = await fetch(YOUTUBE_SEARCH_SUGGESTION + searchQuery);
      const json = await data.json();
      setsearchSuggestion(json[1]);
      dispatch(
        cacheResult({
          [searchQuery]: json[1],
        })
      );
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setsearchSuggestion(searchCache[searchQuery]);
      } else getSearchSuggestion();
    }, 200);

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  return (
    <div className="relative">
      <div
        className="w-full flex   items-center mt-2 py-1 shadow-lg lg:h-16
    "
      >
        <h1
          className="text-2xl font-semibold mx-2 cursor-pointer lg:ml-10 lg:mr-6"
          onClick={toggleMenuHandler}
        >
          <i className="ri-menu-line"></i>
        </h1>

        <div className="w-full flex lg:justify-between">
          <input
            className="w-[80%] lg:w-[100%] mx-2 px-2 lg:px-3 lg:py-2 py-1   rounded-lg outline-none border"
            type="text"
            value={searchQuery}
            placeholder="Search here"
            onChange={(e) => setsearchQuery(e.target.value)}
            onFocus={() => sethideSearchSuggestion(true)}
            onBlur={() => sethideSearchSuggestion(false)}
          />
          <button className="text-2xl font-bold lg:mr-10">
            <i className="ri-search-line cursor-pointer"></i>
          </button>
        </div>
      </div>
      <div className="absolute left-12 lg:left-24 lg:top-[51px] lg:w-[70%] lg:max-h-[30vh]  rounded-lg shadow-lg z-10 w-[32vh] max-h-[20vh] bg-white overflow-y-auto border border-gray-300  ">
        <ul className="">
          {hideSearchSuggestion &&
            searchSuggestion &&
            searchSuggestion.map((item, index) => (
              <li
                key={index}
                className="py-1 px-2 hover:bg-gray-200 rounded-lg  "
              >
                {item}
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default Header;
