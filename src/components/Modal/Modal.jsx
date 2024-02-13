import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "./menuPosts.module.css"

const getData = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_API_URL}/posts?page=1`,
    {
      cache: "no-store",
    }
  );

  if (!res.ok) {
    throw new Error("Failed");
  }

  return res.json();
};
const MenuPosts = async ({ withImage }) => {
  // const { posts } = await getData();
  const posts = [{ "id": "clohp7ele0003ua3cmr0dngrt", "createdAt": "2023-11-02T21:28:02.978Z", "slug": "i-have-no-style", "title": "I have no style", "desc": "<p>This is not the style I was looking for.</p>", "img": "", "views": 97, "catSlug": "style", "userEmail": "simmigonflagg@gmail.com" }, { "id": "clp06unl30001uas8sg1tgzen", "createdAt": "2023-11-15T20:01:52.359Z", "slug": "from-viva-la-payme", "title": "From Viva La PayMe", "desc": "<h2>Only Jovy can see there this came from. This is a nice hat! <a href=\"https://www.amazon.com/Carhartt-Acrylic-Watch-Black-Size/dp/B002G9UDYG?pd_rd_w=2wsyW&amp;content-id=amzn1.sym.adeb688d-35a7-4952-bbb3-fcbab0fec4f0&amp;pf_rd_p=adeb688d-35a7-4952-bbb3-fcbab0fec4f0&amp;pf_rd_r=DHTEMCFTN0D9Z9Z9SCEV&amp;pd_rd_wg=aVwOI&amp;pd_rd_r=45d16154-cb43-4955-b382-e2d6bc275701&amp;pd_rd_i=B002G9UDYG&amp;ref_=pd_bap_d_grid_rp_0_1_ec_t&amp;th=1&amp;psc=1\" rel=\"noopener noreferrer\" target=\"_blank\">Carhartt Men's Knit Cuffed Beanie, Black, One Size at Amazon Men’s Clothing store: Cold Weather Hats</a></h2>", "img": "", "views": 113, "catSlug": "food", "userEmail": "simmigonflagg@gmail.com" }]
return (
  <div className={styles.items}>

    {posts?.map((post) => (

      <div key={post.id} >
        <Link href={`/posts/${post.slug}`} className={styles.item}>
          {withImage && (
            <div className={styles.imageContainer}>
              <Image src="/p1.jpeg" alt="" fill className={styles.image} />
            </div>
          )}
          <div className={styles.textContainer}>
            <span className={`${styles.category} ${styles.travel}`}>{post.catSlug}</span>
            <h3 className={styles.postTitle}>
              {post.title}
            </h3>
            <div className={styles.detail}>
              <span className={styles.username}>{post.views} Views</span>
              <span className={styles.date}> - {post.createdAt.split("T")[0]}</span>
            </div>
          </div>
        </Link>
      </div>
      
    ))}
  </div>
);
};

export default MenuPosts;
