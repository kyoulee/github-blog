"use client"

import PostTableOfContent from "@/components/post/PostTableOfContent";
import { PageLayout } from "@primer/react/lib";
import React from "react";


type PostLayoutProps = {
  children: React.ReactNode;
};

export default function PostLayout(props: PostLayoutProps) {
  return (
    <div>
      <PageLayout>
        <PostTableOfContent />
        <PageLayout.Header style={{marginBottom: '0'}}>
          <div className="h-[320px] bg-red-500">
            header test
          </div>
        </PageLayout.Header>
        <PageLayout.Content padding="none">
          {props.children}
        </PageLayout.Content>
        <PageLayout.Footer style={{ marginTop: '0' }}>
          <div className="h-dvh bg-white">footer</div>
        </PageLayout.Footer>
      </PageLayout>
    </div >
  );
}
