import React from "react";
import Category from "../Category/Category";

const categories = [
  "Entertainements",
  "Restaurants",
  "Home",
  "Electronics",
  "Beauty",
];
function Categories() {
  return (
    <div className="flex items-center w-full gap-4 flex-wrap mt-2">
      {categories.map((category) => (
        <Category key={category} category={category} />
      ))}
    </div>
  );
}

export default Categories;
