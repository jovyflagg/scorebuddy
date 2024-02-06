"use client";

import { useState } from "react";

import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Avatar from "@mui/material/Avatar";
import Divider from "@mui/material/Divider";
import Button from "@mui/material/Button";
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
