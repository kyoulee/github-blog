import React from "react";

import defaultImage from "@/../public/images/github/default/default-og-image.jpg";
import { PencilIcon, RepoIcon, StopwatchIcon, TagIcon } from "@primer/octicons-react";

import headerStyle from "@/styles/header/headerStyle.module.css";

type PostHeaderProps = {
  author: string;
  title: string;
  preview: string | null;
  date: string | null;
  readTime: string | null;
  tags: string[];
};

async function PostHeader(props: PostHeaderProps) {
  return (
    <div className={headerStyle.header}>
      <div className={headerStyle.content} style={{ backgroundImage: `url(${props.preview ?? defaultImage.src})` }}>
        <div className={headerStyle.title}>default Title</div>
        <div className={headerStyle.meta}>
          <div className={headerStyle.metaItem}>
            <RepoIcon className={headerStyle.icon} />
            <span>{props.date ?? "2025-01-01 00:00"}</span>
          </div>
          <div className={headerStyle.metaItem}>
            <PencilIcon className={headerStyle.icon} />
            <span>{props.author}</span>
          </div>
          <div className={headerStyle.metaItem}>
            <StopwatchIcon className={headerStyle.icon} />
            <span>{props.readTime ?? "N/A"}</span>
          </div>
        </div>
        <div className={headerStyle.tags}>
          {props.tags.slice(0, 5).map((tag) => (
            <div key={tag} className={headerStyle.tag}>
              <TagIcon className={headerStyle.icon} />
              {tag}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PostHeader;
