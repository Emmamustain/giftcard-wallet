import Card from "../Card/Card";

import useCardsStore from "../../Hook/useCardsStore";

function Cards({ favoritesOnly }) {
  const { cards } = useCardsStore();
  return (
    <div className="w-full mt-[45px]  ">
      <h1 className="pl-2 text-gray-600 font-semibold text-lg">
        {favoritesOnly ? "Favorites" : "All GiftCards"}
      </h1>
      <div className="flex w-full flex-wrap items-center border-1 border-gray-200 rounded-2xl mt-2 gap-4 bg-gray-100 p-4">
        {cards
          .filter((card) => card.favorite === favoritesOnly)
          .map((card) => (
            <Card logo={card.image} id={card.id} favorite={card.favorite} />
          ))}
      </div>
    </div>
  );
}

export default Cards;
