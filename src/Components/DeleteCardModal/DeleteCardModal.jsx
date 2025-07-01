import React from "react";
import { useState } from "react";
import deleteCard from "../../Hook/useCardsStore";
import { Trash2Icon } from "lucide-react";

function DeleteCardModal({ theCard }) {
  const [isOpen, setIsOpen] = useState(false);
  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div
        className="cursor-pointer flex items-center hover:text-gray-500"
        onClick={toggleModal}
      >
        {" "}
        <Trash2Icon size={18} className="mr-2" />
        Delete Card
      </div>
      {isOpen && (
        <div className="absolute flex flex-col items-center justify-between top-32 left-1/2 -translate-x-1/2 w-[600px] h-fit min-h-[260px] rounded-2xl bg-gray-50 p-6">
          <div className="text-2xl font-bold text-gray-900">Delete Card</div>
          <div className="font-light text-gray-600 bg-red-100 border-1 border-red-200 rounded-lg flex items-center h-[50px] w-fit p-4">
            {`Are you sure you want to delete the ${theCard} card ?`}
          </div>
          <div className="h-fit w-full gap-2 rounded-lg flex justify-between p-2">
            <button
              className=" flex text-gray-600 border-1 border-gray-400  h-10 w-fit cursor-pointer font-medium px-3 py-2 rounded-lg hover:bg-gray-200 items-center"
              onClick={toggleModal}
            >
              Cancel
            </button>
            <button
              className="flex  bg-orange-300 border-1 border-gray-400 cursor-pointer font-medium px-3 py-2 items-center "
              onClick={deleteCard}
            >
              Delete
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default DeleteCardModal;
