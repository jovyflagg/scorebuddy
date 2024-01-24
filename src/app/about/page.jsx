import React from "react";
import constants from "../../utils/constants";
import styles from "./aboutPage.module.css";
import Image from "next/image";

export default function About() {
  return (
    <div className={styles.container}>
      <title>{constants.pages.about}</title>
      <div className={styles.about}>{constants.pages.about}</div>
      {/* <div className={styles.aboutDesc}>{constants.pages.desc}</div> */}
      <div className={styles.aboutContainer}>
        <div className={styles.imgContainer}>
          <Image src="/about.png" alt="" fill className={styles.image} />
        </div>
        <div className={styles.aboutDesc}>
          <p>
            Hello Beautiful Souls! 💖 I&apos;m Jovy, and I&apos;m thrilled to have you
            here in my little corner of the internet. Think of me as your
            everyday confidante, sharing the highs and lows of life, all while
            celebrating the beautiful moments in between. From mastering the art
            of makeup to curating effortlessly chic outfits, I&apos;m on a journey of
            self-expression and embracing the simple joys. Fashion isn&apos;t just
            about trends; it&apos;s about feeling your best, and I&apos;m here to inspire
            and be inspired by your unique style.
          </p>
          <br />
          <p>
            As a foodie at heart, my kitchen is my sanctuary. Join me in
            discovering new recipes, savoring delicious bites, and finding joy
            in the ritual of cooking. And, of course, let&apos;s talk about travel!
            Exploring new places, meeting new faces, and creating lasting
            memories are at the heart of my adventures.
          </p>
          <br />
          <p>
            Life&apos;s a beautiful mess, and I&apos;m navigating it with a touch of
            grace, a sprinkle of glamour, and a lot of heart. Join me on this
            journey where we celebrate the beauty in everyday moments and find
            inspiration in the ordinary. Here&apos;s to love, laughter, and a life
            well-lived!  
            </p> <br /> <br />
            
            <p className={styles.signature}>
            Warmest wishes, </p>
            <br />
            <p className={styles.signature}>
            Jovy
            </p>
         
        </div>
      </div>
    </div>
  );
}

