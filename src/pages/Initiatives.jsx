import React, { useEffect } from 'react';
import ScrollReveal from "../components/ScrollReveal";


const initiativesData = [
  {
    id: 1,
    type: 'video',
    mediaUrl: 'https://www.youtube.com/embed/1fFscWZntqE?si=WLKojM_ie8cPQ-q7', // Placeholder for actual video
    tags: ['Peacebuilding', 'Afghanistan', 'Youth'],
    title: 'South Asian Youth Conference (SAYC) 2017',
    location: 'Kabul, Afghanistan',
    description: 'The South Asian Youth Conference 2017 was a three-day regional gathering of more than 100 young leaders from across South Asia held in Kabul, Afghanistan in April 2017. It was designed as a dynamic platform for youth to build capacity, forge cross-border connections, and engage in meaningful dialogue on shared challenges such as peacebuilding, cultural diversity, gender equity, and youth engagement. Through workshops, panel discussions, network-building activities, and interactive sessions. The conference brought together young changemakers to exchange ideas, foster mutual understanding, and strengthen regional cooperation for a more peaceful and inclusive South Asia.'
  },
  {
    id: 2,
    type: 'image',
    mediaUrl: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80',
    tags: ['Art Advocacy', 'Anti-Corruption', 'Public Art'],
    title: '"I See You" Campaign (2014)',
    location: 'Afghanistan',
    description: 'The "I See You" Campaign was a grassroots anti-corruption initiative co-founded in Afghanistan in 2014 by Lima and fellow activists and artists. The campaign centered on a large public mural depicting two watchful eyes painted on the wall of the Ministry of Education, symbolizing public oversight of corrupt officials. By placing the mural directly on a government building associated with widespread corruption, the campaign transformed public art into a civic tool, signaling that corruption was being seen, named, and challenged by ordinary citizens.'
  },
  {
    id: 3,
    type: 'image',
    mediaUrl: 'https://images.unsplash.com/photo-1528605105345-5344ea20e269?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80',
    tags: ['Healing', 'Art Therapy', 'Women'],
    title: 'Art Therapy / Body Mapping Initiative',
    location: 'Afghanistan',
    description: 'This art-based therapy initiative was developed by Lima through the adaptation of the body mapping method from the field of anthropology, combined with participatory visual art practices. By translating body mapping into a creative, accessible art process, the initiative created a powerful tool for trauma expression and healing in contexts of conflict, displacement, and repression. The method enables participants—particularly refugees and individuals living in suppressed environments—to visually map emotions, memories, and experiences onto the body, offering a non-verbal pathway to process trauma, reclaim agency, and restore a sense of self. This approach has since been used and adapted in trauma-healing spaces for refugees and communities affected by violence, where conventional therapeutic tools are often inaccessible or unsafe.'
  }
];

const Initiatives = () => {


  return (
    <section className="bg-[var(--archive-ivory)] md:pb-20 pb-10 md:pt-32 pt-20 px-4 sm:px-6 lg:px-8 min-h-screen overflow-hidden">
      <div className="max-w-4xl mx-auto">
        {/* Header Section */}

        <div className="sr-header text-center mb-16">
          <ScrollReveal>
            <p className="text-[var(--muted-sage)] uppercase tracking-[0.14em] text-[12px] sm:text-xs font-semibold mb-10">
              Work & Impact
            </p>
            <h1 className="text-4xl md:text-6xl font-serif text-[var(--diplomatic-blue)] mb-6 font-bold">
              Initiatives
            </h1>
            <p className="text-gray-800 max-w-2xl mx-auto leading-relaxed text-sm sm:text-base font-medium">
              From mural campaigns to youth conferences, each initiative is <br className="hidden sm:block" />
              rooted in the belief that art, dialogue, and community can build the <br className="hidden sm:block" />
              resilience that conflict tries to destroy.
            </p>
          </ScrollReveal>
        </div>


        {/* Cards Section */}

        <div className="space-y-16">

          {initiativesData.map((initiative) => (
            <ScrollReveal>
              <div
                key={initiative.id}
                className="sr-card bg-white rounded-[2rem] overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300"
              >
                {/* Media Section */}

                <div className="w-full aspect-video relative bg-gray-100">


                  {initiative.type === 'video' ? (
                    <iframe
                      className="absolute inset-0 w-full h-full object-cover"
                      src={initiative.mediaUrl}
                      title={initiative.title}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  ) : (
                    <img
                      src={initiative.mediaUrl}
                      alt={initiative.title}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  )}

                </div>

                {/* Content Section */}
                <div className="p-8 sm:p-10 md:p-12">
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">

                    {initiative.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-blue-50 text-[var(--diplomatic-blue)] text-[10px] sm:text-xs font-semibold tracking-wide rounded-full border border-blue-100/50"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Title and Location */}
                  <div className="mb-6">
                    <h2 className="text-2xl sm:text-3xl font-serif text-[var(--diplomatic-blue)] mb-3 font-bold">
                      {initiative.title}
                    </h2>
                    <p className="text-xs sm:text-sm text-gray-500 font-semibold tracking-wide">
                      {initiative.location}
                    </p>
                  </div>

                  {/* Description */}
                  <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                    {initiative.description}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}


        </div>

      </div>
    </section>
  );
};

export default Initiatives;