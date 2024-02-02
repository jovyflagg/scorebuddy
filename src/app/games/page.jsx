import React from "react";
import constants from "../../utils/constants";
import styles from "./gamesPage.module.css";
import GamesComp from "@/components/GamesComp/GamesComp";

export default function Games() {
 
  return (
    <div className={styles.container}>
      <title>{constants.pages.games}</title>
      <div className={styles.games}>{constants.pages.games}</div>
      <GamesComp />    
      <div className={styles.aboutContainer}>
        <div className={styles.aboutDesc}></div>
      </div>
    </div>

  );
}
