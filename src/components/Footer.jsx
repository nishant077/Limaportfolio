import { Facebook, Instagram, Linkedin } from "lucide-react";
import { MdMailOutline } from "react-icons/md";
// import TopographySVG from "./TopographySVG";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer
      className="relative overflow-hidden"
      style={{ backgroundColor: "var(--archive-ivory)" }}
    >
      {/* <TopographySVG color="var(--muted-sage)" opacity={0.2} /> */}

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10 py-16">
        {/* LIMA watermark */}
        <div
          className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden"
          aria-hidden="true"
        >
          <span
            className="font-serif font-bold text-[100px] lg:text-[300px] leading-none"
            style={{ color: "var(--diplomatic-blue)", opacity: 0.06 }}
          >
            LIMA
          </span>
        </div>

        <div className="relative flex justify-between flex-wrap gap-12 items-start">
          {/* Left */}
          <div>
            <h2
              className="font-serif text-5xl lg:text-6xl font-bold mb-4"
              style={{ color: "var(--diplomatic-blue)" }}
            >
              Let&apos;s <br></br>Connect
            </h2>
            <div className="max-w-xl">
            <p
              className="font-sans text-base mb-8"
              style={{ color: "var(--near-black)", opacity: 0.7 }}
            >
              Available for speaking engagements, media, research collaboration,
              and advocacy partnerships.
            </p>
            </div>
            <button className="px-6 text-white py-4 rounded-full font-medium" style={{backgroundColor: "var(--diplomatic-blue)"}}>
              Send a Message
            </button>
          </div>

          {/* Right */}
          <div className="flex flex-col gap-5">
            <div className="flex items-center gap-3" style={{ color: "var(--diplomatic-blue)" }}>
             <MdMailOutline size={20}/>
             <a
              href="mailto:limahalima@gmail.com"
              className="font-sans text-lg font-semibold link-underline"
              style={{ color: "var(--diplomatic-blue)" }}
            >
              limahalima@gmail.com
            </a>
            </div>
            <div className="flex items-center gap-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full text-[#1E459F] hover:text-white bg-white hover:bg-[#FABD32] transition-all duration-200 hover:scale-110"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full text-[#1E459F] hover:text-white  bg-white hover:bg-[#FABD32] transition-all duration-200 hover:scale-110"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full text-[#1E459F] hover:text-white bg-white hover:bg-[#FABD32] transition-all duration-200 hover:scale-110"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
            </div>
           
          </div>
        </div>

        <div
          className="relative mt-12 pt-6 flex flex-col sm:flex-row justify-between items-center gap-2 text-sm font-sans"
          style={{
            borderTop: "1px solid rgba(30,69,159,0.12)",
            color: "var(--near-black)",
            opacity: 0.6,
          }}
        >
        

        </div>
        <div className="text-center">
          <span className="text-center">© {year} by Lima Halima-Khalil. All rights reserved</span>
          </div>
      </div>
    </footer>
  );
}
