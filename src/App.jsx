import "./App.css";
import Cards from "./Components/Cards/Cards.jsx";
import Categories from "./Components/Categories/Categories.jsx";
import Header from "./Components/Header/Header.jsx";
import SearchBar from "./Components/SearchBar/SearchBar.jsx";
import DiscoverCards from "./Components/DiscoverCards/DiscoverCards.jsx";

import AddCardModal from "./Components/AddCardModal/AddCardModal.jsx";

function App() {
  return (
    <>
      <Header />
      <div className="p-3">
        <div className="block md:hidden">
          <SearchBar />
        </div>
        <Categories />
        <AddCardModal />
        <Cards />
        <DiscoverCards />
      </div>
    </>
  );
}

export default App;
