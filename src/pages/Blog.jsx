import React, { useState } from 'react';
import { blogsData } from '../data/blogsData';
import BlogHero from '../components/blog/BlogHero';
import FeaturedBlogCard from '../components/blog/FeaturedBlogCard';
import BlogCard from '../components/blog/BlogCard';
import BlogSearch from '../components/blog/BlogSearch';

const Blog = () => {
    const [searchQuery, setSearchQuery] = useState("");

    const featuredBlog = blogsData.find(blog => blog.featured);
    const remainingBlogs = blogsData.filter(blog => !blog.featured);

    const filteredBlogs = remainingBlogs.filter(blog =>
        blog.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="min-h-screen py-20" style={{ backgroundColor: "var(--archive-ivory)" }}>
            <BlogHero />

            <FeaturedBlogCard blog={featuredBlog} />

            {/* Blog Feed Section */}
            <div className="max-w-7xl mx-auto px-6 lg:px-10 pt-10">
                <BlogSearch searchQuery={searchQuery} setSearchQuery={setSearchQuery} />

                {/* Blog Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {filteredBlogs.length > 0 ? (
                        filteredBlogs.map((blog, i) => (
                            <BlogCard key={blog.id} blog={blog} index={i} />
                        ))
                    ) : (
                        <div className="col-span-full py-20 text-center italic text-gray-400">
                            No articles found matching your search.
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Blog;