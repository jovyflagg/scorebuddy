import React from "react";
import constants from "../../utils/constants";
import styles from "./gamesPage.module.css";
import Image from "next/image";

export default function Games() {
  return (
    <div className={styles.container}>
      <title>{constants.pages.games}</title>
      <div className={styles.about}>{constants.pages.games}</div>

      <div className={styles.aboutContainer}>
        <div className={styles.aboutDesc}></div>
      </div>
    </div>
  );
}
