import React from "react";

const RecipeCard = ({ meal }) => {
  return (
    <div
      className="raltive bg-gray-900 rounded-xl shadow-xl shadow-black/50 overflow-hidden
    transition transform duration-500 cursor-pointer border border-gray-800 hover:shadow-blue-600/50"
    >
      {/* hover div */}
      <div
        className="absolute inset-0  rounded-xl border-2 border-transparent
       group-hover:border-blue-500/80 transition duration-500"
      ></div>

      <div className="flex justify-center items-center p-5">
        <img
          src={meal?.strMealThumb}
          alt=""
          className="h-60 w-60 rounded-xl border border-yellow-400
          transition duration-500 group-hover:scale-105"
        />
      </div>
    </div>
  );
};

export default RecipeCard;
