"use client";
import React, { useState } from 'react'
import GameContext from "@/context/GameContext";

const GameContextProvider = ({ children }) => {

    const [games, setGames] = useState([
        { id: "1", name: "5 Crowns" },
        { id: "2", name: "Scrabble" },
        { id: "3", name: "Uno" },
        { id: "4", name: "Tekken" },
        { id: "5", name: "Dominion" },
    ]);

    return (
        <GameContext.Provider value={{ games, setGames }}>
            {children}
        </GameContext.Provider>
    )
}

export default GameContextProvider;