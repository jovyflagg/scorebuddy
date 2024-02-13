"use client";
import styles from "./homepage.module.css";
import GamesComp from "@/components/GamesComp/GamesComp";
import constants from "@/utils/constants";

export default function Home() {
  return (
    <>
      <div className={styles.container}>
        <title>{constants.pages.games}</title>

        <GamesComp />
      </div>
    </>
  );
}
