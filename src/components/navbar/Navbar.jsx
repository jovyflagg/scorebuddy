"use client";

import styles from "./navbar.module.css";
import Image from "next/image";
import Link from "next/link";
import AuthLinks from "../authLinks/AuthLinks";
import ThemeToggle from "../themeToggle/ThemeToggle";
import constants from "@/utils/constants";
import HomeIcon from '@mui/icons-material/Home';

const Navbar = () => {
  return (
    <div className={styles.container}>
      {/* <div className={styles.social}>
        <Link href="https://www.facebook.com" target="_blank">
          <Image src="/facebook.png" alt="facebook" width={24} height={24} />
        </Link>
        <Link href="https://www.instagram.com" target="_blank">
          <Image src="/instagram.png" alt="instagram" width={24} height={24} />
        </Link>
        <Link href="https://www.youtube.com" target="_blank">
          <Image src="/youtube.png" alt="youtube" width={24} height={24} />
        </Link>
      </div> */}

      <div className={styles.logo}>
        <Link href="/" className={styles.link}>
          {constants.application.name}
        </Link>
      </div>

      <div className={styles.links}>
        <Link href="/" className={styles.link}>
          <HomeIcon />
        </Link>
        <ThemeToggle />

        {/* <AuthLinks /> */}
                      
      </div>
    </div>
  );
};

export default Navbar;
