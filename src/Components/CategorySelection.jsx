import React from "react";
import { Utensils } from "lucide-react";
import { Link } from "react-router-dom";

function CategorySelection({ filterByCategory }) {
  const featuredCategory = [
    "Chicken",
    "Dessert",
    "Seafood",
    "Vegetarian",
    "Breakfast",
    "Pasta",
    "Goat",
    "Pork",
    "Lamb",
  ];

  return (
    <section className="mt-20">

      <h2
        className="text-3xl font-extrabold text-gray-100 mb-8 tracking-tight
        border-l-4 border-blue-500 pl-4 flex items-center gap-3"
      >
        <Utensils className="w-6 h-6 text-blue-400" />
        Primary Ingredient
      </h2>


      <div
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5
        gap-6"
      >
        {featuredCategory.map((cat, index) => (
          <Link
            key={index}
            to={`/search/${cat}`}
            onClick={() => filterByCategory(cat)}
            className="
              group relative overflow-hidden
              rounded-2xl border border-gray-700
              bg-gradient-to-br from-gray-900 to-gray-800
              p-5 text-center font-semibold text-gray-100
              shadow-lg shadow-black/40
              transition-all duration-300
              hover:border-blue-500 hover:shadow-blue-500/30
              hover:-translate-y-1 hover:scale-[1.04]
              active:scale-95
            "
          >
          
            <span
              className="absolute inset-0 bg-blue-500/10 opacity-0
              group-hover:opacity-100 transition duration-300"
            />

           
            <span className="relative z-10 text-lg tracking-wide">
              {cat}
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default CategorySelection;
