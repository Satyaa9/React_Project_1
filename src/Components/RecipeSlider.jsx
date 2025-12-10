import React from "react";
import useFetch from "./useFetch";
import RecipeCard from "./RecipeCard";

const RecipeSlider = ({ title, fetchUrl }) => {
  const { data, loading, error } = useFetch(fetchUrl);
  console.log("my meal :", data?.meals);

  const meals = data?.meals || [];

 return(
  <>
  {meals.map((meal)=>(
    <div key={meal.idMeal} className="px-10 flex justify-around">
      <RecipeCard meal={meal}/>
    </div>
  ))}
  </>
 )
};

export default RecipeSlider;
