import React from "react";
import styles from "./menu.module.css";
import MenuPosts from "../menuPosts/MenuPosts";

import constants from "@/utils/constants";

const Menu = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.subtitle}>{constants.application.menu.posts.subTitle}</h2>
      <h1 className={styles.title}>{constants.application.menu.posts.title}</h1>
      <MenuPosts withImage={false} />
      <h2 className={styles.subtitle}>{constants.application.menu.categories.subTitle}</h2>      
      <h1 className={styles.title}>{constants.application.menu.categories.title}</h1>
      
      <h2 className={styles.subtitle}>{constants.application.menu.editor.subTitle}</h2>
      <h1 className={styles.title}>{constants.application.menu.editor.title}</h1>
      <MenuPosts withImage={true} />
    </div>
  );
};

export default Menu;
