"use client"
import React, { useContext } from "react";
// import constants from "../../utils/constants";
import constants from "../../../utils/constants";
import styles from "./gamesPage.module.css";
import GameContext from '@/context/GameContext';

export default function Games({ params }) {
  const { games } = useContext(GameContext)
  const playersGame = games.find(game => {
    {game.id === params.id}
  })
  const selectedGame = games.find(game => game.id === params.id);

  if (selectedGame) {
      console.log(selectedGame.name);
  } else {
      console.log('No game found with the specified id.');
  }
  return (
    <div className={styles.container}>
      <title>{constants.pages.games}</title>
      <div className={styles.about}>{constants.pages.games}</div>
      <h3>{params ? params.id : null}</h3>
      {JSON.stringify(playersGame)}
      {selectedGame.name }
   
   
      <div className={styles.aboutContainer}>
        <div className={styles.aboutDesc}></div>
      </div>
    </div>
  );
}
