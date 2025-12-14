import React, { useCallback, useState } from "react";
import Navbar from "./Components/Navbar";
import RecipeDetailView from "./Components/RecipeDetailView";
import SearchView from "./Components/SearchView";
import CusineBar from "./Components/Cuisines";
import HomeView from "./Components/HomeView";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const API_URL = "https://www.themealdb.com/api/json/v1/1/";

function App() {
  // const [searchQuery, setSearchQuery] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [searchLoading, setSearchLoading] = useState(false);

  const filterRecipe = useCallback(async (query, filterType) => {
    // setSearchQuery(query);
    setSearchResult([]);
    setSearchLoading(true);

    try {
      const res = await fetch(`${API_URL}filter.php?${filterType}=${query}`);
      if (!res.ok) throw new Error(`Error : ${res.status}`);

      const result = await res.json();
      setSearchResult(result?.meals || []);
    } catch (error) {
      console.log(error);
    } finally {
      setSearchLoading(false);
    }
  }, []);

  //filter by category

  const filterByCategory = useCallback(
    (category) => {
      filterRecipe(category, "c");
    },
    [filterRecipe]
  );

  // filter by area

  const filterByArea = useCallback(
    (area) => {
      filterRecipe(area, "a");
    },
    [filterRecipe]
  );

  const handleSearch = useCallback(async (query) => {
    // setSearchQuery(query);
    setSearchResult([]);
    setSearchLoading(true);

    try {
      const res = await fetch(`${API_URL}search.php?s=${query}`);
      if (!res.ok) throw new Error(`Error : ${res.status}`);

      const result = await res.json();
      setSearchResult(result?.meals || []);
    } catch (error) {
      console.log(error);
    } finally {
      setSearchLoading(false);
    }
  }, []);

  return (
    <>
      <Router>
        <div className="min-h-screen bg-gray-700 font-sans text-gray-100">
          <Navbar handleSearch={handleSearch} />
          <CusineBar filterByArea={filterByArea}/>
          <Routes>
            <Route path="/" element={<HomeView filterByCategory={filterByCategory} />} />
            <Route path="/recipe/:id" element={<RecipeDetailView />} />
            <Route
              path="/search/:query"
              element={
                <SearchView meals={searchResult} loading={searchLoading} />
              }
            />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
