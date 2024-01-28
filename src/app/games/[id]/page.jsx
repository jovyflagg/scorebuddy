"use client";
import React, { useContext } from "react";
// import constants from "../../utils/constants";
import constants from "../../../utils/constants";
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
  const { games } = useContext(GameContext);
  const playersGame = games.find((game) => {
    {
      game.id === params.id;
    }
  });
  const selectedGame = games.find((game) => game.id === params.id);

  if (selectedGame) {
    console.log(selectedGame.name);
  } else {
    console.log("No game found with the specified id.");
  }
  return (
    <div className={styles.container}>
      <title>{constants.pages.games}</title>
      <div className={styles.about}>{constants.pages.games}</div>
      <h3>{params ? params.id : null}</h3>
      {/* {JSON.stringify(selectedGame)} */}
      {selectedGame.name}
      <Box sx={{ width: "100%" }}>
        <nav aria-label="secondary mailbox folders">
          <List>
            {selectedGame.players.map((player, index) => {
              const initial = player.name.slice(0, 2).toUpperCase();
              return (
                <div>
                  <ListItem disablePadding key={player.id}>
                    <ListItemButton
                      // onClick={() => router.push(`/games/${player.id}`)}
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
