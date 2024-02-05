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
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText
} from "@mui/material";
import { useRouter } from "next/navigation";


export default function Games({ params }) {
  const { playerId, gameId } = params;

  const router = useRouter();
  const [showModal, setShowModal] = useState(false);
  const { games, setGames, addGame, updateGame, deleteGame } = useContext(GameContext);
  const selectedGame = games.find((game) => game.id === gameId);
  const [player, setPlayer] = useState(() =>
    selectedGame?.players.find((player) => player.id === playerId)
  );

  useEffect(() => {
    // If selectedGame or playerId changes, update the player state
    setPlayer(selectedGame?.players.find((player) => player.id === playerId));
  }, [selectedGame, playerId]);

  const handleUpdatePlayer = (player) =>{
    
  }
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
                      <ListItemButton
                        onClick={() => (handleUpdatePlayer)}
                      >
                        <ListItemIcon>
                          <Avatar>{initial}</Avatar>
                        </ListItemIcon>
                        <ListItemText primary={player.name} />
                      </ListItemButton>
                      <ListItemText primary={player.score} />
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
