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
  const { games, setGames } = useContext(GameContext);
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
            return { ...p, score: parseInt(p.score) + parseInt(newScore) };
          }
          return p;
        });
        return { ...game, players: updatedPlayers };
      }
      return game;
    });

    setGames(updatedGames);
    setNewScore("");
    router.back();
  };


  const handleBlur = (event, player) => {
    const updatedGames = games.map((game) => {

      if (game.id === selectedGame.id) {
        const updatedPlayers = game.players.map((p) => {
          if (p.id === player.id) {
            return { ...p, name: event.target.textContent };
          }
          return p;
        });
        return { ...game, players: updatedPlayers };
      }
      return game;
    });


    setGames(updatedGames);
    router.back();
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
                  <div key={player.id}>
                    <ListItem disablePadding >
                      <ListItemButton>
                        <ListItemIcon>
                          <Avatar>{initial}</Avatar>
                        </ListItemIcon>
                        <ListItemText
                          contentEditable // This allows the text to be edited
                          onBlur={(e) => handleBlur(e, player)}
                          primary={player.name} />

                      </ListItemButton>

                    </ListItem>
                    <ListItem disablePadding >
                      <ListItemButton>
                        <ListItemIcon>
                          <Avatar>{initial}</Avatar>
                        </ListItemIcon>
                        <ListItemText

                          contentEditable // This allows the text to be edited
                          onBlur={(e) => handleBlur(e, player)}
                          primary={player.score} />
                      </ListItemButton>
                      <form>
                        <input
                          type="text"
                          placeholder="add score"
                          onChange={handleScoreInputOnChange}
                          name="newScore"
                        />
                        <Button onClick={() => handleUpdateScore(player)} >Add</Button>
                      </form>

                    </ListItem>
                    
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
