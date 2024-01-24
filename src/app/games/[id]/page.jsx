"use client"
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
import React from 'react';





const Games = ({ params }) => {
  const router = useRouter();
  // const { id } = router.query || {}; // Use default value to avoid destructuring undefined

  return (
    <div>
      <h1>Games Page</h1>
      {params.id ? <p>ID: {params.id}{params.name}</p> : <p>No ID available</p>}
    </div>
  );
};

export default Games;
