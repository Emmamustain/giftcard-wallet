import React from "react";
import Category from "../Category/Category";
import { categories } from "../../data/categories";

function Categories() {
  return (
    <div className="flex items-center w-full gap-4 flex-wrap mt-2">
      {categories.map((category) => (
        <Category key={category.id} category={category.category} />
      ))}
    </div>
  );
}

export default Categories;
