import React from "react";
import styles from "./footer.module.css";
import Image from "next/image";
import Link from "next/link";
import constants from "@/utils/constants";
const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <div className={styles.logo}>
          <h1 className={styles.logoText}>{constants.application.name}</h1>
        </div>
        <p className={styles.desc}>

        </p>
        <div className={styles.icons}>
        <Link href="https://www.facebook.com" target="_blank"> <Image src="/facebook.png" alt="" width={18} height={18} /></Link>
        <Link href="https://www.instagram.com" target="_blank"><Image src="/instagram.png" alt="" width={18} height={18} /></Link>
        <Link href="https://www.youtube.com" target="_blank"> <Image src="/youtube.png" alt="" width={18} height={18} /></Link>
        </div>
      </div>
      <div className={styles.links}>
        <div className={styles.list}>
          <span className={styles.listTitle}>{constants.footer.headers.links.name}</span>
          {constants.footer.headers.links.links.map((link, index) =>
            <Link key={index} href={`/${link}`}>{link}</Link>
          )}

        </div>

        <div className={styles.list}>
          <span className={styles.listTitle}>{constants.footer.headers.social.name}</span>
          {constants.footer.headers.social.linkTo.map((link, index) =>
            <Link key={index} href={link}>{
              link.split(".")[1].substring(0, 1).toUpperCase() + link.split(".")[1].substring(1)
            }</Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Footer;
