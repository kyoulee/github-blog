import React from "react";
import type { Metadata } from "next";

import PostSlugLayout from "@/components/post/PostSlugLayout";
import { createPostMetadata, MetadataProps } from "@/components/Hook/frontMatterHook";
import { getPostSlugs } from "@/components/Hook/slugHook";
import { getPostModule } from "@/systems/libs/slugifyPathUrl";
import PostHeader from "@/components/post/header/PostHeader";
import PostFooter from "@/components/post/footer/PostFooter";

export function generateStaticParams() {
  const slugs = getPostSlugs();
  console.log("All post Slugs : ", slugs);

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

export default async function PostLayout(props: PostLayoutProps) {
  const slug = (await props.params).slug.map(segment => decodeURIComponent(decodeURIComponent(segment)));
  let markdownModule;

  try {
    markdownModule = await getPostModule(slug);
  } catch (e) {
    return <h1>Post Not Found</h1>;
  }

  const id = markdownModule.frontmatter?.id ?? undefined;
  const title = markdownModule.frontmatter?.title ?? "Default Title";
  const image = markdownModule.frontmatter?.image ?? null;
  const date = markdownModule.frontmatter?.date ?? null;
  const author = markdownModule.frontmatter?.author ?? "kyoulee";
  const readTime = markdownModule.frontmatter?.readtime ?? null;
  const tags = markdownModule.frontmatter?.tags ?? ["kyoulee", "blog", "default"];

  return (
    <PostSlugLayout
      Header={<PostHeader author={author} date={date} title={title} image={image} readTime={readTime} tags={tags} />}
      Footer={<PostFooter id={id} slug={slug} />}
    >
      {props.children}
    </PostSlugLayout>
  );
}
