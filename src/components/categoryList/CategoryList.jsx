import React from "react";
import styles from "./categoryList.module.css";
import Link from "next/link";
import Image from "next/image";
import constants from "@/utils/constants";

const getData = async () => {

  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API_URL}/api/categories`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed");
  }

  return res.json();
  
};

const CategoryList = async () => {
  const data = await getData();
  // not here
  return (
    <div className={styles.container}>      
      <h1 className={styles.title}>{constants.application.popularCategories}</h1>
      <div className={styles.categories}>
        {data?.map((item) => (
          <Link
            href="/blog?cat=style"
            className={`${styles.category} ${styles[item.slug]}`}
            key={item._id}
          >
            {item.img && (
              <Image
                src={item.img}
                alt=""
                width={32}
                height={32}
                className={styles.image}
              />
            )}
            {item.title}
          </Link>
        ))}
      </div>
    
    </div>
  );
};

export default CategoryList;
