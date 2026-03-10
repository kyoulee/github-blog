
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import styles from '@/styles/blog/card/postCard.module.css'; 

import defaultImage from "@/../public/images/github/default/default-og-image.jpg";

interface LargeCardProps {
  slug: string;
  date: string; // FrontMatter 타입에 맞게 string으로 변경
  coverImage?: string;
  title: string;
  summary: string;
}

export function LargeCard(props: LargeCardProps) {
  const formattedDate = new Date(props.date).toLocaleDateString('ko-KR', {
    year: 'numeric', month: 'long', day: 'numeric',
  });
console.log("LargeCard Props:", defaultImage.src);
  return (
    <Link
      href={`/post/${props.slug}`}
      className={`${styles.cardLink} ${styles.largeCardLink}`} 
    >      
      <div className={styles.imageContainer}>
        <img
          src={props.coverImage ?? defaultImage.src} // 경로를 직접 사용
          alt={props.title}
          className={styles.postImage}
          style={{ 
              objectFit: 'cover', 
              width: '100%', 
              height: '100%', 
              position: 'absolute' // fill과 동일한 효과를 위해 CSS에 의존
          }}
        />
        <span className={styles.dateBadge}>
          {formattedDate}
        </span>
      </div>
      <div className={styles.contentArea}>
        <h3 className={`${styles.postTitle} ${styles.largePostTitle}`}>
          {props.title}
        </h3>
        <p className={`${styles.postSummary} ${styles.largePostSummary}`}>
          {props.summary}
        </p>

        <div className={styles.metadata}>
          <p>자세히 보기 →</p>
        </div>
      </div>
    </Link>
  );
}

interface SmallCardProps {
  date: string; 
  slug: string;
  title: string;
  summary: string;
}

export function SmallPostCard(props: SmallCardProps) {
  const formattedDate = new Date(props.date).toLocaleDateString('ko-KR');

  return (
    <Link href={`/post/${props.slug}`} className={`${styles.cardLink} ${styles.smallCardLink}`}>
      <h4 className={`${styles.postTitle} ${styles.smallPostTitle}`}>{props.title}</h4>
      <p className={styles.postDate}>{formattedDate}</p>
      <p className={`${styles.postSummary} ${styles.smallPostSummary}`}>{props.summary}</p>
    </Link>
  );
}
