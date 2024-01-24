"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";

import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Avatar from "@mui/material/Avatar";
import Divider from "@mui/material/Divider";
import Icon from "@mui/material/Icon";
import Button from "@mui/material/Button";
import styles from "./homepage.module.css";

export default function Home({ searchParams }) {
  const router = useRouter();
  const [games, setGames] = useState([
    { id: 1, name: "5 Crowns" },
    { id: 2, name: "Scrabble" },
  ]);

  return (
    <div className={styles.content}>
      <h3>Games</h3>
      <div className={styles.button}>
        <Button variant="contained">ADD GAME</Button>
      </div>
      <Box sx={{ width: "100%", bgcolor: "lightblue" }}>
        <nav aria-label="secondary mailbox folders">
          <List>
            {games.map((game, index) => {
              const initial = game.name.slice(0, 2).toUpperCase();
              return (
                <div>
                  <ListItem disablePadding key={game.id}>
                    <ListItemButton
                      onClick={() => router.push(`/games/${game.id}`)}
                    >
                      <ListItemIcon>
                        <Avatar>{initial}</Avatar>
                      </ListItemIcon>
                      <ListItemText primary={game.name} />
                    </ListItemButton>
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
}
