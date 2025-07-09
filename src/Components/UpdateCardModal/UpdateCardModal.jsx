import React from "react";
import { CreditCard } from "lucide-react";
import useCardsStore from "../../Hook/useCardsStore";
import { useState } from "react";

function UpdateCardModal({ cardId }) {
  const [isOpen, setIsOpen] = useState(false);
  const [inputName, setInputName] = useState(cardId.name);
  const [inputBalance, setInputBalance] = useState(cardId.balance);
  const { updateName } = useCardsStore();
  const { updateBalance } = useCardsStore();
  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div>
        <button
          onClick={toggleModal}
          className=" h-fit w-fit bg-violet-300 cursor-pointer rounded-2xl text-gray-800 font-medium hover:bg-violet-400 px-4 py-2 mt-10"
        >
          Update Card
        </button>
      </div>
      {isOpen && (
        <div className="absolute flex flex-col items-center justify-between top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  w-[600px] h-fit min-h-[400px] rounded-2xl bg-gray-50 p-6">
          <div className="h-fit w-full rounded-lg flex flex-col items-center gap-1">
            <div className=" flex justify-center  rounded-4xl bg-black w-fit h-fit p-2">
              <CreditCard color="white" size={20} />{" "}
            </div>
            <h1 className="font-semibold text-gray-800 pt-1"> Add New Card</h1>
            <p className="px-10 text-gray-500 font-light text-sm">
              Update your gift card details here to easily track your balance
              <br />
              <span className="text-center block">
                and keep your digital funds organized
              </span>
            </p>
          </div>
          <div className="h-[200px] w-full bg-gray-200 rounded-lg mt-2 ">
            <img
              src={cardId.image}
              alt=""
              className="object-contain h-full w-full bg-gray-50"
            />
          </div>
          <div className="h-fit w-full gap-2 rounded-lg mt-4 flex flex-col">
            <label className="text-gray-600 pl-2 font-normal">
              Your gift Card Brand
            </label>
            <div className="border-1 border-gray-300 rounded-xl px-3 py-2 bg-gray-200 cursor-not-allowed">
              {cardId.brand}
            </div>
            <label className="text-gray-600 pl-2 font-normal">
              Enter the name of your card
            </label>
            <input
              value={inputName}
              onChange={(e) => {
                setInputName(e.target.value);
              }}
              type="text"
              className="border-gray-300 pl-3 border-1 rounded-xl w-full h-10 "
            />
            <label className="text-gray-600 pl-2 font-normal">
              The card code
            </label>
            <div className="border-gray-300 pl-3 border-1 rounded-xl w-full h-10 flex items-center bg-gray-200 cursor-not-allowed">
              {cardId.code}
            </div>
            <label className="text-gray-600 pl-2 font-normal">
              The card Pin
            </label>
            <div className="border-gray-300 pl-3 border-1 rounded-xl w-full h-10 flex items-center bg-gray-200 cursor-not-allowed">
              {cardId.pin}
            </div>
            <label className="text-gray-600 pl-2 font-normal">
              Enter the Balance
            </label>
            <input
              value={inputBalance}
              onChange={(e) => setInputBalance(e.target.value)}
              type="number"
              className="border-gray-300 pl-3 border-1 rounded-xl w-full h-10 "
            />
          </div>

          <div className="h-fit w-full gap-2 rounded-lg mt-6 flex justify-between p-2">
            <button
              className=" flex text-gray-600 border-1 border-gray-400  h-10 w-fit hover:cursor-pointer font-medium px-3 py-2 rounded-lg hover:bg-gray-200 cursor-pointer items-center"
              onClick={toggleModal}
            >
              Cancel
            </button>
            <button
              onClick={() => {
                updateName(cardId.id, inputName);
                updateBalance(cardId.id, inputBalance);
                toggleModal();
              }}
              className=" flex bg-blue-600 border-1 border-blue-700 text-amber-50 h-10 w-fit  hover:bg-blue-500 hover:border-blue-500 hover:cursor-pointer font-medium px-3 py-2 rounded-lg items-center"
            >
              Update card
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default UpdateCardModal;
