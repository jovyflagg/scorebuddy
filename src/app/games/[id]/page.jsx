"use client";
import React, { useState, useContext, useDisclosure } from "react";
// import constants from "../../utils/constants";
import constants from "../../../utils/constants";
import styles from "./gamesPage.module.css";
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
import { nanoid } from "nanoid";

export default function Games({ params }) {
  const [showModal, setShowModal] = useState(false);
  const { games, setGames, addGame, updateGame, deleteGame } =
    useContext(GameContext);
  const selectedGame = games.find((game) => game.id === params.id);
  const [newPlayer, setNewPlayer] = useState("");
const [players, setPlayers] = useState([]);

  if (selectedGame) {
    console.log(selectedGame.name);
    console.log(selectedGame.players);
    // console.log(players);
    // debugger;
    console.log();
  } else {
    console.log("No game found with the specified id.");
  }
  function handleClick(e) {
    alert(e);
  }

  const handleInputChange = (event) => {
    setNewPlayer(event.target.value);
  };

  const handleAddPlayer = () => {
 
    if (newPlayer.trim() !== "") {
      const newPlayerItem = {
        // id: games.length + 1, // Assuming each game has a unique ID
        id: nanoid(), // Assuming each game has a unique ID
        // name: newPlayer.trim(),
        name: newPlayer,
      };
      alert(newPlayerItem.name + " has been added!")
      setPlayers([newPlayerItem])
    //  setPlayers([newPlayerItem, ...players])
     console.log("NEW PLAYER ADDED: " + newPlayer)
      setNewPlayer(""); // Clear input after adding game
    }
  };
  return (
    <div className={styles.container}>
      <title>{constants.pages.games}</title>
      <div className={styles.about}>{selectedGame?.name}</div>
      <div className={styles.button}>
        {/* Step 4: Update Input */}
        <input type="text" value={newPlayer} onChange={handleInputChange} />
        <span>
          {/* Step 4: Update Button */}
          <Button variant="contained" onClick={handleAddPlayer}>
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
                      className="openModal"
                      onClick={(e) => handleClick(JSON.stringify(player))}
                    >
                      <ListItemIcon>
                        <Avatar>{initial}</Avatar>
                      </ListItemIcon>
                      <ListItemText primary={player.name} />
                    </ListItemButton>
                    <ListItemText primary={player.score} />
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
