import Card from "../Card/Card";

import useCardsStore from "../../Hook/useCardsStore";

function FavoriteCards() {
  const { cards } = useCardsStore();
  return (
    <div className="w-full mt-[45px]">
      <h1 className="pl-2 text-gray-600 font-semibold text-lg">
        Favorite Giftcards
      </h1>
      <div className="flex w-full border-1 border-gray-200 rounded-2xl mt-2 gap-4 bg-gray-100 p-4">
        {cards
          .filter((card) => card.favorite === true)
          .map((card) => (
            <Card
              key={card.id}
              logo={card.image}
              id={card.id}
              favorite={card.favorite}
            />
          ))}
      </div>
    </div>
  );
}

export default FavoriteCards;
