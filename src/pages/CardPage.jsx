import Header from "../Components/Header/Header.jsx";
import SearchBar from "../Components/SearchBar/SearchBar.jsx";
import { Trash2Icon, HistoryIcon } from "lucide-react";
import { useParams } from "react-router";
import useCardStore from "../Hook/useCardsStore.jsx";
import DeleteCardModal from "../Components/DeleteCardModal/DeleteCardModal.jsx";

function CardPage() {
  let { cardId } = useParams();
  const { getCardById } = useCardStore();
  const selectedCard = getCardById(cardId);
  console.log(selectedCard);
  return (
    <>
      <Header />
      <div className="max-w-[800px] w-full p-2 justify-self-center">
        <div className="block md:hidden">
          <SearchBar />
        </div>
        {/* {cardId} */}
        <div className=" h-fit w-fit bg-orange-300 cursor-pointer rounded-2xl text-gray-800 font-medium hover:text-orange-400 hover:bg-orange-200 px-4 py-2 mt-6">
          Update Card
        </div>
        <div className="h-[400px] w-full flex flex-col p-4 justify-between bg-gray-200 rounded-2xl mt-2 overflow-hidden ">
          <div className="flex justify-between ">
            <div className="flex justify-between h-fit w-fit">
              <div className="h-10 w-fit  ">
                <img
                  src={selectedCard.image}
                  alt=""
                  className="object-contain h-full w-full bg-gray-50"
                />
              </div>
              <div className="font-semibold"> {selectedCard.brand}</div>
            </div>
            <div className="font-bold text-orange-400 text-2xl">
              {" "}
              {selectedCard.name}
            </div>
            <div className="text-gray-900 font-semibold font-mono">
              {selectedCard.balance}€
            </div>
          </div>

          <div className="h-[150px] w-full bg-white flex justify-center items-center">
            bar code
          </div>
          <div className=" px-4 py-2 bg-gray-900 rounded-xl hover:bg-gray-700 cursor-pointer text-amber-50 flex justify-center font-mono items-center">
            {selectedCard.code}
          </div>
        </div>
        <div className=" h-fit w-full flex justify-between text-gray-600 font-medium  mt-4 px-4">
          <div className="cursor-pointer flex items-center hover:text-gray-500">
            <HistoryIcon size={18} className="mr-2" />
            Card History
          </div>

          <DeleteCardModal theCard={selectedCard.name} />
        </div>
      </div>
    </>
  );
}

export default CardPage;
