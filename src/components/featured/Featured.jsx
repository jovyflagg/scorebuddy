import React from "react";
import styles from "./featured.module.css";
import Image from "next/image";
import constants from "@/utils/constants";
const Featured = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        <b>Welcome to </b>{constants.application.title}
      </h1>
      <div className={styles.post}>
        <div className={styles.imgContainer}>
          <Image src="/p1.jpeg" alt="" fill className={styles.image} />
        </div>
        <div className={styles.textContainer}>
          <h1 className={styles.postTitle}></h1>
          <p className={styles.postDesc}>
          {constants.application.name}
          </p>
          <button className={styles.button}>{constants.application.readmore}</button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
