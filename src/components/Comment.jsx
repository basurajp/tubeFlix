import React from "react";

const Comment = ({ data }) => {
  const { name, text, replies } = data;

  return (
    <div className="flex my-2 shadow-lg bg-gray-200 rounded-lg p-2 items-center">
      <img
        className="w-6 h-6"
        src="https://w7.pngwing.com/pngs/178/595/png-transparent-user-profile-computer-icons-login-user-avatars-thumbnail.png"
        alt="avatar"
      />

      <div className="px-3 text-sm">
        <p className="font-semibold">{name}</p>
        <p>{text} </p>
      </div>
    </div>
  );
};

export default Comment;
