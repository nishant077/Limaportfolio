import React from 'react';
import ScrollReveal from '../ScrollReveal';

const BlogHero = () => {
    return (
        <section
            className="relative pt-40 pb-24 flex items-center justify-center overflow-hidden"
            style={{ backgroundColor: "var(--feminist-wisdom)" }}
        >
            <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
                <ScrollReveal>
                    <h1 className="font-serif text-5xl text-white md:text-7xl font-bold mb-8">
                        From the Blog
                    </h1>
                    <p
                        className="text-xl md:text-2xl font-serif italic font-semibold leading-snug max-w-2xl mx-auto"
                        style={{ color: "var(--kandahar-sun)" }}
                    >
                        &ldquo;Reflections on conflict, resilience, and the stories we carry.&rdquo;
                    </p>
                </ScrollReveal>
            </div>
        </section>
    );
};

export default BlogHero;
