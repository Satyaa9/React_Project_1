import React from "react";
import Navbar from "./Components/Navbar";
import RecipeDetailView from "./Components/RecipeDetailView";
import SearchView from "./Components/SearchView";
import CusineBar from "./Components/Cuisines";
import HomeView from "./Components/HomeView";


import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
      <div className="min-h-screen bg-gray-700 font-sans text-gray-100">
        <Navbar/>
          <Routes>
            <Route />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
