"use client";
import React, { useContext, useState } from "react";

import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Avatar from "@mui/material/Avatar";
import Divider from "@mui/material/Divider";

import Button from "@mui/material/Button";
import styles from "./GamesComp.module.css";
import GameContext from "@/context/GameContext";
import { useRouter } from "next/navigation";
import { nanoid } from "nanoid";
import { IconButton } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete'

const GamesComp = () => {
  const router = useRouter();
  const { games, setGames, addGame, deleteGame } = useContext(GameContext);
  const [newGame, setNewGame] = useState("");

  const handleInputChange = (event) => {
    setNewGame(event.target.value);
  };

  const handleAddGame = () => {
    if (newGame.trim() !== "") {
      addGame(newGame.trim());
      debugger;
      setNewGame(""); // Clear input after adding game
    }
  };

  const add = () => {
    if (newGame.trim() !== "") {
      const newGameItem = {
        // id: games.length + 1, // Assuming each game has a unique ID
        id: nanoid(), // Assuming each game has a unique ID
        name: newGame.trim(),
        players: [],
      };

      setGames([newGameItem, ...games]);
      setNewGame(""); // Clear input after adding game
    }
  };

  return (
    <div className={styles.content}>
      <h3>Games</h3>
      <div className={styles.button}>
        <input type="text" value={newGame} onChange={handleInputChange} />
        <span>
          {/* Step 4: Update Button */}
          <Button variant="contained" onClick={handleAddGame}>
            ADD GAME
          </Button>
        </span>
      </div>
      <Box sx={{ width: "100%" }}>
        <nav aria-label="secondary mailbox folders">
          <List>
            {games.map((game, index) => {
              const initial = game.name.slice(0, 2).toUpperCase();
              return (
                <div key={game.id}>
                  <ListItem disablePadding key={game.id}>
                    <ListItemButton
                      onClick={() => router.push(`/games/${game.id}`)}
                    >
                      <ListItemIcon>
                        <Avatar>{initial}</Avatar>
                      </ListItemIcon>
                      <ListItemText primary={game.name} />
                      <ListItemText primary={game.score} />
                    </ListItemButton>
                      <IconButton aria-label="delete" size="small" onClick={()=>deleteGame(game.id)}>
                        <DeleteIcon fontSize="inherit" />
                      </IconButton>
                  </ListItem>
                  {index !== games.length - 1 && <Divider />}
                </div>
              );
            })}
          </List>
        </nav>
      </Box>
    </div>
  );
};

export default GamesComp;
