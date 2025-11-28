import React from "react";

import type { Metadata } from "next";

import PostSlugLayout from "@/components/post/PostSlugLayout";
import { createPostMetadata, MetadataProps } from "@/components/Hook/frontMatterHook";
import { getPostSlugs } from "@/components/Hook/slugHook";

export function generateStaticParams() {
  const slugs = getPostSlugs();
  return slugs;
}

export async function generateMetadata(props: MetadataProps): Promise<Metadata> {
  const metadata = createPostMetadata(props);
  return metadata;
}

type PostLayoutProps = {
  children: React.ReactNode;
  params: Promise<{ slug: string[] }>;
};

export default function PostLayout(props: PostLayoutProps) {
  return (
    <PostSlugLayout slug={props.params}>
    {props.children}
    </PostSlugLayout>
  );
}
