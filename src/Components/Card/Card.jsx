import { HeartIcon } from "lucide-react";
import React from "react";

function Card({ logoCard }) {
  console.log(logoCard);
  return (
    <div className="flex w-[350px] border-1 border-gray-200 rounded-lg h-[200px] shadow-md bg-gray-100 justify-center">
      <img
        src={`${logoCard}`}
        alt={`${logoCard} Logo Card`}
        className="rounded-lg max-w-64 object-contain "
      />
      <button className="w-fit h-fit bg-gray-200 p-1 mt-2 rounded-4xl cursor-pointer">
        <HeartIcon size={23} />
      </button>
    </div>
  );
}

export default Card;
