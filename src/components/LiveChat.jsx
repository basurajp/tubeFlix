import React, { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../rtk/chatSlice";
import { generateRandomString, getRandomName } from "../utils/helper";

const LiveChat = () => {
  const dispatch = useDispatch();
  const chatMesage = useSelector((store) => store.chat.messages);
  const [liveMessage, setliveMessage] = useState("");

  useEffect(() => {
    const i = setInterval(() => {
      dispatch(
        addMessage({
          name: getRandomName(),
          message: generateRandomString(),
        })
      );
    }, 2000);

    return () => {
      clearInterval(i);
    };
  }, []);

  return (
    <>
      <div className="m-2 p-2 border w-[95%] lg:w-[500px] h-[600px] lg:h-[60vh] border-black bg-gray-100 rounded-lg shadow-lg overflow-y-auto flex flex-col-reverse ">
        <div className="">
          {chatMesage.map((chat, index) => (
            <ChatMessage key={index} name={chat.name} message={chat.message} />
          ))}
        </div>
      </div>
      <form
        className="border border-black flex px-2 mx-2 rounded-lg  "
        onClick={(e) => {
          e.preventDefault();
          dispatch(addMessage({
            name:'Basuraj',
            message:liveMessage
          }))
          setliveMessage('')
        }}
      >
        <input
          className="w-[90%] p-2 mx-2  outline-none "
          type="text"
          placeholder="enter your chat "
          value={liveMessage}
          onChange={(e) => setliveMessage(e.target.value)}
        />

        <button
          className="px-2 bg-green-300 mx-2 my-2 rounded-lg"
          type="submit"
        >
          send
        </button>
      </form>
    </>
  );
};

export default LiveChat;
