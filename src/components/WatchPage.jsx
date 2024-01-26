import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { closeMenu } from "../rtk/appSlice";
import VideoCard from "./VideoCard";

const WatchPage = () => {
  const dispatch = useDispatch();
  const [searchPaermData] = useSearchParams();
  const videoid = searchPaermData.get("v");

  useEffect(() => {
    dispatch(closeMenu());
  }, []);

  return (
    <div >
      <iframe className="w-[45vh] h-[25vh] lg:h-[60vh] lg:w-[60vw] px-2 rounded-2xl mt-2" 
        src={`https://www.youtube.com/embed/${videoid}?list=RDGMEM916WJxafRUGgOvd6dVJkeQVME8rpY2FwKkY`}
        title="Gaadi Nuye Chalegi (Official Video) R Maan | Komal C | Billa Sonipat Ala | New Haryanvi Song 2023"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullscreen
      ></iframe>
    </div>
  );
};

export default WatchPage;
