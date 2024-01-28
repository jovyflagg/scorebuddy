"use client";
import React, { useState } from 'react'
import GameContext from "@/context/GameContext";
import { nanoid } from 'nanoid'
// const model.id = nanoid()  //=> "V1StGXR8_Z5jdHi6B-myT"

const GameContextProvider = ({ children }) => {
   
    const [games, setGames] = useState([
        { id: nanoid(), name: "5 Crowns", players: [{id: nanoid(), name:"Jovy", score: "0"}, {id: nanoid(), name:"Simmigon", score: "100"}] },
        { id: nanoid(), name: "Scrabble", players: [{id: nanoid(), name:"Jonah", score: "0"}, {id: nanoid(), name:"Tim", score: "100"}]},
        { id: nanoid(), name: "Uno", players: [{id: nanoid(), name:"Amanda", score: "0"}, {id: nanoid(), name:"Opin", score: "100"}] },
        { id: nanoid(), name: "Tekken", players: [{id: nanoid(), name:"Denzel", score: "0"}, {id: nanoid(), name:"Isaiah", score: "100"}] },
        { id: nanoid(), name: "Dominion", players: [{id: nanoid(), name:"Joselle", score: "0"}, {id: nanoid(), name:"Alan", score: "100"}] },
    ]);

    return (
        <GameContext.Provider value={{ games, setGames }}>
            {children}
        </GameContext.Provider>
    )
}

export default GameContextProvider;