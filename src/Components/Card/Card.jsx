import React from "react";

function Card({ logoCard }) {
  console.log(logoCard);
  return (
    <div className="flex w-[350px] border-1 border-gray-200 rounded-lg h-[200px] shadow-md bg-gray-100 justify-center">
      <img
        src={`public/${logoCard}`}
        alt={`${logoCard} Logo Card`}
        className="rounded-lg max-w-64 object-contain "
      />
    </div>
  );
}

export default Card;
