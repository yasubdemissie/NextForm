"use client";
import { deleteFeedback } from "@/ApiFunctions/serverFunc";
import { useState } from "react";
import { FaRegComment, FaTrash } from "react-icons/fa"; // Import the comment icon from react-icons

export default function Comments({ id, title, message, like }) {
  const name = title;
  const [liked, setLiked] = useState(false);
  const [numLiked, setNumLiked] = useState(like);

  const handleLike = () => {
    setLiked((value) => {
      if (value) {
        setNumLiked((num) => --num);
        return false;
      }
      setNumLiked((num) => ++num);
      return true;
    });
  };

  return (
    <div className="flex justify-start rounded-2xl my-2 flex-col w-full bg-white shadow-md px-6 py-3">
      <h2 className="text-xl font-bold text-gray-800">{name}</h2>
      <p className="text-gray-600 mt-2">{message}</p>
      <div className="flex items-center mt-4">
        <button
          onClick={handleLike}
          className="flex items-center text-gray-600 hover:text-gray-800"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 mr-1"
            fill={`${liked ? "#ff0000" : "#fff"}`}
            viewBox="0 0 24 24"
            stroke={`${liked > 0 ? "#ff0000" : "#000"}`}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
            />
          </svg>
          {numLiked}
        </button>
        <button className="flex items-center text-gray-600 hover:text-gray-800 ml-4">
          <FaRegComment className="h-6 w-6 mr-1" />
          Comment
        </button>
        <button onClick={() => deleteFeedback(id)} className="flex items-center text-gray-600 hover:text-gray-800 ml-4">
          <FaTrash style={{color: 'red', marginLeft: "350px"}} className="h-6 w-6 mr-1" />
        </button>
      </div>
    </div>
  );
}
