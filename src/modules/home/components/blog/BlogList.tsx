import BLOG_ITEMS from '@/common/constants/blog'
import React from 'react'
import BlogCard from '../../../../common/components/elements/BlogCard'

const BlogList = () => {
  return (
    <div className='grid grid-cols-3 gap-4'>
      {BLOG_ITEMS.map((blog, index) => (
        <BlogCard key={index} {...blog} />
      ))}
    </div>
  )
}

export default BlogList