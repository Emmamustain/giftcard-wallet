import useCardsStore from "../../Hook/useCardsStore";
import Card from "../Card/Card";

function Cards() {
  const { cards } = useCardsStore();
  return (
    <div className="w-full mt-[45px]">
      <h1 className="pl-2 text-gray-600 font-semibold text-lg">Favorites</h1>
      <div className="flex w-full border-1 border-gray-200 rounded-2xl mt-2 gap-4 bg-gray-100 p-4">
        {cards.map((card) => (
          <Card key={card.id} logoCard={card.image} />
        ))}
      </div>
    </div>
  );
}

export default Cards;
