import ImprintArc from "../components/ImprintArc";
import ScrollReveal from "../components/ScrollReveal";
import TopographySVG from "../components/TopographySVG";

const timeline = [
  {

    location: "Born",
    note: "Helmand Province, Afghanistan",
  },
  {

    location: "Refugee Years",
    note: "Quetta, Pakistan",
  },
  {

    location: "Return & Civil Work",
    note: "Kabul, Afghanistan (2002-2021",
  },
  {

    location: "Scholarship & Advocacy",
    note: "Tufts University, USA",
  },
];

export default function About() {
  return (
    <div className="pt-20">
      {/* Hero Banner */}
      <section
        className="relative pt-32 pb-20 flex items-center justify-center overflow-hidden"
        style={{ backgroundColor: "var(--diplomatic-blue)", minHeight: "50vh" }}
      >
        {/* <ImprintArc
          className="w-96 h-96 right-8 top-8"
          style={{
            position: "absolute",
            right: "2rem",
            top: "2rem",
            width: "24rem",
            height: "24rem",
          }}
        /> */}
        <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
          <p
            className="font-sans text-xs font-semibold tracking-[0.16em] uppercase mb-6"
            style={{ color: "var(--kandahar-sun)" }}
          >
            About Lima
          </p>
          <h1
            className="font-serif italic font-semibold text-white leading-tight"
            style={{ fontSize: "clamp(32px, 5vw, 56px)" }}
          >
            &ldquo;I document conflict and build the resilience required.&rdquo;
          </h1>
        </div>
      </section>

      {/* <TopographySVG
        color="var(--diplomatic-blue)"
        opacity={0.08}
        className="-mt-px"
      /> */}

      {/* Full Bio */}
      <section className="py-20" style={{ backgroundColor: "#E1DCCA" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Sticky photo */}
            <aside className="lg:w-[38%] flex-shrink-0">
              <div
                className="rounded-2xl overflow-hidden lg:sticky"
                style={{
                  top: "6rem",
                  aspectRatio: "3/4",
                  maxHeight: "520px",
                  background:
                    "linear-gradient(145deg, var(--muted-sage) 0%, var(--feminist-wisdom) 60%, var(--diplomatic-blue) 100%)",
                }}
              >
                <div className="w-full h-full flex items-center justify-center">
                  <span
                    className="font-serif italic text-white text-xl"
                    style={{ opacity: 0.85 }}
                  >
                    Lima&apos;s Portrait
                  </span>
                </div>
              </div>
            </aside>

            {/* Scrollable content */}
            <div className="lg:w-[62%]">

              {/* Education & Professional */}
              <ScrollReveal delay={100}>
                <h2
                  className="font-serif font-semibold mb-5 text-4xl"
                  style={{ color: "var(--diplomatic-blue)" }}
                >
                  My Journey
                </h2>
                <p
                  className="font-sans text-lg leading-[1.65] mb-5"
                  style={{ color: "var(--near-black)" }}
                >
                  Lima Halima-Khalil is a Human Security Expert and holds a
                  Ph.D. in International Security and Human Security from The
                  Fletcher School of Tufts University. Her research is guided by
                  care and urgency; it explores how youth, shaped by war and
                  displacement, carry forward identity, hope, and resilience
                  across the stages of life.
                </p>
                <p
                  className="font-sans text-lg leading-[1.65] mb-12"
                  style={{ color: "var(--near-black)" }}
                >
                  She holds a master&apos;s degree in International Security and
                  Conflict Resolution from The Fletcher School and a
                  bachelor&apos;s degree in Women and Gender Studies from
                  Bucknell University. She is the Co-Founder &amp; Program
                  Director of ArtLords, and founder of Paywand Afghanan
                  Association, a grassroots nonprofit committed to justice for
                  Afghan women through research, advocacy, and the defense of
                  legal rights.
                </p>
              </ScrollReveal>

              {/* Opening blockquote */}
              <ScrollReveal>
                <blockquote
                  className="mb-12 pl-6 italic font-serif"
                  style={{
                    borderLeft: "3px solid var(--kandahar-sun)",
                    color: "var(--feminist-wisdom)",
                    fontSize: "22px",
                    lineHeight: 1.65,
                  }}
                >
                  &ldquo;After I gave my family&apos;s information to the State
                  Department, within hours, there was this flood of [U.S.
                  government staff] reaching out. &lsquo;Lima, help us identify
                  women at risk. Do you know these women on this list?&rsquo; I
                  would say, &lsquo;Yes, I know these women: These are
                  ministers; these are deputy ministers.&rsquo; It became a
                  nonstop thing, just working on lists and crying and filling
                  out lists. Within 24 hours, I filled dozens of Excel
                  sheets.&rdquo;
                </blockquote>
              </ScrollReveal>

              {/* Research */}
              <ScrollReveal delay={100}>
                {/* <h2
                  className="font-serif font-semibold mb-5"
                  style={{ fontSize: "30px", color: "var(--diplomatic-blue)" }}
                >
                  Research &amp; Life Work
                </h2> */}
                <p
                  className="font-sans text-lg leading-[1.65] mb-5"
                  style={{ color: "var(--near-black)" }}
                >
                  Born in Helmand province — her father from Kandahar, her mother from Helmand — she is the second of seven siblings. She spent much of her childhood as a refugee in Quetta, Pakistan. After returning to Afghanistan in 2002, she spent nearly two decades working alongside civil society actors, women's groups, youth movements, and the national government.
                </p>
                <p
                  className="font-sans text-lg leading-[1.65] mb-12"
                  style={{ color: "var(--near-black)" }}>
                  After 2021, when Afghanistan was handed to the Taliban, she lost access to her home once again. She is married to Omaid Sharifi and together they raise their daughter, Hasti.
                </p>
              </ScrollReveal>

              {/* Timeline */}
              <ScrollReveal delay={100}>
                <h2
                  className="font-serif font-semibold mb-12 text-4xl"
                  style={{ color: "var(--diplomatic-blue)" }}
                >
                  Path of Resilience
                </h2>
                <div className="relative">
                  {/* Vertical line */}
                  <div
                    className="absolute left-5 top-3 bottom-3 w-0.5"
                    style={{
                      backgroundColor: "var(--diplomatic-blue)",
                      opacity: 0.2,
                    }}
                  />
                  <div className="flex flex-col gap-10">
                    {timeline.map((item, i) => (
                      <ScrollReveal key={item.year} delay={i * 150}>
                        <div className="flex gap-6">
                          {/* Dot */}
                          <div className=" w-10 flex items-start pt-1">
                            <div
                              className="w-4 h-4 rounded-full border-2"
                              style={{
                                backgroundColor: "var(--kandahar-sun)",
                                borderColor: "var(--kandahar-sun)",
                              }}
                            />
                          </div>
                          <div>
                            <p
                              className="font-serif font-semibold text-xl mb-1"
                              style={{ color: "var(--diplomatic-blue)" }}
                            >
                              {item.location}
                            </p>
                            <p
                              className="font-sans text-base leading-[1.65]"
                              style={{
                                color: "var(--near-black)",
                                opacity: 0.75,
                              }}
                            >
                              {item.note}
                            </p>
                          </div>
                        </div>
                      </ScrollReveal>
                    ))}
                  </div>
                </div>
              </ScrollReveal>

              {/* Love, Loss */}
              {/* <ScrollReveal delay={100} className="mt-12">
                <h2
                  className="font-serif font-semibold mb-5"
                  style={{ fontSize: "30px", color: "var(--diplomatic-blue)" }}
                >
                  Love, Loss &amp; the Unbreakable Will to Hope
                </h2>
                <p
                  className="font-sans text-lg leading-[1.65]"
                  style={{ color: "var(--near-black)" }}
                >
                  After 2021, when Afghanistan was handed to the Taliban, Lima
                  lost access to her home once again. She is married to Omaid
                  Sharifi and together they raise their daughter, Hasti. Through
                  every displacement, every loss, she has chosen to document, to
                  build, and to hope — not as an act of naivety, but as a
                  radical, deliberate choice.
                </p>
              </ScrollReveal> */}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
