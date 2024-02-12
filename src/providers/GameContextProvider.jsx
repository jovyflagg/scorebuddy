"use client";
import React, { useState, useEffect } from 'react'
import GameContext from "@/context/GameContext";
import { nanoid } from 'nanoid'

const GameContextProvider = ({ children }) => {

  const [games, setGames] = useState([
    { id: nanoid(), name: "5 Crowns", players: [{ id: nanoid(), name: "Jovy", score: 0 }, { id: nanoid(), name: "Simmigon", score: 100 }] },
  ]);

  const addGame = (name) => {
    const game = {
      id: nanoid(),
      name,
      players: []
    }
    debugger
    setGames((prev) => [game, ...prev])
  }

  const addPlayer = (gameId, name) => {
    const player = {
      id: nanoid(),
      name,
      score: 0
    }
    setGames((prevGames) => 
    prevGames.map((game) => 
      game.id === gameId 
        ? { ...game, players: [...game.players, player] }
        : game
    )
  );
  }

  const updateGame = (id, game) => {
    setGames((prev) => prev.map((prevgame) => (prevgame.id === id ? game : prevgame)))
  }

  const deleteGame = (id) => { setGames((prev) => prev.filter((game) => game.id !== id)) }
  
  const deletePlayer = (gameId, playerId) => {
    setGames((prev) =>
      prev.map((game) => {
        if (game.id === gameId) {
          // If it's the selected game, filter out the player by playerId
          const updatedPlayers = game.players.filter((player) => player.id !== playerId);
          return { ...game, players: updatedPlayers };
        }
        return game;
      })
    );
  };

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
    <GameContext.Provider value={{ games, setGames, addGame, updateGame, deleteGame, addPlayer, deletePlayer }}>
      {children}
    </GameContext.Provider>
  )
}

export default GameContextProvider;