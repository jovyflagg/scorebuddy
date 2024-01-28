import React from "react";
import constants from "../../utils/constants";
import styles from "./gamesPage.module.css";
import Image from "next/image";
import GamesComp from "@/components/GamesComp/GamesComp";
import { useRouter } from "next/navigation";

export default function Games({ params }) {
  // const { id } = useRouter()


  return (
    <div className={styles.container}>
      <title>{constants.pages.games}</title>
      <div className={styles.games}>{constants.pages.games}</div>
      <GamesComp />
      <h3>{params ? params.id : null}</h3>
      <div className={styles.aboutContainer}>
        <div className={styles.aboutDesc}></div>
      </div>
    </div>
  );
}
