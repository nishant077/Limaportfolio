import React from 'react';
import { ChevronRight } from 'lucide-react';
import ScrollReveal from '../ScrollReveal';
import { Link } from '../../router';

const FeaturedBlogCard = ({ blog }) => {
    if (!blog) return null;

    return (
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-10 relative z-20">
            <ScrollReveal direction="up" delay={200}>
                <Link
                    to={`/blog/${blog.id}`}
                    className="bg-white rounded-2xl overflow-hidden shadow-2xl flex flex-col md:flex-row min-h-[450px] cursor-pointer group transition-all duration-300 hover:shadow-3xl"
                >
                    {/* Image (Left) */}
                    <div className="md:w-1/2 relative bg-linear-to-br from-blue-500/20 to-teal-500/10 overflow-hidden">
                        <img
                            src={blog.image}
                            alt={blog.title}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-linear-to-r from-blue-600/30 to-transparent pointer-events-none" />
                    </div>

                    {/* Content (Right) */}
                    <div className="md:w-1/2 p-10 md:p-14 flex flex-col justify-center bg-[#F8F6F1]">
                        {/* Improved Category Tag */}
                        <div className="mb-6">
                            <span
                                className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider shadow-sm transition-all duration-300 hover:scale-105 hover:shadow-md"
                                style={{
                                    backgroundColor: "var(--kandahar-sun)",
                                    color: "#1A1A1A",
                                    border: "1px solid rgba(0,0,0,0.05)"
                                }}
                            >
                                <span className="w-1.5 h-1.5 rounded-full bg-current opacity-60"></span>
                                {blog.category}
                            </span>
                        </div>

                        {/* Title */}
                        <h2
                            className="font-serif text-4xl md:text-5xl font-bold mb-6 italic transition-all duration-300 group-hover:text-[#FABD32] group-hover:translate-x-1"
                            style={{ color: "var(--feminist-wisdom)" }}
                        >
                            {blog.title}
                        </h2>

                        {/* Description */}
                        <p className="text-gray-600 text-lg leading-relaxed mb-8 line-clamp-3">
                            {blog.shortDescription}
                        </p>

                        {/* Footer with Author & Button */}
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 border-t border-gray-200 pt-8 mt-auto">
                            <div className="flex items-center gap-2 text-gray-500 text-sm font-medium">
                                <div className="w-8 h-8 rounded-full bg-linear-to-r from-[#FABD32] to-[#FFD700] flex items-center justify-center text-white font-bold text-xs">
                                    {blog.author.charAt(0)}
                                </div>
                                <div>
                                    <div className="font-bold text-gray-800">{blog.author}</div>
                                    <div className="text-xs opacity-60">{blog.date}</div>
                                </div>
                            </div>

                            {/* Improved Read Full Post Button */}
                            <div
                                className="group/btn relative inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-bold text-white transition-all duration-300 overflow-hidden shadow-md hover:shadow-xl"
                                style={{ backgroundColor: "var(--feminist-wisdom)" }}
                            >
                                <span className="relative z-10 flex items-center gap-2">
                                    Read Full Post
                                    <ChevronRight
                                        size={18}
                                        className="transition-transform duration-300 group-hover/btn:translate-x-1"
                                    />
                                </span>
                                <span className="absolute inset-0 bg-white opacity-0 group-hover/btn:opacity-20 transition-opacity duration-300"></span>
                            </div>
                        </div>
                    </div>
                </Link>
            </ScrollReveal>
        </div>
    );
};

export default FeaturedBlogCard;
