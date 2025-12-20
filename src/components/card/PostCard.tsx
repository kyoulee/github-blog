import React from "react";
import Link from "next/link";
import styles from "@/styles/card/postCard.module.css";

interface PostCardProps {
  href: string;
  title: string;
  description?: string;
  date?: string;
  tag?: string;
}

export const PostCard: React.FC<PostCardProps> = ({ 
  href, 
  title, 
  description, 
  date, 
  tag 
}) => {
  return (
    <Link href={href} className={styles.card}>
      <h2 className={styles.postTitle}>{title}</h2>
      
      <p className={styles.description}>
        {description || "No description provided for this post."}
      </p>

      <div className={styles.footer}>
        <div className={styles.date}>
          <span>🗓️</span>
          <span>{date || "Jan 1, 2024"}</span>
        </div>
        
        {tag && <span className={styles.tag}>#{tag}</span>}
      </div>
    </Link>
  );
};