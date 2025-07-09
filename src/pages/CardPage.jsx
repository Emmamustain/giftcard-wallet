import Header from "../Components/Header/Header.jsx";
import SearchBar from "../Components/SearchBar/SearchBar.jsx";
import { Trash2Icon, HistoryIcon } from "lucide-react";
import { useParams } from "react-router";
import useCardStore from "../Hook/useCardsStore.jsx";
import DeleteCardModal from "../Components/DeleteCardModal/DeleteCardModal.jsx";
import UpdateCardModal from "../Components/UpdateCardModal/UpdateCardModal.jsx";

function CardPage() {
  let { cardId } = useParams();
  const { getCardById } = useCardStore();
  const selectedCard = getCardById(cardId);
  console.log(selectedCard);
  const codeCopied = selectedCard.code;
  async function copyToClipBoard(copyCode) {
    try {
      await navigator.clipboard.writeText(copyCode);
      console.log(copyCode);
      alert("code bar copied successfully!");
    } catch (error) {
      console.error("Failed to copy text", error);
    }
  }

  return (
    <>
      <Header />
      <div className="max-w-[800px] w-full p-2 justify-self-center">
        <div className="block md:hidden">
          <SearchBar />
        </div>
        {/* {cardId} */}
        <UpdateCardModal cardId={selectedCard} />
        <div className="h-[350px] w-full flex flex-col p-4 justify-between bg-gray-200 rounded-2xl mt-6 overflow-hidden ">
          <div className="flex justify-between ">
            <div className="flex justify-between gap-2 h-fit w-[100px] items-center">
              <div className="h-10 w-fit  ">
                <img
                  src={selectedCard.image}
                  alt=""
                  className="object-contain h-full w-full bg-gray-50"
                />
              </div>
              <div className="font-semibold"> {selectedCard.brand}</div>
            </div>
            <div className="font-bold text-violet-600 text-2xl">
              {" "}
              {selectedCard.name}
            </div>
            <div className="text-gray-900 font-semibold font-mono w-[100px]  flex justify-end">
              {selectedCard.balance}€
            </div>
          </div>
          <div className="h-[100px] w-full flex justify-center items-center libre-barcode-39-regular">
            {selectedCard.code}
          </div>

          <button
            onClick={() => {
              copyToClipBoard(codeCopied);
            }}
            className=" px-4 py-3 text-lg bg-gray-900 rounded-xl hover:bg-gray-700 cursor-pointer text-amber-50 flex justify-center font-mono items-center"
          >
            {selectedCard.code}
          </button>
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
