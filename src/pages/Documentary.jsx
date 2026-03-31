import React from 'react';
import { ExternalLink } from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';

const Documentary = () => {
  return (
    <section className="bg-[var(--archive-ivory)] max-w-7xl mx-auto md:pb-20 pb-10 md:pt-32 pt-20 px-6 lg:px-10 min-h-screen">
      <div className="">

        {/* Main Header */}
        <ScrollReveal>
          <div className="mb-10">
            <h1 className="text-4xl lg:text-6xl font-serif text-[var(--diplomatic-blue)] font-bold">
              Documentary & Media Speeches
            </h1>
          </div>
        </ScrollReveal>

        {/* Featured Main Card */}
        <ScrollReveal>
          <div className="bg-[var(--diplomatic-blue)] rounded-3xl p-8 sm:p-10 md:p-14 lg:p-16 mb-20 shadow-lg relative overflow-hidden flex flex-col justify-start items-start">

            {/* Tag */}
            <p className="text-blue-300/80 uppercase tracking-widest text-[10px] sm:text-xs font-semibold mb-6">
              Asia Society — March 2024
            </p>

            {/* Title */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-white font-bold mb-6 max-w-4xl leading-tight">
              International Women's Day 2024: Tackling the Unfinished Business of Gender Equality
            </h2>

            {/* Description */}
            <p className="text-blue-100/90 text-sm sm:text-base md:text-lg mb-12 max-w-4xl leading-relaxed">
              Lima speaks on the unfinished business of Afghan women's rights at Asia Society's International Women's Day 2024 convening — addressing the structural failures that have left Afghan women behind.
            </p>

            {/* Button */}
            <a
              href="#"
              className="inline-flex flex-row items-center gap-2 bg-[var(--kandahar-sun)] text-[var(--diplomatic-blue)] font-bold text-sm sm:text-base px-6 py-3 sm:px-8 sm:py-3.5 rounded-full hover:scale-105 transition-transform duration-300 w-fit"
            >
              Watch/Read
              <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5" />
            </a>
          </div>
        </ScrollReveal>

        {/* Secondary Header */}
        <ScrollReveal>
          <div className="mb-8">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif text-[var(--diplomatic-blue)] font-bold">
              More Media Appearances
            </h2>
          </div>
        </ScrollReveal>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 auto-rows-fr">

          {/* Card 1 */}
          <ScrollReveal delay={100}>
            <div className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-md transition-shadow h-full flex flex-col items-start justify-start">
              <p className="text-[var(--muted-sage)] uppercase tracking-widest text-[10px] sm:text-xs font-bold mb-4">
                Facebook
              </p>
              <h3 className="text-xl md:text-2xl font-serif text-[var(--diplomatic-blue)] font-bold mb-4">
                Let's Talk Campaign
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-10 flex-grow">
                A public campaign documenting ArtLords' grassroots peacebuilding work across Afghanistan.
              </p>
              <a
                href="#"
                className="mt-auto inline-flex items-center gap-2 bg-[var(--kandahar-sun)] text-[var(--diplomatic-blue)] font-bold text-xs sm:text-sm px-5 py-2.5 rounded-full hover:scale-105 transition-transform duration-300 w-fit"
              >
                Watch/Read
                <ExternalLink className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </a>
            </div>
          </ScrollReveal>

          {/* Card 2 */}
          <ScrollReveal delay={200}>
            <div className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-md transition-shadow h-full flex flex-col items-start justify-start">
              <p className="text-[var(--muted-sage)] uppercase tracking-widest text-[10px] sm:text-xs font-bold mb-4">
                Tufts University
              </p>
              <h3 className="text-xl md:text-2xl font-serif text-[var(--diplomatic-blue)] font-bold mb-4">
                The Chaotic Evacuation of Afghanistan
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-10 flex-grow">
                Firsthand account of the midnight evacuation convoy Lima helped coordinate, August 2021.
              </p>
              <a
                href="#"
                className="mt-auto inline-flex items-center gap-2 bg-[var(--kandahar-sun)] text-[var(--diplomatic-blue)] font-bold text-xs sm:text-sm px-5 py-2.5 rounded-full hover:scale-105 transition-transform duration-300 w-fit"
              >
                Watch/Read
                <ExternalLink className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </a>
            </div>
          </ScrollReveal>

          {/* Card 3 */}
          <ScrollReveal delay={300}>
            <div className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-md transition-shadow h-full flex flex-col items-start justify-start">
              <p className="text-[var(--muted-sage)] uppercase tracking-widest text-[10px] sm:text-xs font-bold mb-4">
                Asian Diaspora / TikTok
              </p>
              <h3 className="text-xl md:text-2xl font-serif text-[var(--diplomatic-blue)] font-bold mb-4">
                How Afghans Celebrate Nowruz
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-10 flex-grow">
                Celebrating Afghan cultural resilience through Nowruz traditions in the diaspora.
              </p>
              <a
                href="#"
                className="mt-auto inline-flex items-center gap-2 bg-[var(--kandahar-sun)] text-[var(--diplomatic-blue)] font-bold text-xs sm:text-sm px-5 py-2.5 rounded-full hover:scale-105 transition-transform duration-300 w-fit"
              >
                Watch/Read
                <ExternalLink className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </a>
            </div>
          </ScrollReveal>

        </div>
      </div>
    </section>
  );
};

export default Documentary;