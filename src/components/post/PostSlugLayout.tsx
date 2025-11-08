"use client"

import React from 'react'
import PostTableOfContent from "@/components/post/PostTableOfContent";
import { PageLayout } from "@primer/react/lib";

type PostSlugLayoutProps = {
  children : React.ReactNode;
}

function PostSlugLayout(props : PostSlugLayoutProps) {
  return (
    <PageLayout>
      <PostTableOfContent />
      <PageLayout.Header style={{ marginBottom: '0' }}>
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
  )
}

export default PostSlugLayout