import React from "react";
import PostTableOfContent from "@/components/post/PostTableOfContent";

import {
  PageLayout,
} from "@primer/react"; 
import PageLayoutFooterWrapper, { PageLayoutContentWrapper, PageLayoutHeaderWrapper } from "../libs/primer/PageLayoutWrapper";

type PostSlugLayoutProps = {
  children: React.ReactNode;
  Header: React.ReactNode;
  Footer: React.ReactNode;
};

// async 키워드는 서버 컴포넌트에서만 가능하므로 그대로 유지합니다.
async function PostSlugLayout(props: PostSlugLayoutProps) {
  return (
    <PageLayout style={{ padding: 0 }}>
      <PostTableOfContent />
      <PageLayoutHeaderWrapper style={{ marginBottom: "0", marginTop: "0" }}>
        {props.Header}
      </PageLayoutHeaderWrapper>
      <PageLayoutContentWrapper padding="none">{props.children}</PageLayoutContentWrapper>
      <PageLayoutFooterWrapper style={{ marginTop: "0" }}>
        {props.Footer}
      </PageLayoutFooterWrapper>
    </PageLayout>
  );
}

export default PostSlugLayout;