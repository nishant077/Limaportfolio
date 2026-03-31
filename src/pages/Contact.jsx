import {
  AlertCircle,
  CheckCircle,
  Facebook,
  Instagram,
  Linkedin,
  Loader2,
} from "lucide-react";
import { useState } from "react";
// import { Subject } from "../backend";
import ImprintArc from "../components/ImprintArc";
// import { useActor } from "../hooks/useActor";

export default function Contact() {
  // const { actor } = useActor();
  const [form, setForm] = useState({
    name: "",
    email: "",
    // subject: Subject.speakingEngagement,
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState("idle");

  const handleChange = (field, value) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   if (!actor) return;
  //   setStatus("loading");
  //   try {
  //     await actor.submitContact(
  //       form.name,
  //       form.email,
  //       form.subject,
  //       form.message,
  //     );
  //     setStatus("success");
  //   } catch {
  //     setStatus("error");
  //   }
  // };

  return (
    <div className="min-h-screen max-w-7xl mx-auto px-6 md:px-10 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-10 py-16 lg:py-20">
      {/* Left panel */}
      <div
        className="relative w-full flex flex-col justify-center px-10 py-20 overflow-hidden"
        style={{ backgroundColor: "var(--diplomatic-blue)" }}
      >
        {/* <ImprintArc
          variant="contact"
          className="right-0 top-0 w-80 h-80"
          style={{
            position: "absolute",
            right: 0,
            top: 0,
            width: "20rem",
            height: "20rem",
          }}
        /> */}
        <div className="relative z-10 max-w-md">
          <p
            className="font-sans text-xs font-semibold tracking-[0.16em] uppercase mb-6"
            style={{ color: "var(--kandahar-sun)" }}
          >
            Connect
          </p>
          <blockquote
            className="font-serif italic font-semibold text-white mb-10 leading-snug"
            style={{ fontSize: "clamp(22px, 3vw, 32px)" }}
          >
            &ldquo;For Lima, storytelling is not just a research method; it is a
            way of living.&rdquo;
          </blockquote>

          <div className="flex items-center gap-4 mb-6">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full transition-all duration-200 hover:scale-110"
              style={{
                color: "white",
                backgroundColor: "rgba(255,255,255,0.1)",
              }}
              aria-label="Facebook"
            >
              <Facebook size={20} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full transition-all duration-200 hover:scale-110"
              style={{
                color: "white",
                backgroundColor: "rgba(255,255,255,0.1)",
              }}
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full transition-all duration-200 hover:scale-110"
              style={{
                color: "white",
                backgroundColor: "rgba(255,255,255,0.1)",
              }}
              aria-label="Instagram"
            >
              <Instagram size={20} />
            </a>
          </div>
          <a
            href="mailto:limahalima@gmail.com"
            className="font-sans text-base text-white link-underline no-underline"
            style={{ opacity: 0.85 }}
          >
            limahalima@gmail.com
          </a>
        </div>
      </div>

      {/* Right panel */}
      <div
        className="w-full flex items-start justify-center py-20 rounded-3xl"
        style={{ backgroundColor: "var(--archive-ivory)" }}
      >
        <div className="w-full max-w-xl">
          <h1
            className="font-serif font-bold mb-3 text-4xl"
            style={{
              color: "var(--diplomatic-blue)",
              lineHeight: 1.1,
            }}
          >
            Let&apos;s Connect
          </h1>
          <p
            className="font-sans text-lg leading-[1.65] mb-10"
            style={{ color: "var(--near-black)", opacity: 0.75 }}
          >
            Available for speaking engagements, media, research collaboration,
            and advocacy partnerships.
          </p>

          {status === "success" ? (
            <div
              className="flex flex-col items-center text-center py-16 px-8 rounded-2xl"
              style={{ backgroundColor: "rgba(143,168,154,0.15)" }}
              data-ocid="contact.success_state"
            >
              <CheckCircle
                size={56}
                className="mb-4"
                style={{ color: "var(--muted-sage)" }}
              />
              <h2
                className="font-serif font-semibold mb-2"
                style={{ fontSize: "28px", color: "var(--diplomatic-blue)" }}
              >
                Thank you, {form.name}!
              </h2>
              <p
                className="font-sans text-base"
                style={{ color: "var(--near-black)", opacity: 0.7 }}
              >
                Your message has been received. Lima will be in touch soon.
              </p>
            </div>
          ) : (
            <form
              // onSubmit={handleSubmit}
              className="flex flex-col gap-5"
              noValidate
            >
              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="contact-name"
                  className="font-sans text-sm font-semibold"
                  style={{ color: "var(--near-black)" }}
                >
                  Full Name{" "}
                  <span style={{ color: "var(--feminist-wisdom)" }}>*</span>
                </label>
                <input
                  id="contact-name"
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => handleChange("name", e.target.value)}
                  placeholder="Your full name"
                  className="w-full px-4 py-3 rounded-xl font-sans text-base outline-none transition-all duration-200"
                  style={{
                    border: "1.5px solid rgba(30,69,159,0.2)",
                    backgroundColor: "white",
                    color: "var(--near-black)",
                  }}
                  data-ocid="contact.name_input"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="contact-email"
                  className="font-sans text-sm font-semibold"
                  style={{ color: "var(--near-black)" }}
                >
                  Email Address{" "}
                  <span style={{ color: "var(--feminist-wisdom)" }}>*</span>
                </label>
                <input
                  id="contact-email"
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => handleChange("email", e.target.value)}
                  placeholder="you@example.com"
                  className="w-full px-4 py-3 rounded-xl font-sans text-base outline-none transition-all duration-200"
                  style={{
                    border: "1.5px solid rgba(30,69,159,0.2)",
                    backgroundColor: "white",
                    color: "var(--near-black)",
                  }}
                  data-ocid="contact.email_input"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="contact-subject"
                  className="font-sans text-sm font-semibold"
                  style={{ color: "var(--near-black)" }}
                >
                  Subject{" "}
                  <span style={{ color: "var(--feminist-wisdom)" }}>*</span>
                </label>
                <input
                  id="contact-subject"
                  required
                  value={form.subject}
                  onChange={(e) => handleChange("subject", e.target.value)}
                  placeholder="Subject"
                  className="w-full px-4 py-3 rounded-xl font-sans text-base outline-none transition-all duration-200 resize-none"
                  style={{
                    border: "1.5px solid rgba(30,69,159,0.2)",
                    backgroundColor: "white",
                    color: "var(--near-black)",
                  }}
                  data-ocid="contact.subject_text"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="contact-message"
                  className="font-sans text-sm font-semibold"
                  style={{ color: "var(--near-black)" }}
                >
                  Message{" "}
                  <span style={{ color: "var(--feminist-wisdom)" }}>*</span>
                </label>
                <textarea
                  id="contact-message"
                  required
                  rows={5}
                  value={form.message}
                  onChange={(e) => handleChange("message", e.target.value)}
                  placeholder="Tell Lima about your inquiry..."
                  className="w-full px-4 py-3 rounded-xl font-sans text-base outline-none transition-all duration-200 resize-none"
                  style={{
                    border: "1.5px solid rgba(30,69,159,0.2)",
                    backgroundColor: "white",
                    color: "var(--near-black)",
                  }}
                  data-ocid="contact.message_textarea"
                />
              </div>

              {status === "error" && (
                <div
                  className="flex items-center gap-3 px-4 py-3 rounded-xl"
                  style={{
                    backgroundColor: "rgba(93,58,93,0.08)",
                    color: "var(--feminist-wisdom)",
                  }}
                  data-ocid="contact.error_state"
                >
                  <AlertCircle size={18} />
                  <span className="font-sans text-sm">
                    Something went wrong. Please try again.
                  </span>
                </div>
              )}

              <button
                type="submit"
                disabled={status === "loading"}
                className="w-full py-4 rounded-xl font-sans font-semibold text-base text-white flex items-center justify-center gap-2 transition-all duration-200 hover:brightness-110 disabled:opacity-70 disabled:cursor-not-allowed mt-2"
                style={{ backgroundColor: "var(--diplomatic-blue)" }}
                data-ocid="contact.submit_button"
              >
                {status === "loading" ? (
                  <>
                    <Loader2 size={18} className="animate-spin" />
                    <span data-ocid="contact.loading_state">Sending...</span>
                  </>
                ) : (
                  "Send Message"
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
