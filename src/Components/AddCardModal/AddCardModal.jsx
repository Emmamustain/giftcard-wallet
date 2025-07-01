import React from "react";
import { PlusCircle, CreditCard } from "lucide-react";
import { useState } from "react";
import useCardsStore from "../../Hook/useCardsStore";
import { brands } from "../../data/brands";

function AddCardModal() {
  const [name, setName] = useState("");
  const [code, setCode] = useState("");
  const [pin, setPin] = useState("");
  const [balance, setBalance] = useState("");
  const [brand, setBrand] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const { addCard } = useCardsStore();
  const toggleModal = () => {
    setIsOpen(!isOpen);
  };
  console.log({ brand });
  const selectedBrand = brands.find((v) => v.bName === brand);
  console.log({ selectedBrand });

  return (
    <div>
      <div className="flex justify-self-end px-6 " onClick={toggleModal}>
        <button className=" flex bg-black text-amber-50 font-medium px-3 py-2 rounded-lg hover:bg-gray-700 cursor-pointer items-center">
          <PlusCircle className="pr-0.5" size={21} /> Add card
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
              Add your gift card details here to easily track your balance
              <br />
              <span className="text-center block">
                and keep your digital funds organized
              </span>
            </p>
          </div>
          <div className="h-[200px] w-full bg-gray-200 rounded-lg mt-2 ">
            {selectedBrand ? (
              <img
                src={selectedBrand.image}
                alt=""
                className="object-contain h-full w-full bg-gray-50"
              />
            ) : null}
          </div>
          <div className="h-fit w-full gap-2 rounded-lg mt-4 flex flex-col">
            <label className="text-gray-600 pl-2 font-normal">
              Select your gift Card brand
            </label>
            <select
              className="border-1 border-gray-300 rounded-xl px-3 py-2"
              name="SelectedCard"
              value={brand}
              defaultValue={"none"}
              onChange={(e) => {
                setBrand(e.target.value);
              }}
            >
              <option value="none" disabled>
                Select a card
              </option>

              {brands.map((brand) => (
                <option value={brand.bName}>{brand.bName}</option>
              ))}
            </select>
            <label className="text-gray-600 pl-2 font-normal">
              Enter the name of your card
            </label>
            <input
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
              type="text"
              className="border-gray-300 pl-3 border-1 rounded-xl w-full h-10 "
              placeholder="ex : HEMA"
            />
            <label className="text-gray-600 pl-2 font-normal">
              Enter the code
            </label>
            <input
              value={code}
              onChange={(e) => {
                setCode(e.target.value);
              }}
              type="text"
              className="border-gray-300 pl-3 border-1 rounded-xl w-full h-10 "
              placeholder="ex: 12345678"
            />
            <label className="text-gray-600 pl-2 font-normal">
              Enter the PIN
            </label>
            <input
              value={pin}
              onChange={(e) => setPin(e.target.value)}
              type="number"
              className="border-gray-300 pl-3 border-1 rounded-xl w-full h-10 "
              placeholder="ex : 1234"
            />
            <label className="text-gray-600 pl-2 font-normal">
              Enter the Balance
            </label>
            <input
              value={balance}
              onChange={(e) => setBalance(e.target.value)}
              type="number"
              className="border-gray-300 pl-3 border-1 rounded-xl w-full h-10 "
              placeholder="ex : 30.7$"
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
                addCard(brand, name, code, pin, balance, selectedBrand.image);
                toggleModal();
              }}
              className=" flex bg-blue-600 border-1 border-blue-700 text-amber-50 h-10 w-fit  hover:bg-blue-500 hover:border-blue-500 hover:cursor-pointer font-medium px-3 py-2 rounded-lg items-center"
            >
              Add card
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default AddCardModal;
