import React from "react";
import "../App.css";

interface PokemonCardProps {
    name: string;
    number: number;
    image: string;
    weight: string;
    height: string;
    type: string;
    moves: string[];
    locked?: boolean;
    onUnlock?: () => void;
}

function PokemonCard({
    name, number, image, weight, height, type, moves, locked = false, onUnlock,
}) {
    return (
        <div
        className={`p-6 rounded-lg shadow-lg border-4 ${locked ? "bg-pokemonGray border-gray-700" : "bg-pokemonBrown border-pokemonYellow"}`}>
            <h2 className="text-white font-bold text-2xl">
            {locked ? "????? #???" : `${name} #${number}`}
            </h2>
            <img src={image}alt={name}
            className={`w-40 h-40 mx-auto mt-2 rounded-lg shadow-md ${locked ? "opacity-50 grayscale" : ""}`} />
            <div className="text-white mt-4">
            <p>
            <span className="font-bold">Peso:</span> {weight}
            </p>
            <p>
            <span className="font-bold">Altura:</span> {height}
            </p>
            <p>
            <span className="font-bold">Tipo:</span> {type}
            </p>
            <p>
            <span className="font-bold">Movimientos:</span> {moves.join(", ")}
            </p>
            </div>
            {locked && onUnlock && (
            <button
            className="bg-pokemonBlue text-white px-4 py-2 mt-3 rounded-lg hover:bg-blue-700"
            onClick={onUnlock}>
            Desbloquear
            </button>
            )}
        </div>
    );
}

export default PokemonCard;

