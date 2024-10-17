"use client";

import { useState } from "react";

import IslandForm from "./IslandForm";
import IslandList from "./IslandList";
import Search from "./Search";

function IslandsContainer({ islands }) {
  const [query, setQuery] = useState("");
  const [currentIsland, setCurrentIsland] = useState(islands[0]);

  function handleChange(e) {
    setQuery(e.target.value);
  }

  function chooseCurrentIsland(island) {
    setCurrentIsland(island);
  }
  const fitleredIslands = islands.filter((island) =>
    island.name.toLowerCase().includes(query.toLowerCase())
  );

  console.log(currentIsland);

  return (
    <div className="islands-container">
      <div>
        <Search handleChange={handleChange} />
        <IslandList
          islands={fitleredIslands}
          chooseCurrentIsland={chooseCurrentIsland}
        />
      </div>
      <IslandForm island={currentIsland} />
    </div>
  );
}

export default IslandsContainer;
