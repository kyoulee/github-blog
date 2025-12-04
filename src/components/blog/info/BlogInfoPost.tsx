import React from 'react'
import BlogInfoBase from '@/components/blog/info/BlogInfoBase'
import { BookIcon } from '@primer/octicons-react'
import { getAllFileCount } from '@/components/libs/file/searchFile'

import config from '@/../config.json'

function BlogInfoPost() {
  const count: number = getAllFileCount(config.PostDir, ['.md', '.mdx']);

  return (
    <BlogInfoBase data={count} description='총 포스트' icon={BookIcon} unit='개' />
  )
}


export default BlogInfoPost