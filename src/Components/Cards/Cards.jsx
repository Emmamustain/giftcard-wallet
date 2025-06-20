import Card from "../Card/Card";

const logoCards = ["Carrefour.png", "Monoprix.png"];
function Cards() {
  return (
    <div className="w-full mt-[45px]">
      <h1 className="pl-2 text-gray-600 font-semibold text-lg">Favorites</h1>
      <div className="flex w-full border-1 border-gray-200 rounded-2xl mt-2 gap-4 bg-gray-100 p-4">
        {logoCards.map((logoCard) => (
          <Card key={logoCard} logoCard={logoCard} />
        ))}
      </div>
    </div>
  );
}

export default Cards;
