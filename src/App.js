import React, { useState } from "react";
import "./App.css";
import Footer from "./99 Footers/Footer";
import NavBar from "./NavBar";
import FilterBar from "./21 Filter/FilterBar";
import MainContent from "./05 MainPage/MainContent";

function App() {
  const [category, setCategory] = useState("");
  const [likeList, setLikeList] = useState([]);
  console.log(likeList);

  const handleLikeFilter = () => {
    setCategory("liked");
  };
  return (
    <div>
      <NavBar likeList={likeList} handleLikeFilter={handleLikeFilter} />
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
