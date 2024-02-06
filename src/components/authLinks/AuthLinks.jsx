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
        null
        // <>
         
        //   <span className={styles.link} onClick={signOut}>
        //     {constants.application.Logout}            
        //   </span>
        // </>
      )}
      <div className={styles.burger} onClick={() => setOpen(!open)}>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
      </div>
      {open && (
        <div className={styles.responsiveMenu}>
          <Link href="/">{constants.pages.home}</Link>
          
          {status === constants.application.unAuthenticated ? (

            <Link href="/simmigonflaggjovyflaggfromatlanta">{constants.application.Login}</Link>
          ) : (
          null
          )}
        </div>
      )}
    </>
  );
};

export default AuthLinks;
