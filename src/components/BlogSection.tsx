import React from 'react'
import type { BlogData } from '../types'

interface BlogSectionProps {
  blogData: BlogData
}

const BlogSection: React.FC<BlogSectionProps> = ({ blogData }) => {
  return (
    <section className="mb-16" id="blog">
      <h2 className="text-3xl font-bold text-gray-900 mb-6">Blog</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogData.posts.map((post, index) => (
          <article 
            key={index} 
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
          >
            <div className="h-48 bg-gray-200 flex items-center justify-center">
              <span className="text-gray-400 text-sm">{post.category}</span>
            </div>
            <div className="p-6">
              <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
                <span>{post.category}</span>
                <span>•</span>
                <span>{post.date}</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{post.title}</h3>
              <p className="text-gray-600 mb-4">{post.excerpt}</p>
              <a 
                href={post.link || '#'} 
                className="text-gray-900 hover:text-gray-700 font-medium"
              >
                Read More →
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default BlogSection

