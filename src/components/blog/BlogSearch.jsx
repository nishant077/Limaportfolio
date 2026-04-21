import React from 'react';
import { Search } from 'lucide-react';

const BlogSearch = ({ searchQuery, setSearchQuery }) => {
    return (
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 px-2">
            <div>
                <p className="font-sans font-bold tracking-[0.2em] uppercase text-xs mb-4" style={{ color: "var(--muted-sage)" }}>
                    The Archive
                </p>
                <h3 className="font-serif text-4xl font-bold" style={{ color: "var(--feminist-wisdom)" }}>
                    Latest Reflections
                </h3>
            </div>

            <div className="relative w-full max-w-md">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 opacity-40" />
                <input
                    type="text"
                    placeholder="Search by title..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-12 pr-6 py-4 rounded-full border-2 border-transparent focus:border-(--kandahar-sun) outline-hidden transition-all text-sm font-sans font-medium shadow-sm"
                    style={{ backgroundColor: "white" }}
                />
            </div>
        </div>
    );
};

export default BlogSearch;
