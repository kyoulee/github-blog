import React from "react";
import { notFound } from "next/navigation";

import type { Metadata } from 'next'

import PostSlugLayout from "@/components/post/PostSlugLayout";
import { createPostMetadata, MetadataProps } from "@/components/Hook/frontMatterHook";
import { getPostSlugs } from '@/components/Hook/slugHook';
import { MarkdownModuleType } from "@/types/markdown";
import { getPostModule } from "@/systems/libs/slugifyPathUrl";


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
  try {
    const markdownModule = await getPostModule(props.params);
    return (
      <PostSlugLayout >
        {props.children}
      </PostSlugLayout>)
  } catch (e) {
    console.error(`Error importing post at path: ${(await props.params).slug.join('/')}`, e);
    notFound()
  };
}
