import React from "react";
import Comment from "./Comment";

const commentData = [
  {
    name: "basuraj",
    text: "lorem isuen is a comment lorem",
    replies: [
      {
        name: "basuraj",
        text: "lorem isuen is a comment lorem",
        replies: [
          {
            name: "basuraj",
            text: "lorem isuen is a comment lorem",
            replies: [],
          },
        ],
      },
      {
        name: "basuraj",
        text: "lorem isuen is a comment lorem",
        replies: [
          {
            name: "basuraj",
            text: "lorem isuen is a comment lorem",
            replies: [
              {
                name: "basuraj",
                text: "lorem isuen is a comment lorem",
                replies: [
                  {
                    name: "basuraj",
                    text: "lorem isuen is a comment lorem",
                    replies: [],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        name: "basuraj",
        text: "lorem isuen is a comment lorem",
        replies: [
          {
            name: "basuraj",
            text: "lorem isuen is a comment lorem",
            replies: [
              {
                name: "basuraj",
                text: "lorem isuen is a comment lorem",
                replies: [
                  {
                    name: "basuraj",
                    text: "lorem isuen is a comment lorem",
                    replies: [
                      {
                        name: "basuraj",
                        text: "lorem isuen is a comment lorem",
                        replies: [],
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "basuraj",
    text: "lorem isuen is a comment lorem",
    replies: [],
  },
  {
    name: "basuraj",
    text: "lorem isuen is a comment lorem",
    replies: [],
  },
  {
    name: "basuraj",
    text: "lorem isuen is a comment lorem",
    replies: [],
  },
  {
    name: "basuraj",
    text: "lorem isuen is a comment lorem",
    replies: [],
  },
];

const Commentlist = ({ comment }) => {
  return (
    <>
      {comment.map((comment, index) => (
        <div key={index}>
          <Comment  data={comment} />
          <div className="pl-4 border-l-2 ml-5">
          <Commentlist comment={comment.replies} />
          </div>
        </div>
      ))}
    </>
  );
};

const CommentConatiner = () => {
  return (
    <div className="m-2 p-2">
      <h1 className="text-xl font-bold">Comments : </h1>
      <Commentlist comment={commentData} />
    </div>
  );
};

export default CommentConatiner;
