"use client";
import React, { useState, useContext, useEffect } from "react";
// import constants from "../../utils/constants";
import constants from "../../../../../utils/constants";
import styles from "./playerPage.module.css";
import GameContext from "@/context/GameContext";
import {
  Avatar,
  Box,
  Button,
  ButtonBase,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { useRouter } from "next/navigation";

export default function Games({ params }) {
  const { playerId, gameId } = params;

  const router = useRouter();
  const [showModal, setShowModal] = useState(false);
  const { games, setGames, addGame, updateGame, deleteGame } =
    useContext(GameContext);
  const selectedGame = games.find((game) => game.id === gameId);
  const [player, setPlayer] = useState(() =>
    selectedGame?.players.find((player) => player.id === playerId)
  );
  const [newScore, setNewScore] = useState(0);

  useEffect(() => {
    // If selectedGame or playerId changes, update the player state
    setPlayer(selectedGame?.players.find((player) => player.id === playerId));
  }, [selectedGame, playerId]);

  const handleScoreInputOnChange = (event) => {
    setNewScore(event.target.value); //newScore input update
  };
  const handleUpdateScore = (player) => {
    const updatedGames = games.map((game) => {
    
      if (game.id === selectedGame.id) {
        const updatedPlayers = game.players.map((p) => {
          if (p.id === player.id) {
            return { ...p, score: parseFloat(p.score) + parseFloat(newScore) };
          }
          return p;
        });
        return { ...game, players: updatedPlayers };
      }
      return game;
    });

    setGames(updatedGames);
    setNewScore("");
  };

  return (
    <div className={styles.container}>
      <title>{constants.pages.games}</title>
      <div className={styles.about}>{selectedGame?.name}</div>
      <Box sx={{ width: "100%" }}>
        <nav aria-label="secondary mailbox folders">
          <List>
            {selectedGame?.players.map((player) => {
              if (player.id === params.playerId) {
                const initial = player.name.slice(0, 2).toUpperCase();
                return (
                  <div>
                    <ListItem disablePadding key={player.id}>
                      <ListItemButton onClick={() => handleUpdatePlayer}>
                        <ListItemIcon>
                          <Avatar>{initial}</Avatar>
                        </ListItemIcon>
                        <ListItemText primary={player.name} />
                      </ListItemButton>
                      <ListItemText primary={player.score} />
                    </ListItem>

                    <form>
                      <input
                        type="text"
                        placeholder="add score"
                        onChange={handleScoreInputOnChange}
                        name="newScore"
                        value={newScore}
                       
                      />
                      <Button onClick={()=> handleUpdateScore(player)} >Save</Button>
                    </form>
                  </div>
                );
              }
            })}
          </List>
        </nav>
      </Box>

      <div className={styles.aboutContainer}>
        <div className={styles.aboutDesc}></div>
      </div>
    </div>
  );
}
