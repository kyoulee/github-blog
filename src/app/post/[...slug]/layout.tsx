import React from "react";
import { notFound } from "next/navigation";

import type { Metadata } from 'next'

import PostSlugLayout from "@/components/post/PostSlugLayout";
import { createPostMetadata, MetadataProps } from "@/components/Hook/frontMatterHook";
import { getPostSlugs } from '@/components/Hook/slugHook';


export function generateStaticParams() {
  const slugs = getPostSlugs();
  return slugs;
}

export async function generateMetadata(props: MetadataProps): Promise<Metadata> {
  const metadata = createPostMetadata(props)
  return metadata;
}

type PostLayoutProps = {
  children: React.ReactNode;
  params: Promise<{ slug: string[] }>;
};

export default async function PostLayout(props: PostLayoutProps) {
  const slug = (await props.params).slug;
  const slugPath = slug.join("/");

  try {
    const markdownModule = (await import(`@/posts/${slugPath}.md`)) as MarkdownModuleType;
    return (
      <PostSlugLayout >
        {props.children}
      </PostSlugLayout>)
  } catch (e) {
    console.error(`Error importing post at path: ${slugPath}`, e);
    notFound()
  };
}
