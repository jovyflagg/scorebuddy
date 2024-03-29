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


import styles from "./gamesComp.module.css";
import GameContext from "@/context/GameContext";
import { useRouter } from "next/navigation";
import DeleteIcon from '@mui/icons-material/Delete'

import Form from "../Form/Form";


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
      setNewGame("");
    }
  };

  return (
    <div className={styles.content}>
    
      <Box sx={{ width: "100%" }}>
      <Form name={newGame} handleInputChange={handleInputChange} buttonName={"ADD GAME"} handleClick={handleAddGame}/>
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

                    <DeleteIcon onClick={() => deleteGame(game.id)} />

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
