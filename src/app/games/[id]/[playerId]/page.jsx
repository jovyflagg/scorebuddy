"use client";
import React, { useState, useContext, useDisclosure } from "react";
// import constants from "../../utils/constants";
import constants from "../../../../utils/constants";
import styles from "./gamesPage.module.css";
import GameContext from "@/context/GameContext";
import {
  Avatar,
  Box,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";


export default function Games({ params }) {
  const id = params.playerId;
  debugger
  const [showModal, setShowModal] = useState(false);
  const { games, setGames, addGame, updateGame, deleteGame } = useContext(GameContext);
  const selectedGame = games.find((game) => game.id === params.id);
  debugger
  if (selectedGame) {
    console.log(selectedGame.name);

    console.log();

  } else {
    console.log("No game found with the specified id.");
  }
  function handleClick(e) {
    alert(e)
  }
  return (
    <div className={styles.container}>
      <title>{constants.pages.games}</title>
      <div className={styles.about}>{constants.pages.games}</div>

      <Box sx={{ width: "100%" }}>
        <nav aria-label="secondary mailbox folders">
          <List>
            {selectedGame?.players.map((player, index) => {
              const initial = player.name.slice(0, 2).toUpperCase();
              return (
                <div>
                  <ListItem disablePadding key={player.id}>
                    <ListItemButton className="openModal"
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
