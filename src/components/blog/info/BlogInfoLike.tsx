import React from 'react'
import BlogInfoBase from '@/components/blog/info/BlogInfoBase'
import { HeartIcon } from '@primer/octicons-react'
import { getAllPostLikes } from '@/components/libs/api/graphQL/getAllPostLikes';

async function BlogInfoLike() {
  const isDev = process.env.NODE_ENV == 'development';

  if (isDev)
    return (<BlogInfoBase data={1} description='좋아요' icon={HeartIcon} unit='개' />)
  
  const totalheart = await getAllPostLikes();

  return (
    <BlogInfoBase data={totalheart} description='좋아요' icon={HeartIcon} unit='개' />
  )
}


export default BlogInfoLike