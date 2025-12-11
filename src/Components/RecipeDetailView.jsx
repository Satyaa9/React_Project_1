import React from "react";
import { useParams } from "react-router-dom";
import useFetch, { API_URL } from "./useFetch";
import { Loader } from "lucide-react";

const RecipeDetailView = () => {
  const { id } = useParams();
  const { data, loading, error } = useFetch(`${API_URL}lookup.php?i=${id}`);

  // if (loading)
  //   return (s
  //     <div className="text-center p-8 text-gray-300">
  //       <Loader className="animate-spin inline-block mr-2 text-blue-400" />
  //       Loading Data...
  //     </div>
  //   );

  // if (error)
  //   return (
  //     <div className="text-center p-8 text-red-400">
  //       Error loading recipe details.
  //     </div>
  //   );

  // const meal = data?.meals?.[0];

  // if (!meal) {
  //   return (
  //     <div className="text-center text-gray-400 p-4">No recipe found.</div>
  //   );
  // }

  // const ingredients = [];

  // for (let i = 1; i <= 20; i++) {
  //   const ingredient = meal[`strIngredient${i}`];
  //   const measure = meal[`strMeasure${i}`];

  //   if (ingredient && ingredient.trim()) {
  //     ingredients.push({
  //       ingredient: ingredient.trim(),
  //       measure: measure ? measure.trim() : "",
  //     });
  //   }
  // }

  return (
    <div >
      
    </div>
  );
};

export default RecipeDetailView;
