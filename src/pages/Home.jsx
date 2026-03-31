import {
  ArrowLeft,
  ArrowRight,
  ChevronDown,
  ChevronRight,
  Minus,
  Play,
  Plus,
} from "lucide-react";
import { useState } from "react";
import ImprintArc from "../components/ImprintArc";
import ScrollReveal from "../components/ScrollReveal";
import TopographySVG from "../components/TopographySVG";
import { Link } from "../router";

const institutions = [
  "The Fletcher School",
  "Tufts University",
  "ArtLords",
  "Asia Society",
  "Atlantic Council",
  "AAUW",
];

const accordionItems = [
  {
    title: "Education & Professional Background",
    body: "She holds a master\u2019s degree in International Security and Conflict Resolution from The Fletcher School and a bachelor\u2019s degree in Women and Gender Studies from Bucknell University. Co-Founder & Program Director of ArtLords, and founder of Paywand Afghanan Association.",
  },
  {
    title: "Research & Life Work",
    body: "Her research explores how youth, shaped by war and displacement, carry forward identity, hope, and resilience across the stages of life. As a practitioner, Lima has worked alongside civil society actors, women\u2019s groups, and youth movements for nearly two decades.",
  },
  {
    title: "Personal Background",
    body: "Born in Helmand province, she spent much of her childhood as a refugee in Quetta, Pakistan. After returning to Afghanistan in 2002, she spent nearly two decades working alongside civil society actors, women\u2019s groups, youth movements, and the national government.",
  },

];

const initiatives = [
  {
    num: "01",
    title: "South Asian Youth Conference (SAYC) 2017 \u2013 Kabul",
    body: "The South Asian Youth Conference 2017 was a three-day regional gathering of more than 100 young leaders from across South Asia held in Kabul, Afghanistan in April 2017.",
    link: "https://www.youtube.com/watch?v=1fFscWZntqE",
    linkLabel: "Watch on YouTube",
  },
  {
    num: "02",
    title: '"I See You" Campaign (2014)',
    body: "The “I See You” Campaign was a grassroots anti-corruption initiative co-founded in Afghanistan in 2014 by Lima and fellow activists and artists.",
    link: null,
    linkLabel: "Read More",
  },
  {
    num: "03",
    title: "Art Therapy / Body Mapping Initiative",
    body: "This art-based therapy initiative was developed by Lima through the adaptation of the body mapping method from the field of anthropology, combined with participatory visual art practices.",
    link: null,
    linkLabel: "Read More",
  },
];

const mediaCards = [

  {
    title: "The Chaotic Evacuation of Afghanistan",
    outlet: "Tufts University",
    body: "A firsthand account of the midnight evacuation convoy Lima helped coordinate during the fall of Kabul in August 2021.",
    link: "https://now.tufts.edu/2022/04/12/chaotic-evacuation-afghanistan-tufts-network-arranged-midnight-convoy",
  },
  {
    title:
      "International Women\u2019s Day 2024: Tackling the Unfinished Business of Gender Equality",
    outlet: "Asia Society",
    body: "Lima speaks on the unfinished business of Afghan women\u2019s rights and global gender equality at Asia Society\u2019s IWD 2024 convening.",
    link: "https://asiasociety.org/video/international-womens-day-2024-tackling-unfinished-business-gender-equality",
  },
  {
    title: "Let\u2019s Talk Campaign",
    outlet: "Facebook",
    body: "A public video campaign documenting the grassroots peacebuilding work of ArtLords across Afghanistan.",
    link: "https://www.facebook.com/ArtLordsNet/videos/192348809004904/",
  },
  {
    title: "How Afghans Celebrate Nowruz",
    outlet: "Asian Diaspora / TikTok",
    body: "Lima shares the cultural significance of Nowruz for Afghans in diaspora and at home.",
    link: "https://www.tiktok.com/@asiandiaspora/video/7347755399929466154",
  },
];

const awards = [
  { name: "The Clifford Roberts Graduate Fellowship", year: "2025" },
  {
    name: "Presidential Award for Civic Life \u2014 Tufts University",
    year: "2025",
  },
  {
    name: "The Atlantic Council\u2019s Millennium Fellowship",
    year: "2025\u20132026",
  },
  { name: "AAUW International Fellowship", year: "2017" },
  { name: "Asia Society 21 Fellow", year: "2023" },
  { name: "CSS Research Fellow \u2014 The Fletcher School", year: "2023" },
  {
    name: "Honos Civicus Society \u2014 Tish at Tufts University",
    year: "2023",
  },
];

export default function Home() {
  const [openAccordion, setOpenAccordion] = useState(null);
  const [carouselIndex, setCarouselIndex] = useState(0);

  const prevSlide = () =>
    setCarouselIndex((i) => (i - 1 + mediaCards.length) % mediaCards.length);
  const nextSlide = () => setCarouselIndex((i) => (i + 1) % mediaCards.length);

  return (
    <div>
      {/* ======================== HERO ======================== */}
      <section
        className="relative min-h-screen flex items-center overflow-hidden pt-16"
        style={{
          // Warm atmospheric radial glow on the left — creates depth without clutter
          background:
            "radial-gradient(ellipse 70% 80% at 20% 60%, rgba(250,189,50,0.06) 0%, transparent 60%), var(--archive-ivory)",
        }}
      >
        <div className="relative z-10 px-10 lg:px-16 w-full">
          {/* Main Hero Grid: Watermark, Heading/Text, Image */}
          <div className="grid grid-cols-1 xl:grid-cols-[auto_55fr_45fr] lg:grid-cols-[auto_1fr_1fr] gap-8 lg:gap-16 py-16 lg:py-20">

            {/* 1. LIMA Watermark */}
            <div
              className="flex justify-center items-center pointer-events-none select-none order-1 lg:order-1"
              aria-hidden="true"
            >
              {/* Desktop Vertical Watermark */}
              <span
                className="font-serif font-bold leading-none hidden lg:block"
                style={{
                  fontSize: "clamp(120px, 12vw, 180px)",
                  color: "var(--diplomatic-blue)",
                  opacity: 0.055,
                  writingMode: "vertical-rl",
                  textOrientation: "mixed",
                  transform: "rotate(180deg)",
                }}
              >
                LIMA
              </span>
              {/* Mobile Horizontal Watermark */}
              <span
                className="font-serif font-bold leading-none block lg:hidden pb-4 lg:pb-0"
                style={{
                  fontSize: "clamp(80px, 25vw, 120px)",
                  color: "var(--diplomatic-blue)",
                  opacity: 0.055,
                }}
              >
                LIMA
              </span>
            </div>

            {/* 2. Left Text Content */}
            <div className="order-2 lg:order-2">
              {/* Editorial tag line with Kandahar Sun accent rule */}
              <div
                className="flex items-center gap-3 mb-7 animate-fade-in"
                style={{ animationDelay: "0ms" }}
              >
                <span
                  className="block h-px w-8 flex-shrink-0"
                  style={{ backgroundColor: "var(--kandahar-sun)" }}
                />
                <p
                  className="font-sans font-semibold tracking-[0.18em] uppercase"
                  style={{ fontSize: "13px", color: "var(--muted-sage)" }}
                >
                  Human Security Expert &amp; Storyteller
                </p>
              </div>

              {/* H1 — let EB Garamond breathe at full scale */}
              <h1
                className="font-serif font-bold leading-[1.03] mb-7 text-7xl"
                style={{
                  color: "var(--diplomatic-blue)",
                  letterSpacing: "-0.01em",
                }}
              >
                <span
                  className="block animate-fade-slide-up"
                  style={{ animationDelay: "120ms" }}
                >
                  Hey there,
                </span>
                <span
                  className="block animate-fade-slide-up"
                  style={{ animationDelay: "210ms" }}
                >
                  I&apos;m Lima
                </span>
                <span
                  className="block animate-fade-slide-up"
                  style={{ animationDelay: "300ms" }}
                >
                  Halima-Khalil.
                </span>
              </h1>

              <p
                className="font-sans text-lg leading-[1.7] mb-10 max-w-lg animate-fade-slide-up"
                style={{
                  color: "var(--near-black)",
                  opacity: 0.8,
                  animationDelay: "420ms",
                }}
              >
                Co-Founder &amp; Program Director, ArtLords.
                <br />A Human Security Expert and Ph.D. in International
                Security and Human Security from The Fletcher School of Tufts
                University.
              </p>

              <div
                className="flex flex-wrap gap-4 animate-fade-in"
                style={{ animationDelay: "580ms" }}
              >
                <Link
                  to="/contact"
                  className="font-sans font-semibold px-8 py-3.5 rounded-full transition-all duration-200 hover:scale-105 hover:brightness-110 no-underline"
                  style={{
                    fontSize: "15px",
                    backgroundColor: "var(--kandahar-sun)",
                    color: "var(--diplomatic-blue)",
                    boxShadow: "0 4px 20px rgba(250,189,50,0.3)",
                  }}
                  data-ocid="hero.primary_button"
                >
                  Get in Touch
                </Link>
                <a
                  href="https://www.youtube.com/watch?v=1fFscWZntqE"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-sans font-semibold px-8 py-3.5 rounded-full border-2 flex items-center gap-2.5 transition-all duration-200 hover:scale-105 no-underline"
                  style={{
                    fontSize: "15px",
                    borderColor: "var(--diplomatic-blue)",
                    color: "var(--diplomatic-blue)",
                    backgroundColor: "transparent",
                  }}
                  data-ocid="hero.secondary_button"
                >
                  <Play size={14} fill="currentColor" /> Watch My Story
                </a>
              </div>
            </div>

            {/* Right \u2014 portrait placeholder (Image Container) */}
            <div className="relative flex justify-center lg:justify-end animate-slide-in-right order-3 lg:order-3">
              {/* ImprintArc behind the portrait */}
              <ImprintArc
                style={{
                  position: "absolute",
                  top: "-8%",
                  left: "-8%",
                  zIndex: 0,
                  width: "115%",
                  height: "115%",
                }}
              />

              {/* Diplomatic blue backing block — offset to the left */}
              <div
                className="absolute rounded-2xl"
                style={{
                  top: "5%",
                  left: "-6%",
                  right: "6%",
                  bottom: "-5%",
                  backgroundColor: "var(--diplomatic-blue)",
                  opacity: 0.12,
                  zIndex: 1,
                }}
              />

              {/* Kandahar Sun accent corner frame — bottom-right */}
              <div
                className="absolute z-20 pointer-events-none"
                style={{
                  bottom: "-10px",
                  right: "-10px",
                  width: "80px",
                  height: "80px",
                  borderBottom: "3px solid var(--kandahar-sun)",
                  borderRight: "3px solid var(--kandahar-sun)",
                  borderRadius: "0 0 16px 0",
                }}
              />
              {/* Top-left corner */}
              <div
                className="absolute z-20 pointer-events-none"
                style={{
                  top: "-10px",
                  left: "-10px",
                  width: "60px",
                  height: "60px",
                  borderTop: "3px solid var(--kandahar-sun)",
                  borderLeft: "3px solid var(--kandahar-sun)",
                  borderRadius: "16px 0 0 0",
                  opacity: 0.6,
                }}
              />

              <div
                className="relative z-10 w-full max-w-sm rounded-2xl overflow-hidden"
                style={{
                  aspectRatio: "4/5",
                  background:
                    "linear-gradient(160deg, var(--muted-sage) 0%, #4A6E72 40%, var(--diplomatic-blue) 100%)",
                  boxShadow:
                    "0 24px 72px rgba(30,69,159,0.28), 0 8px 24px rgba(30,69,159,0.12)",
                }}
              >
                {/* Inner texture overlay */}
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "radial-gradient(ellipse 80% 60% at 40% 30%, rgba(250,189,50,0.08) 0%, transparent 70%)",
                  }}
                />
                <div
                  className="absolute inset-0 flex flex-col items-center justify-center"
                  style={{ backgroundColor: "rgba(22,45,107,0.2)" }}
                >
                  <span
                    className="font-serif italic text-white text-xl text-center px-6"
                    style={{ opacity: 0.9, letterSpacing: "0.01em" }}
                  >
                    Lima&apos;s Portrait
                  </span>
                  <span
                    className="font-sans text-xs text-white mt-2"
                    style={{ opacity: 0.5, letterSpacing: "0.08em" }}
                  >
                    PHOTO PLACEHOLDER
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom topography — more prominent */}
        <div className="absolute bottom-0 left-0 right-0">
          <TopographySVG color="var(--feminist-wisdom)" opacity={0.18} />
        </div>

        {/* Scroll indicator */}
        <div
          className="absolute bottom-7 left-1/2 -translate-x-1/2 animate-bounce-y flex flex-col items-center gap-1"
          style={{ color: "var(--diplomatic-blue)", opacity: 0.45 }}
        >
          <span
            className="font-sans text-xs tracking-widest uppercase"
            style={{ fontSize: "10px" }}
          >
            Scroll
          </span>
          <ChevronDown size={22} />
        </div>
      </section>

      {/* ======================== TRUSTED BY ======================== */}
      <section
        className="py-14"
        style={{ backgroundColor: "var(--archive-ivory)" }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <p
              className="font-sans font-semibold tracking-[0.22em] uppercase text-center mb-8"
              style={{ fontSize: "12px", color: "var(--muted-sage)" }}
            >
              Trusted By
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {institutions.map((inst) => (
                <div
                  key={inst}
                  className="px-5 py-2.5 rounded-lg font-sans text-sm font-semibold transition-all duration-200 hover:opacity-100 cursor-default"
                  style={{
                    backgroundColor: "rgba(30,69,159,0.06)",
                    color: "var(--diplomatic-blue)",
                    opacity: 0.55,
                    border: "1px solid rgba(30,69,159,0.1)",
                  }}
                >
                  {inst}
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ======================== ABOUT PREVIEW ======================== */}
      <section className="py-20" style={{ backgroundColor: "#F8F6F1" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <ScrollReveal direction="left">
              <div
                className="rounded-2xl overflow-hidden w-full"
                style={{
                  aspectRatio: "3/4",
                  background:
                    "linear-gradient(160deg, var(--archive-ivory) 0%, var(--muted-sage) 60%, var(--diplomatic-blue) 100%)",
                  maxHeight: "500px",
                }}
              >
                <div className="w-full h-full flex items-center justify-center">
                  <span
                    className="font-serif italic text-white text-xl"
                    style={{ opacity: 0.8 }}
                  >
                    Candid Portrait
                  </span>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={150}>
              <p
                className="font-sans font-semibold tracking-[0.14em] uppercase mb-3"
                style={{ fontSize: "12px", color: "var(--muted-sage)" }}
              >
                About
              </p>
              <h2 className="text-4xl font-bold mb-3"
                style={{ color: "var(--diplomatic-blue)" }}
              >Guided by care and <br></br>urgency.</h2>
              <p
                className="font-sans text-lg leading-[1.7] mb-8"
                style={{ color: "var(--near-black)", opacity: 0.85 }}
              >
                Lima Halima-Khalil is a Human Security Expert and holds a Ph.D.
                in International Security and Human Security from The Fletcher
                School of Tufts University. Her research is guided by care and
                urgency; it explores how youth, shaped by war and displacement,
                carry forward identity, hope, and resilience.
              </p>

              <div className="divide-y divide-gray-300 border-b border-t border-gray-300">
                {accordionItems.map((item, i) => (
                  <div key={item.title} data-ocid={`about.panel.${i + 1}`}>
                    <button
                      type="button"
                      className="w-full flex items-center justify-between py-4 text-left cursor-pointer group"
                      onClick={() =>
                        setOpenAccordion(openAccordion === i ? null : i)
                      }
                      style={{ color: "var(--near-black)" }}
                    >
                      <h3 className="font-sans font-semibold text-base"
                        style={{ color: "var(--diplomatic-blue)" }}
                      >
                        {item.title}
                      </h3>
                      <span
                        className={`shrink-0 ml-3 transition-all duration-300 rounded-full border w-8 h-8 flex items-center justify-center ${openAccordion === i
                          ? "bg-[var(--kandahar-sun)] border-[var(--kandahar-sun)] text-white"
                          : "border-gray-300 text-[var(--kandahar-sun)] bg-transparent group-hover:bg-[var(--kandahar-sun)] group-hover:border-[var(--kandahar-sun)] group-hover:text-white"
                          }`}
                      >
                        {openAccordion === i ? (
                          <Minus size={18} />
                        ) : (
                          <Plus size={18} />
                        )}
                      </span>
                    </button>
                    <div
                      className="overflow-hidden transition-all ease-out"
                      style={{
                        maxHeight: openAccordion === i ? "200px" : "0",
                        opacity: openAccordion === i ? 1 : 0,
                        transitionDuration: "350ms",
                      }}
                    >
                      <p
                        className="font-sans text-base leading-[1.7] pb-5"
                        style={{ color: "var(--near-black)", opacity: 0.72 }}
                      >
                        {item.body}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <Link
                to="/about"
                className="inline-flex items-center gap-2 mt-9 font-sans font-semibold text-base link-underline no-underline group"
                style={{ color: "var(--diplomatic-blue)" }}
                data-ocid="about.link"
              >
                Read Full Bio
                <ChevronRight
                  size={18}
                  className="transition-transform duration-200 group-hover:translate-x-1"
                />
              </Link>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ======================== INITIATIVES ======================== */}
      <section
        className="py-20 flex items-center justify-center"
        style={{ backgroundColor: "rgba(143,168,154,0.1)" }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10 text-center">
          <ScrollReveal>
            <p
              className="font-sans font-semibold tracking-[0.14em] uppercase mb-3"
              style={{ fontSize: "12px", color: "var(--muted-sage)" }}
            >
              Work
            </p>
            <h2
              className="font-serif font-bold mb-12 text-4xl"
              style={{
                color: "var(--diplomatic-blue)",
                lineHeight: 1.1,
              }}
            >
              Initiatives
            </h2>
          </ScrollReveal>

          <div className="flex flex-col max-w-4xl mx-auto gap-8">
            {initiatives.map((item, i) => (
              <ScrollReveal key={item.num} delay={i * 100}>
                <div
                  className="relative rounded-2xl overflow-hidden transition-all duration-200 cursor-default group hover:-translate-y-1 hover:border-l-4 hover:border-[#FABD32]"
                  style={{
                    backgroundColor: "white",
                    boxShadow: "0 4px 20px rgba(30,69,159,0.08)",
                  }}
                  data-ocid={`initiatives.card.${i + 1}`}
                >
                  {/* Kandahar Sun top bar — becomes accent bar on hover via CSS group */}
                  {/* <div
                    className="h-1 w-full transition-all duration-300"
                    style={{
                      backgroundColor: "var(--kandahar-sun)",
                      opacity: 0.35,
                    }}
                  /> */}

                  {/* Grid layout inside the card */}
                  <div className="p-8 sm:p-10 grid grid-cols-1 md:grid-cols-2 gap-8 items-center relative">
                    {/* Number watermark — moved slightly lower / larger for the larger card */}
                    {/* <div
                      className="absolute top-4 right-6 font-serif font-bold leading-none pointer-events-none select-none z-0"
                      style={{
                        fontSize: "120px",
                        color: "var(--diplomatic-blue)",
                        opacity: 0.04,
                        lineHeight: 1,
                      }}
                      aria-hidden="true"
                    >
                      {item.num}
                    </div> */}

                    {/* Text block */}
                    <div className="order-2 md:order-1 relative z-10 text-3xl text-left">
                      <h3
                        className="font-semibold mb-4"
                        style={{
                          color: "var(--diplomatic-blue)",
                        }}
                      >
                        {item.title}
                      </h3>
                      <p
                        className="font-sans text-base leading-[1.7] text-justify mb-6"
                        style={{ color: "var(--near-black)", opacity: 0.72 }}
                      >
                        {item.body}
                      </p>
                      {item.link ? (
                        <a
                          href={item.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-sans text-base font-semibold link-underline inline-flex items-center gap-1 no-underline w-fit"
                          style={{ color: "var(--diplomatic-blue)" }}
                        >
                          {item.linkLabel}
                          <ChevronRight size={18} />
                        </a>
                      ) : (
                        <Link
                          to="/initiatives"
                          className="font-sans items-center  text-base font-semibold link-underline inline-flex gap-1 no-underline w-fit"
                          style={{ color: "var(--diplomatic-blue)" }}
                        >
                          {item.linkLabel}
                          <ChevronRight size={18} />
                        </Link>
                      )}
                    </div>

                    {/* Image Placeholder */}
                    <div className="order-1 md:order-2 relative z-10 w-full">
                      <div
                        className="w-full rounded-xl"
                        style={{
                          height: "240px",
                          background:
                            "linear-gradient(135deg, var(--muted-sage) 0%, var(--diplomatic-blue) 100%)",
                          opacity: 0.75,
                        }}
                      />
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ======================== PULL QUOTE ======================== */}
      {/* Ceremonial section: generous padding, grand type, proper ImprintArc framing */}
      <section
        className="relative overflow-hidden flex items-center justify-center"
        style={{
          backgroundColor: "var(--feminist-wisdom)",
          paddingTop: "clamp(80px, 12vw, 160px)",
          paddingBottom: "clamp(80px, 12vw, 160px)",
        }}
      >
        {/* ImprintArc positioned to frame — NOT stretched */}
        {/* <ImprintArc
          variant="quote"
          style={{
            position: "absolute",
            top: 0,
            right: 0,
            width: "55%",
            height: "100%",
            maxWidth: "700px",
          }}
        />
        <ImprintArc
          variant="quote"
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            width: "45%",
            height: "80%",
            maxWidth: "560px",
            transform: "rotate(180deg)",
          }}
        /> */}

        <ScrollReveal
          direction="scale"
          className="relative z-10 text-center max-w-5xl mx-auto px-6 lg:px-8"
        >
          {/* Large decorative open-quote glyph */}
          <div
            aria-hidden="true"
            className="font-serif font-bold leading-none select-none pointer-events-none mb-2"
            style={{
              fontSize: "clamp(80px, 14vw, 160px)",
              color: "var(--kandahar-sun)",
              opacity: 0.25,
              lineHeight: 0.7,
              marginBottom: "-0.15em",
            }}
          >
            &ldquo;
          </div>

          <blockquote>
            <p
              className="font-serif italic font-semibold text-white leading-[1.15]"
              style={{ fontSize: "clamp(36px, 5.5vw, 68px)" }}
            >
              I document conflict and build the resilience required.
            </p>
            <footer
              className="font-sans font-semibold mt-8"
              style={{
                fontSize: "18px",
                color: "rgba(255,255,255,0.65)",
                letterSpacing: "0.04em",
              }}
            >
              &#8212; Lima Halima-Khalil
            </footer>
          </blockquote>
        </ScrollReveal>
      </section>

      {/* ======================== DOCUMENTARY ======================== */}
      <section
        className="py-20 relative overflow-hidden"
        style={{ backgroundColor: "var(--diplomatic-blue)" }}
      >
        {/* Topography spans full section height — behind all content */}
        <div
          className="absolute inset-0 flex flex-col justify-between pointer-events-none"
          aria-hidden="true"
        >
          <TopographySVG color="white" opacity={0.07} />
          <TopographySVG color="white" opacity={0.05} className="rotate-180" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
          <ScrollReveal>
            <p
              className="font-sans font-semibold tracking-[0.14em] uppercase mb-3 text-white"
              style={{ fontSize: "12px", opacity: 0.65 }}
            >
              Media
            </p>
            <h2
              className="font-serif font-bold text-white mb-12 text-4xl"
            >
              Documentary &amp; Media Speeches
            </h2>
          </ScrollReveal>

          {/* Desktop carousel */}
          <div className="hidden lg:block">
            <div className="relative">
              <div className="overflow-hidden">
                <div
                  className="flex transition-transform duration-500 ease-out gap-6"
                  style={{
                    transform: `translateX(calc(-${carouselIndex * 50}% - ${carouselIndex * 12}px))`,
                  }}
                >
                  {mediaCards.map((card, i) => (
                    <div
                      key={card.title}
                      className="shrink-0 rounded-2xl p-10 w-[calc(50%-12px)]"
                      style={{
                        backgroundColor: "var(--dark-navy)",
                        border: "1px solid rgba(255,255,255,0.06)",
                      }}
                      data-ocid={`documentary.card.${i + 1}`}
                    >
                      <p
                        className="font-sans font-semibold tracking-widest uppercase mb-4"
                        style={{ fontSize: "12px", color: "var(--muted-sage)" }}
                      >
                        {card.outlet}
                      </p>
                      <h3 className="text-2xl font-semibold text-white mb-4 leading-snug">
                        {card.title}
                      </h3>
                      <p
                        className="font-sans text-sm leading-[1.7] mb-6"
                        style={{ color: "rgba(255,255,255,0.65)" }}
                      >
                        {card.body}
                      </p>
                      <a
                        href={card.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 font-sans text-sm font-semibold no-underline px-5 py-2 rounded-full transition-all duration-200 hover:brightness-110 text-white hover:text-[#FABD32]"
                        style={{
                          backgroundColor: "rgba(250,189,50,0.15)",
                          border: "1px solid rgba(250,189,50,0.25)",
                        }}
                      >
                        Watch / Read
                        <ChevronRight size={18} />
                      </a>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex gap-3 mt-8">
                <button
                  type="button"
                  onClick={prevSlide}
                  className="w-11 h-11 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110 hover:brightness-110"
                  style={{
                    backgroundColor: "var(--kandahar-sun)",
                    color: "var(--diplomatic-blue)",
                    boxShadow: "0 4px 12px rgba(250,189,50,0.3)",
                  }}
                  aria-label="Previous"
                  data-ocid="documentary.prev_button"
                >
                  <ArrowLeft size={16} />
                </button>
                <button
                  type="button"
                  onClick={nextSlide}
                  className="w-11 h-11 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110 hover:brightness-110"
                  style={{
                    backgroundColor: "var(--kandahar-sun)",
                    color: "var(--diplomatic-blue)",
                    boxShadow: "0 4px 12px rgba(250,189,50,0.3)",
                  }}
                  aria-label="Next"
                  data-ocid="documentary.next_button"
                >
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>
          </div>

          {/* Mobile stack */}
          <div className="lg:hidden flex flex-col gap-5">
            {mediaCards.map((card, i) => (
              <div
                key={card.title}
                className="rounded-2xl p-6"
                style={{
                  backgroundColor: "var(--dark-navy)",
                  border: "1px solid rgba(255,255,255,0.06)",
                }}
                data-ocid={`documentary.card.${i + 1}`}
              >
                <p
                  className="font-sans font-semibold tracking-widest uppercase mb-2"
                  style={{ fontSize: "11px", color: "var(--muted-sage)" }}
                >
                  {card.outlet}
                </p>
                <h3 className="font-serif text-lg font-semibold text-white mb-3">
                  {card.title}
                </h3>
                <p
                  className="font-sans text-sm leading-[1.7] mb-4"
                  style={{ color: "rgba(255,255,255,0.65)" }}
                >
                  {card.body}
                </p>
                <a
                  href={card.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-sans text-sm font-semibold no-underline"
                  style={{ color: "var(--kandahar-sun)" }}
                >
                  Watch / Read \u2192
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ======================== AWARDS ======================== */}
      <section
        className="py-20"
        style={{ backgroundColor: "var(--archive-ivory)" }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <ScrollReveal>
            <p
              className="font-sans font-semibold tracking-[0.14em] uppercase mb-3"
              style={{ fontSize: "12px", color: "var(--muted-sage)" }}
            >
              Recognition
            </p>
            <h2
              className="font-serif font-bold mb-12 text-4xl"
              style={{
                color: "var(--diplomatic-blue)",
                lineHeight: 1.1,
              }}
            >
              Awards &amp; Fellowships
            </h2>
          </ScrollReveal>

          <div
            className="rounded-2xl overflow-hidden"
            style={{ border: "1px solid rgba(30,69,159,0.1)" }}
          >
            {awards.map((award, i) => (
              <div
                key={award.name}
                className="flex items-center justify-between px-7 py-5 transition-all duration-150 group cursor-pointer relative"
                style={{
                  backgroundColor: "white",
                }}
                data-ocid={`awards.row.${i + 1}`}
              >
                {/* Kandahar Sun left accent — CSS transition via pseudo-approach using inline style trick */}
                <div
                  className="absolute left-0 top-0 bottom-0 w-0 group-hover:w-1 transition-all duration-200"
                  style={{ backgroundColor: "var(--kandahar-sun)" }}
                />
                <span
                  className="font-serif font-semibold text-lg"
                  style={{ color: "var(--diplomatic-blue)" }}
                >
                  {award.name}
                </span>
                <span
                  className="font-sans text-lg font-semibold flex-shrink-0 ml-4"
                  style={{
                    color: "var(--muted-sage)",
                  }}
                >
                  {award.year}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>


    </div>
  );
}
