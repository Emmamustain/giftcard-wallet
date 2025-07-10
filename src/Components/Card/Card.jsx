import { HeartIcon } from "lucide-react";
import React from "react";
import useCardsStore from "../../Hook/useCardsStore";

function Card({ logo, id, favorite }) {
  const { updateFavorite } = useCardsStore();
  return (
    <a key={id} href={`card/${id}`}>
      <div className="flex w-[350px] border-1 border-gray-200 rounded-lg h-[200px] shadow-md bg-gray-100 justify-center">
        <img
          src={`${logo}`}
          alt={`${logo} Logo Card`}
          className="rounded-lg max-w-64 object-contain "
        />
        <button
          className="w-fit h-fit bg-gray-200 p-1 mt-2 rounded-4xl cursor-pointer"
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            updateFavorite(id);
          }}
        >
          <HeartIcon
            size={23}
            fill={favorite ? "red" : "transparent"}
            color={favorite ? "red" : "black"}
          />
        </button>
      </div>
    </a>
  );
}

export default Card;
