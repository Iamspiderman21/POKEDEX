import React from "react";
import PokemonCard from "./components/PokemonCard.tsx";
import "./App.css";

function App() {
  const cubone = {
    name: "Cubone",
    number: 104,
    image: "cubone.png", 
    weight: "6.5 kg",
    height: "0.4 m",
    type: "Ground",
    moves: ["Bone Club", "Headbutt", "Leer"],
    locked: false, 
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-900">
      <PokemonCard {...cubone} />
    </div>
  );
}

export default App;
