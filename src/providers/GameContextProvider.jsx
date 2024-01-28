"use client";
import React, { useState } from 'react'
import GameContext from "@/context/GameContext";

const GameContextProvider = ({ children }) => {

    const [games, setGames] = useState([
        { id: "1", name: "5 Crowns", players: [{id: "1", name:"Jovy", score: "0"}, {id: "2", name:"Simmigon", score: "100"}] },
        { id: "2", name: "Scrabble", players: [{id: "1", name:"Jonah", score: "0"}, {id: "2", name:"Tim", score: "100"}]},
        { id: "3", name: "Uno", players: [{id: "1", name:"Amanda", score: "0"}, {id: "2", name:"Opin", score: "100"}] },
        { id: "4", name: "Tekken", players: [{id: "1", name:"Denzel", score: "0"}, {id: "2", name:"Isaiah", score: "100"}] },
        { id: "5", name: "Dominion", players: [{id: "1", name:"Joselle", score: "0"}, {id: "2", name:"Alan", score: "100"}] },
    ]);

    return (
        <GameContext.Provider value={{ games, setGames }}>
            {children}
        </GameContext.Provider>
    )
}

export default GameContextProvider;