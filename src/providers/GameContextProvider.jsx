"use client";
import React, { useState, useEffect } from 'react'
import GameContext from "@/context/GameContext";
import { nanoid } from 'nanoid'

const GameContextProvider = ({ children }) => {

  const [games, setGames] = useState([
    { id: nanoid(), name: "5 Crowns", players: [{ id: nanoid(), name: "Jovy", score: 0 }, { id: nanoid(), name: "Simmigon", score: 100 }] },
    { id: nanoid(), name: "Scrabble", players: [{ id: nanoid(), name: "Jonah", score: 0 }, { id: nanoid(), name: "Tim", score: 100 }] },
    { id: nanoid(), name: "Uno", players: [{ id: nanoid(), name: "Amanda", score: 0 }, { id: nanoid(), name: "Opin", score: 100 }] },
    { id: nanoid(), name: "Tekken", players: [{ id: nanoid(), name: "Denzel", score: 0 }, { id: nanoid(), name: "Isaiah", score: 100 }] },
    { id: nanoid(), name: "Dominion", players: [{ id: nanoid(), name: "Joselle", score: 0 }, { id: nanoid(), name: "Alan", score: 100 }] },
 
  ]);

  const [players, setPlayers] = useState([]);

  const addGame = (name) => {
    const game = {
      id: nanoid(),
      name,
      players: []
    }
    debugger
    setGames((prev) => [game, ...prev])
  }

  const updateGame = (id, game) => {
    setGames((prev) => prev.map((prevgame) => (prevgame.id === id ? game : prevgame)))
  }

  const deleteGame = (id) => { setGames((prev) => prev.filter((game) => game.id !== id)) }

  useEffect(() => {
    const games = JSON.parse(localStorage.getItem("games"))
    if (games && games.length > 0) {
      setGames(games)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("games", JSON.stringify(games))
  }, [games])


  return (
    <GameContext.Provider value={{ games, setGames, addGame, updateGame, deleteGame }}>
      {children}
    </GameContext.Provider>
  )
}

export default GameContextProvider;