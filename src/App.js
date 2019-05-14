import React, { useState } from "react";
import "./App.css";
import Footer from "./Footer";
import NavBar from "./NavBar";
import MainContent from "./MainContent";
import FilterBar from "./FilterBar";

function App() {
  const [category, setCategory] = useState("");

  return (
    <div>
      <NavBar />
      <FilterBar setCategory={setCategory} />
      <MainContent category={category} />
      <Footer />
    </div>
  );
}

export default App;
