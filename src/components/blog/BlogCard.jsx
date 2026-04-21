import React from 'react';
import ScrollReveal from '../ScrollReveal';
import { Link } from '../../router';

const BlogCard = ({ blog, index }) => {
    return (
        <ScrollReveal delay={index * 100}>
            <Link
                to={`/blog/${blog.id}`}
                className="bg-white rounded-md overflow-hidden shadow-lg transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl flex flex-col h-full group cursor-pointer"
            >
                {/* Card Image Wrapper */}
                <div className="relative h-64 overflow-hidden bg-gray-100">
                    <img
                        src={blog.image}
                        alt={blog.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute top-6 left-6">
                        <div
                            className="px-4 py-1 rounded-md text-[10px] font-bold uppercase tracking-widest shadow-md"
                            style={{ backgroundColor: "var(--kandahar-sun)", color: "#1A1A1A" }}
                        >
                            {blog.category}
                        </div>
                    </div>
                </div>

                {/* Card Content */}
                <div className="p-8 flex flex-col grow">
                    <div className="flex items-center gap-4 mb-4 font-sans font-bold text-[10px] tracking-widest opacity-40 uppercase">
                        <span>{blog.date}</span>
                        <span>•</span>
                        <span>{blog.readTime}</span>
                    </div>
                    <h4
                        className="font-serif text-2xl font-bold mb-4 italic transition-colors duration-300 group-hover:text-(--kandahar-sun)"
                        style={{ color: "var(--feminist-wisdom)" }}
                    >
                        {blog.title}
                    </h4>
                    <p className="text-gray-500 text-sm leading-relaxed mb-8 line-clamp-3">
                        {blog.shortDescription}
                    </p>
                    <div className="mt-auto">
                        <div
                            className="inline-flex items-center gap-1 font-sans font-bold text-xs tracking-widest uppercase transition-all duration-300 group-hover:gap-3"
                            style={{ color: "var(--kandahar-sun)" }}
                        >
                            Read More <span className="text-lg">→</span>
                        </div>
                    </div>
                </div>
            </Link>
        </ScrollReveal>
    );
};

export default BlogCard;
