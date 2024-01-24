"use client";
import styles from "./writePage.module.css";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import constants from "@/utils/constants";



const WritePage = () => {

  const { status } = useSession();
  const router = useRouter();
  
  const [open, setOpen] = useState(false);
  const [file, setFile] = useState(null);
  const [media, setMedia] = useState("");
  const [value, setValue] = useState("");
  const [title, setTitle] = useState("");
  const [localStorage, setLocalStorage] = useState("");
  const [catSlug, setCatSlug] = useState("");
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    // I need local storage code here.
  }, [localStorage]);

  if (status === constants.application.loading) {
    return (
      <div className={styles.loading}>{constants.application.loading}...</div>
    );
  }

  if (status === constants.application.unAuthenticated) {
    router.push("/");
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API_URL}/api/categories`, {
          cache: "no-store",
        });

        if (!res.ok) {
          throw new Error("Failed");
        }

        const data = await res.json();
        setCategories(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [categories]); // Fetch data only once on component mount


  const slugify = (str) =>
    str
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, "")
      .replace(/[\s_-]+/g, "-")
      .replace(/^-+|-+$/g, "");

  const handleSubmit = async () => {
//Testing pull requests on posts branch to main
    const publishedContent = {
      title,
      value: value.replace(/\n/g, '<br />'),// Convert line breaks to <br />
    };

    const res = await fetch("/api/posts", {
      method: "POST",
      body: JSON.stringify({
        title,
        desc: value,
        img: media,
        slug: slugify(title),
        catSlug: catSlug || "style", //If not selected, choose the general category
      }),
    });

    if (res.status === constants.apiStatusCode.ok) {
      const data = await res.json();
      router.push(`/posts/${data.slug}`);
    }
  };
  const handleSave = async () => {
    // TODO: need logic here to save drafts
    alert("Drafts Coming soon!");
  };

  return (
    <div className={styles.container}>
      <div className={styles.container}>
        <label className={styles.label}>Blog title:</label>
        <input
          className={`${styles.input} ${styles.label}`}
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <label className={styles.label}>Write your post:</label>
        <textarea
          className={`${styles.textArea} ${styles.label}`}
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <div className={styles.button}>
          <button className={styles.save} onClick={handleSave}>
            Save Draft
          </button>
          <button className={styles.publish} onClick={handleSubmit}>
            Publish
          </button>
        </div>
      </div>
    </div>
  );
};

export default WritePage;
