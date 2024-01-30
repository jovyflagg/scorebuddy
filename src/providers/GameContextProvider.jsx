import React, { useState, useEffect } from 'react';
import GameContext from "@/context/GameContext";
import { nanoid } from 'nanoid';

const GameContextProvider = ({ children }) => {
    const getFromLocalStorage = () => {
        if (typeof window !== "undefined") {
            const value = localStorage.getItem("games");
            return value ? JSON.parse(value) : [];
        }
        return [];
    };

    const [games, setGames] = useState(() => {
        return getFromLocalStorage();
    });

    useEffect(() => {
        localStorage.setItem("games", JSON.stringify(games));
    }, [games]);

    return (
        <GameContext.Provider value={{ games, setGames }}>
            {children}
        </GameContext.Provider>
    );
};

export default GameContextProvider;
