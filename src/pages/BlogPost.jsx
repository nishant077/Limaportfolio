import React, { useEffect } from 'react';
import { Calendar, Clock, User, ArrowLeft } from 'lucide-react';
import { blogsData } from '../data/blogsData';
import { Link } from '../router';

const BlogPost = ({ id }) => {
    const blog = blogsData.find(b => b.id === parseInt(id));

    // Scroll to top when post loads
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    if (!blog) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-(--archive-ivory)">
                <div className="text-center">
                    <h1 className="text-4xl font-serif font-bold mb-6">Post Not Found</h1>
                    <Link to="/blog" className="text-blue-600 hover:underline">Back to Blog</Link>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-(--archive-ivory) py-20 animate-in fade-in duration-700">
            {/* Hero / Background Section */}
            <section
                className="h-[40vh] md:h-[50vh] relative flex items-center justify-center overflow-hidden"
                style={{ backgroundColor: "var(--muted-sage)" }}
            >
                <div className="absolute inset-0 opacity-20 pointer-events-none">
                    <img src={blog.image} alt="" className="w-full h-full object-cover grayscale" />
                </div>
            </section>

            {/* Content Card */}
            <div className="max-w-4xl mx-auto px-6 -mt-32 md:-mt-48 relative z-10">
                <div className="bg-white rounded-t-md px-8 md:px-20 py-16 shadow-2xl">
                    {/* Header Metadata */}
                    <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6 mb-10">
                        <span className="font-sans font-bold tracking-[0.2em] text-[#FABD32] uppercase text-xs">
                            {blog.category}
                        </span>
                        <span className="text-gray-300">•</span>
                        <div className="flex items-center gap-2 text-gray-400 font-sans font-bold tracking-widest text-[10px] uppercase">
                            <Calendar size={12} /> {blog.date}
                        </div>
                        <span className="text-gray-300">•</span>
                        <div className="flex items-center gap-2 text-gray-400 font-sans font-bold tracking-widest text-[10px] uppercase">
                            <Clock size={12} /> {blog.readTime}
                        </div>
                    </div>

                    {/* Title */}
                    <h1 className="font-serif text-4xl md:text-6xl text-center font-bold mb-12 italic leading-[1.1]" style={{ color: "var(--feminist-wisdom)" }}>
                        {blog.title}
                    </h1>

                    {/* Author Info */}
                    <div className="flex items-center justify-center gap-4 mb-16 border-b border-gray-100 pb-12">
                        <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-100 flex items-center justify-center">
                            <User size={24} className="text-gray-300" />
                        </div>
                        <div className="text-left">
                            <p className="font-sans font-bold text-sm" style={{ color: "var(--near-black)" }}>
                                {blog.author || "Lima Halima-Khalil"}
                            </p>
                            <p className="text-xs text-gray-400 tracking-wide">
                                {blog.authorTitle || "Researcher & Advocate"}
                            </p>
                        </div>
                    </div>

                    {/* Article Content */}
                    <div className="prose prose-lg max-w-none">
                        {blog.content.split('\n\n').map((paragraph, i) => (
                            <p key={i} className="text-gray-600 leading-relaxed mb-8 text-lg font-sans">
                                {paragraph.trim()}
                            </p>
                        ))}
                    </div>

                    {/* Back Button */}
                    <div className="mt-20 pt-10 border-t border-gray-100 flex justify-center">
                        <Link
                            to="/blog"
                            className="inline-flex items-center gap-3 px-10 py-4 rounded-full bg-(--feminist-wisdom) text-white font-sans font-bold tracking-widest text-xs uppercase transition-all duration-300 hover:scale-105 hover:shadow-xl group"
                        >
                            <ArrowLeft size={16} className="transition-transform duration-300 group-hover:-translate-x-2" />
                            Back to Blog
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogPost;
