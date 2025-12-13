import React from "react";

import { getFileListInDirectory } from "@/components/libs/file/searchFile";
import config from "@/../config.json";
import path from "path";
import Link from "next/link";
import styles from "@/styles/post/postStyle.module.css";
import { getPostsData } from "@/components/libs/file/FileData";

type NaviLinkProps = {
  url: string;
  title: string;
  label: string;
  type : "next" | "prev"
}

function NaviLink(props: NaviLinkProps) {
  return (
    <Link href={props.url} className={`${styles.link} ${styles[props.type]}`} >
      <div className={styles.label}>{props.label}</div>
      <div className={styles.title}>{props.title}</div>
    </Link>
  )
}

type PageNavigationProps = {
  slug: string[];
};

async function PageNavigation(props: PageNavigationProps) {
  const slug = props.slug.map((v) => { return encodeURIComponent(v) });

  const currentDir = path.join(config.PostDir, ...props.slug.slice(0, -1));
  const fileNames = getFileListInDirectory(currentDir, [".mdx", ".md"]);
  const allPosts = await getPostsData(fileNames);

  const posts = allPosts
    .filter((post) => post?.frontmatter?.id !== undefined)
    .sort((a, b) => (a?.frontmatter?.id! > b?.frontmatter?.id! ? 1 : -1));

  const currentIndex = posts.findIndex((post) => post?.slug.join('/') === slug.join('/'));

  const prevPost = currentIndex > 0 ? posts[currentIndex - 1] : null;
  const nextPost = currentIndex < posts.length - 1 ? posts[currentIndex + 1] : null;

  return (
    <nav className={styles.navigation}>
      {prevPost ? <NaviLink type="prev" url={`/post/${prevPost.slug.join('/')}`} title={prevPost.frontmatter?.title ?? "무제"} label="다음 페이지"></NaviLink> : <div className={styles.emptyLink}></div>}
      {nextPost ? <NaviLink type="next" url={`/post/${nextPost.slug.join('/')}`} title={nextPost.frontmatter?.title ?? "무제"} label="다음 페이지"></NaviLink> : <div className={styles.emptyLink}></div>}
    </nav>
  );
}

export default PageNavigation;