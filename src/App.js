import React, { useState } from "react";
import "./App.css";
import Footer from "./Footer";
import NavBar from "./NavBar";
import MainContent from "./MainContent";
import FilterBar from "./FilterBar";

function App() {
  const [category, setCategory] = useState("");
  const [likeList, setLikeList] = useState([]);
  console.log(likeList);
  return (
    <div>
      <NavBar likeList={likeList} />
      <FilterBar setCategory={setCategory} />
      <MainContent
        category={category}
        setLikeList={setLikeList}
        likeList={likeList}
      />
      <Footer />
    </div>
  );
}

export default App;
