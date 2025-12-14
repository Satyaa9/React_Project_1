import React from "react";
import RecipeSlider from "./RecipeSlider";
import TrendingRecipe from "./TrendingRecipe";
import CategorySelection from "./CategorySelection";
import { API_URL } from "./useFetch";
const HomeView = ({filterByCategory}) => {
  return (
    <>
      <main className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <RecipeSlider
          title="People Favorite Food"
          fetchUrl={`${API_URL}search.php?f=c`}
        />

        <TrendingRecipe
          title="Quick and Best Food"
          fetchUrl={`${API_URL}filter.php?a=Canadian`}
        />

        <CategorySelection filterByCategory={filterByCategory}/>
      </main>
    </>
  );
};

export default HomeView;
