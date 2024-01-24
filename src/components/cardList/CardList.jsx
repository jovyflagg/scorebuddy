import Link from "next/link";
import React from "react";
import styles from "./cardList.module.css";
import Pagination from "../pagination/Pagination";
import Card from "../card/Card";
import constants from "@/utils/constants";

const getData = async (page, cat) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_API_URL}/api/posts?page=${page}&cat=${cat || ""}`,
    {
      cache: "no-store",
    }
  );

  if (!res.ok) {
    throw new Error("Failed");
  }

  return res.json();
};

const CardList = async ({ page, cat }) => {
  if (!process.env.NEXT_PUBLIC_BASE_API_URL) {
    return null;
  }
  const { posts, count } = await getData(page, cat);

  const POST_PER_PAGE = 5;

  const hasPrev = POST_PER_PAGE * (page - 1) > 0;
  const hasNext = POST_PER_PAGE * (page - 1) + POST_PER_PAGE < count;

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{constants.recentPosts}</h1>
      <h1 className={styles.title}>Recent Posts</h1>
      <div className={styles.posts}>
        {posts
          ?.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
          .map((item) => (
            <Card item={item} key={item.id} />
          ))}


      </div>
      <Pagination page={page} hasPrev={hasPrev} hasNext={hasNext} />
    </div>
  );
};

export default CardList;
