import { getFileListInDirectory } from "@/components/libs/file/searchFile";
import path from "path";
import React from "react";
import config from "@/../config.json"
import { getPostsData } from "@/components/libs/file/FileData";
import { PostCard } from "@/components/card/PostCard";

import styles from "@/styles/category/categoryPage.module.css"
type CategoryPageProps = {
  params: Promise<{ slug: string[] }>
}

export default async function CategorySlugPage({ params }: CategoryPageProps) {
  const slugOrigin = (await params).slug;
  const slug: string[] = slugOrigin.map(segment => decodeURIComponent(segment));

  const currentDir = path.join(config.PostDir, ...slug);

  const fileNames = getFileListInDirectory(currentDir, [".mdx", ".md"])
  const allPosts = await getPostsData(fileNames);

  const posts = allPosts
    .filter((post) => post?.frontmatter?.id !== undefined)
    .sort((a, b) => (a?.frontmatter?.id! > b?.frontmatter?.id! ? 1 : -1));

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        📂 {slug[slug.length - 1]}
      </h1>
      <div className={styles.grid}>
        {posts.map((post) => (
          post ?
            <PostCard
              key={post.frontmatter?.id}
              href={`/post/${post.slug.join('/')}`}
              title={post.frontmatter?.title || path.join(...post.slug)}
              description={post.frontmatter?.description}
              date={post.frontmatter?.created}
              tag={post.frontmatter?.tags?.[0]}
            />
            : null
        ))}
      </div>
    </div>
  );
}