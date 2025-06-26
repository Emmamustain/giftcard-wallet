import Card from "../Card/Card";

import useCardsStore from "../../Hook/useCardsStore";

function DiscoverCards() {
  const { cards } = useCardsStore();
  return (
    <div className="w-full mt-[45px]">
      <h1 className="pl-2 text-gray-600 font-semibold text-lg">
        All Giftcards
      </h1>
      <div className="flex w-full border-1 border-gray-200 rounded-2xl mt-2 gap-4 bg-gray-100 p-4">
        {cards
          .filter((card) => card.favorite === false)
          .map((card) => (
            <Card key={card.id} logo={card.image} id={card.id} />
          ))}
      </div>
    </div>
  );
}

export default DiscoverCards;
