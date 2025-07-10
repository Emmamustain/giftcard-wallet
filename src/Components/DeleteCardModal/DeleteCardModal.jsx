import React from "react";
import { useState } from "react";
import useCardsStore from "../../Hook/useCardsStore";
import { Trash2Icon } from "lucide-react";

function DeleteCardModal({ nameCard, idCard }) {
  const [isOpen, setIsOpen] = useState(false);
  const { deleteCard } = useCardsStore();
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
          <div className="font-light text-gray-600 bg-violet-100 border-1 border-violet-200 rounded-lg flex items-center h-[50px] w-fit p-4">
            {`Are you sure you want to delete the ' ${nameCard} ' card ?`}
          </div>
          <div className="h-fit w-full gap-2 rounded-lg flex justify-between p-2">
            <button
              className=" flex text-gray-600 border-1 border-gray-400  h-10 w-fit cursor-pointer font-medium px-3 py-2 rounded-lg hover:bg-gray-200 items-center"
              onClick={toggleModal}
            >
              Cancel
            </button>
            <button
              className="flex  bg-violet-200 border-1 border-violet-300 hover:bg-violet-300 hover:text-violet-800 text-violet-500 hover:border-violet-300  rounded-lg cursor-pointer font-medium px-3 py-2 items-center "
              onClick={() => {
                console.log(idCard);
                deleteCard(idCard);
              }}
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
