"use client";
import React, { useState, useContext } from "react";
import constants from "../../../utils/constants";
import styles from "./gamePage.module.css";
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
  ListItemText,
} from "@mui/material";
import { useRouter } from "next/navigation";
import DeleteIcon from "@mui/icons-material/Delete";

export default function Games({ params }) {
  const router = useRouter();
  const { games, addPlayer, deletePlayer } =
    useContext(GameContext);
  const selectedGame = games.find((game) => game.id === params.gameId);
  const [newPlayer, setNewPlayer] = useState("");

  const handleInputChange = (event) => {
    setNewPlayer(event.target.value);
  };

  const handleAddPlayer = (id, newPlayer) => {
    if (newPlayer.trim() !== "") {
      addPlayer(id, newPlayer);
      setNewPlayer(""); // Clear input after adding game
    }
  };

  return (
    <div className={styles.container}>
      <title>{constants.pages.games}</title>
      <div className={styles.about}>{selectedGame?.name}</div>
      
      <div className={styles.button}>
        <input type="text" value={newPlayer} onChange={handleInputChange} />
        <span>          
          <Button
            variant="contained"
            onClick={() => handleAddPlayer(selectedGame.id, newPlayer)}
          >
            ADD PLAYER
          </Button>
        </span>
      </div>
      <Box sx={{ width: "100%" }}>
        <nav aria-label="secondary mailbox folders">
          <List>
            {selectedGame?.players?.map((player, index) => {
              const initial = player.name.slice(0, 2).toUpperCase();
              return (
                <div key={selectedGame.id}>
                  <ListItem disablePadding key={player.id}>
                    <ListItemButton
                      onClick={() =>
                        router.push(
                          `/games/${params.gameId}/player/${player.id}`
                        )
                      }
                    >
                      <ListItemIcon>
                        <Avatar>{initial}</Avatar>
                      </ListItemIcon>
                      <ListItemText primary={player.name} />
                    </ListItemButton>
                    <ListItemButton>
                      <ListItemText primary={player.score} />
                    </ListItemButton> 
                    <DeleteIcon onClick={() => deletePlayer(selectedGame.id, player.id)}/>
                  </ListItem>
                  {index !== selectedGame.length - 1 && <Divider />}
                </div>
              );
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
