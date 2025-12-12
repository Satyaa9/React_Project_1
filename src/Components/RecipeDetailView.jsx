import React from "react";
import { useParams } from "react-router-dom";
import useFetch, { API_URL } from "./useFetch";
import { Loader } from "lucide-react";
import { Link } from "react-router-dom";
import { ChevronLeft } from "lucide-react";
import { Utensils } from "lucide-react";

const RecipeDetailView = () => {
  const { id } = useParams();
  const { data, loading, error } = useFetch(`${API_URL}lookup.php?i=${id}`);

  if (loading)
    return (
      <div className="text-center p-8 text-gray-300">
        <Loader className="animate-spin inline-block mr-2 text-blue-400" />
        Loading Data...
      </div>
    );

  if (error)
    return (
      <div className="text-center p-8 text-red-400">
        Error loading recipe details.
      </div>
    );

  const meal = data?.meals?.[0];

  if (!meal) {
    return (
      <div className="text-center text-gray-400 p-4">No recipe found.</div>
    );
  }

  const ingredients = [];

  for (let i = 1; i <= 20; i++) {
    const ingredient = meal[`strIngredient${i}`];
    const measure = meal[`strMeasure${i}`];

    if (ingredient && ingredient.trim()) {
      ingredients.push({
        ingredient: ingredient.trim(),
        measure: measure ? measure.trim() : "",
      });
    }
  }

  return (
    <main className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Link
        to={"/"}
        className="text-yellow-400 hover:text-yellow-300 flex items-center
      mb-6 font-medium transition text-lg group"
      >
        <ChevronLeft className="w-6 h-6 mr-1 transition " />
        Back To HomePage
      </Link>

      <div
        className="bg-gray-900 p-6 md:p-12 rounded-3xl shadow-2xl shadow-black/70 
      border border-gray-800"
      >
        <div className="lg:flex lg:space-x-12 ">
          <div className="lg:w-1/2 mb-8 lg:mb-0 ">
            <h1
              className="text-4xl font-black text-gray-100 mb-6 leading-tight 
           "
            >
              {meal?.strMeal}
            </h1>
            <img
              src={meal.strMealThumb}
              alt=""
              className="w-[450px] h-[450px]
            rounded-xl shadow-2xl shadow-black/50 object-cover border-4 border-gray-800
            ring-3 ring-blue-500/50 mx-0"
            />
          </div>

          <div
            className="lg:w-1/2 bg-gray-800 shadow-inner shadow-black/30
          border border-gray-700"
          >
            <h2
              className="flex text-3xl pd-3 font-bold text-yellow-400 m-6 items-center
            border-b border-gray-700 p-3"
            >
              <Utensils className="w-7 h-7 mr-3 text-blue-500" />
              Key Ingredients
            </h2>

            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4 list-none p-0">
              {ingredients.map((item, index) => (
                <li
                  key={index}
                  className="flex
            items-start text-gray-300 text-base"
                >
                  <span className="text-blue-400 font-extrabold text-lg mr-2 ml-6 shrink-0">
                    {"›"}
                  </span>
                  <span className="font-semibold text-white mr-1">
                    {item.measure}
                  </span>{" "}
                  {item.ingredient}
                </li>
              ))}
            </ul>

              <div className="mt-8 pd-4 border-t border-gray-700">
                <div className="text-lg text-gray-400 space-x-3 flex flex-wrap gap-y-2">
                <span className="bg-blue-600 text-center mt-6 ml-5 text-white px-4 py-1.5
                rounded-full font-semibold text-sm shadow-md">
                  {meal.strCategory}
                </span>

                <span className="bg-green-600 text-center mt-6 ml-5 text-white px-4 py-1.5
                rounded-full font-semibold text-sm shadow-md">
                  {meal.strArea}
                </span>

                </div>
              </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default RecipeDetailView;
