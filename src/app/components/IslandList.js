"use client";

import Island from "./Island";

function IslandList({ islands, chooseCurrentIsland }) {
  const islandCards = islands.map((island) => (
    <Island
      key={island.id}
      island={island}
      chooseCurrentIsland={chooseCurrentIsland}
    />
  ));

  return <div className="islandList">{islandCards}</div>;
}

export default IslandList;
