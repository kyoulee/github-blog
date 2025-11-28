"use client";

import React from "react";
import PostTableOfContent from "@/components/post/PostTableOfContent";
import { PageLayout } from "@primer/react/lib";
import PostHeader from "./header/PostHeader";
import { getPostModule } from "@/systems/libs/slugifyPathUrl";
import GiscusSetting from "@/components/post/giscus/GiscusSetting";

type PostSlugLayoutProps = {
  children: React.ReactNode;
  slug: Promise<{ slug: string[] }>;
};

async function PostSlugLayout(props: PostSlugLayoutProps) {
  const markdownModule = await getPostModule(props.slug);

  const id = markdownModule.frontmatter?.id ?? undefined;
  const title = markdownModule.frontmatter?.title ?? "Default Title";
  const image = markdownModule.frontmatter?.image ?? null;
  const date = markdownModule.frontmatter?.date ?? null;
  const author = markdownModule.frontmatter?.author ?? "kyoulee";
  const readTime = markdownModule.frontmatter?.readtime ?? null;
  const tags = markdownModule.frontmatter?.tags ?? ["kyoulee", "blog", "default"];

  return (
    <PageLayout style={{ padding: 0 }}>
      <PostTableOfContent />
      <PageLayout.Header style={{ marginBottom: "0", marginTop: "0" }}>
        <PostHeader
          slug={props.slug}
          author={author}
          date={date}
          title={title}
          image={image}
          readTime={readTime}
          tags={tags}
        />
      </PageLayout.Header>
      <PageLayout.Content padding="none">{props.children}</PageLayout.Content>
      <PageLayout.Footer style={{ marginTop: "0" }}>
        <GiscusSetting id={id} />
        <div className="h-dvh bg-white">footer</div>
      </PageLayout.Footer>
    </PageLayout>
  );
}

export default PostSlugLayout;
