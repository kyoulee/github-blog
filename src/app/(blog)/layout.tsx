import { PageLayout } from "@primer/react/lib";
import React from "react";

import GlobalLayoutPageHeader from "@/components/global/GlobalPageHeader";
import BlogHeader from "@/components/blog/BlogHeader";
import TitleImage from "@/components/libs/images/TitleImage";
import config from "@/../config.json";

type GlobalLayoutPageHeaderProps = {
  children: React.ReactNode;
};

export default function BlogLayout(props: GlobalLayoutPageHeaderProps) {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

  const BlogImageUrl = basePath + config.BlogImageUrl;

  return (
    <div>
      <GlobalLayoutPageHeader className="relative">
        <TitleImage imageUrl={BlogImageUrl} />
        <BlogHeader />
        </GlobalLayoutPageHeader>
        <PageLayout>
          {props.children}
          {/* <GlobalPageLayoutFooter /> */}
        </PageLayout>
    </div>
  );
}
