import React from "react";

import { getPostsData } from "@/components/libs/file/FileData";
import { getAllFileList } from "@/components/libs/file/searchFile";
import config from "@/../config.json";

import styles from "@/styles/blog/postList.module.css";
import { LargeCard, SmallPostCard } from "./Card";

async function Postlists() {
  const allPosts = getAllFileList(config.PostDir, [".mdx", ".md"]);
  const allPostsdata = await getPostsData(allPosts);
  allPostsdata[0]?.frontmatter;
  const posts = allPostsdata
    .filter((post) => post?.frontmatter?.id !== undefined)
    .sort((a, b) => (a?.frontmatter?.id! > b?.frontmatter?.id! ? 1 : -1));

  const fristPost = posts[0];
  const restPosts = posts.slice(1).slice(0, 4);

  return (
    <div className={styles.container}>
      <div className={styles.latestPostArea}>
        <h2 className={styles.sectionTitle}>최신 포스트</h2>
        <LargeCard
          coverImage={fristPost?.frontmatter?.preview}
          date={fristPost?.frontmatter?.created ?? ""}
          slug={fristPost?.slug.join("/") ?? ""}
          summary={fristPost?.frontmatter?.description ?? ""}
          title={fristPost?.frontmatter?.title ?? ""}
        />
      </div>

      <div className={styles.secondaryPostsArea}>
        <h2 className={styles.sectionTitle}>다른 포스트</h2>
        <div className={styles.smallCardList}>
          {restPosts.map((post) => (
            <SmallPostCard
              key={post?.frontmatter?.id}
              date={post?.frontmatter?.created ?? ""}
              slug={post?.slug.join("/") ?? ""}
              summary={post?.frontmatter?.description ?? ""}
              title={post?.frontmatter?.title ?? ""}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Postlists;
