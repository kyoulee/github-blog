import React from 'react'
import BlogInfoBase from '@/components/blog/info/BlogInfoBase'
import { HeartIcon } from '@primer/octicons-react'
import { getAllPostLikes } from '@/components/libs/api/graphQL/getAllPostLikes';

async function BlogInfoLike() {
  const totalheart = await getAllPostLikes();

  return (
    <BlogInfoBase data={totalheart} description='좋아요' icon={HeartIcon} unit='개' />
  )
}


export default BlogInfoLike