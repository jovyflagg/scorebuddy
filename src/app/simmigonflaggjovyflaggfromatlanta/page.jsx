"use client";
import { signIn, useSession } from "next-auth/react";
import styles from "./loginPage.module.css";
import { useRouter } from "next/navigation";
import constants from "@/utils/constants";

const LoginPage = () => {
  const { status } = useSession();

  const router = useRouter();

  if (status === constants.application.loading) {
    return <div className={styles.loading}>{constants.application.loading}...</div>;
  }

  if (status === constants.application.authenticated) {
    router.push("/")
  }
  
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.socialButton} onClick={() => signIn("google")}>
        {constants.application.google}
        </div>        
        <div className={styles.socialButton}>{constants.application.facebook}</div>
      </div>
    </div>
  );
};

export default LoginPage;
