"use client";
import Link from "next/link";
import styles from "./authLinks.module.css";
import { useState } from "react";
import { signOut, useSession } from "next-auth/react";
import constants from "@/utils/constants";

const AuthLinks = () => {
  const [open, setOpen] = useState(false);

  // const { status } = useSession();

  return (
    <>
      {status === constants.application.unAuthenticated ? (
        <Link href={`/${constants.application.titleScene}`} className={styles.link}>
        {/* titleScene */}
        </Link>
      ) : (
        <>
          <Link href="/write" className={styles.link}>
            {constants.application.Write}            
          </Link>
          <span className={styles.link} onClick={signOut}>
            {constants.application.Logout}            
          </span>
        </>
      )}
      <div className={styles.burger} onClick={() => setOpen(!open)}>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
      </div>
      {open && (
        <div className={styles.responsiveMenu}>
          <Link href="/">{constants.pages.home}</Link>
          <Link href="/products">{constants.pages.products}</Link>
          <Link href="/about">{constants.pages.about}</Link>
          <Link href="/contact">{constants.pages.contact}</Link>
          {status === constants.application.unAuthenticated ? (

            <Link href="/simmigonflaggjovyflaggfromatlanta">{constants.application.Login}</Link>
          ) : (
            <>
              <Link href="/write">{constants.application.Write}</Link>
              <span className={styles.link}>{constants.application.Logout}</span>
            </>
          )}
        </div>
      )}
    </>
  );
};

export default AuthLinks;
