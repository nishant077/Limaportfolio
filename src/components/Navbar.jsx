import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, useRouter } from "../router";
import logo from "../assets/logolima.png";

const navLinks = [
    { label: "About", to: "/about" },
    { label: "Initiatives", to: "/initiatives" },
    { label: "Documentary", to: "/documentary" },
    { label: "Articles & Publications", to: "/articles" },
    { label: "Blog", to: "/blog" },
];

export default function Navbar() {
    const { path } = useRouter();
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 80);
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        if (mobileOpen) {
            setTimeout(() => setMobileOpen(false), 0);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [path]);

    useEffect(() => {
        document.body.style.overflow = mobileOpen ? "hidden" : "";
        return () => {
            document.body.style.overflow = "";
        };
    }, [mobileOpen]);

    const isActive = (to) => path === to;

    return (
        <>
            <header
                className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
                style={{
                    backgroundColor: scrolled ? "var(--archive-ivory)" : "transparent",
                    boxShadow: scrolled ? "0 2px 20px rgba(30,69,159,0.08)" : "none",
                }}
            >
                <nav className="px-6 max-w-7xl mx-auto lg:px-10 h-16 flex items-center justify-between">
                    {/* Logo */}
                    <Link
                        to="/"
                        className="flex items-center no-underline hover:scale-105 transition-transform duration-200"
                        data-ocid="nav.link.1"
                    >
                        <img
                            src={logo}
                            alt="LIMA"
                            className="h-12 w-auto object-contain rounded-full"
                        />
                    </Link>

                    {/* Desktop links */}
                    <div className="hidden lg:flex items-center gap-7">
                        {navLinks.map((link, i) => (
                            <Link
                                key={link.to}
                                to={link.to}
                                className="font-sans text-sm font-semibold tracking-wide relative no-underline transition-colors duration-200"
                                style={{
                                    color: isActive(link.to)
                                        ? "var(--diplomatic-blue)"
                                        : "var(--near-black)",
                                }}
                                data-ocid={`nav.link.${i + 2}`}
                            >
                                {link.label}
                                <span
                                    className="absolute -bottom-1 left-0 right-0 h-0.5 transition-transform duration-200"
                                    style={{
                                        backgroundColor: "var(--kandahar-sun)",
                                        transform: isActive(link.to) ? "scaleX(1)" : "scaleX(0)",
                                        transformOrigin: "left",
                                    }}
                                />
                            </Link>
                        ))}
                        <Link
                            to="/contact"
                            className="font-sans text-sm font-semibold px-5 py-2 rounded-full transition-all duration-200 no-underline hover:scale-105 hover:brightness-110"
                            style={{
                                backgroundColor: "var(--kandahar-sun)",
                                color: "var(--diplomatic-blue)",
                            }}
                            data-ocid="nav.contact_button"
                        >
                            Get in Touch
                        </Link>
                    </div>

                    {/* Hamburger */}
                    <button
                        className="lg:hidden p-2 rounded-md transition-colors"
                        style={{ color: "var(--diplomatic-blue)" }}
                        onClick={() => setMobileOpen(true)}
                        type="button"
                        aria-label="Open menu"
                        data-ocid="nav.hamburger_button"
                    >
                        <Menu size={24} />
                    </button>
                </nav>
            </header>

            {/* Mobile overlay */}
            {mobileOpen && (
                <div
                    className="fixed inset-0 z-[100] flex flex-col"
                    style={{ backgroundColor: "var(--diplomatic-blue)" }}
                >
                    <div className="flex items-center justify-between px-6 h-16">
                        <Link
                            to="/"
                            className="flex items-center no-underline"
                        >
                            <img
                                src={logo}
                                alt="LIMA"
                                className="h-12 w-auto object-contain brightness-0 invert"
                            />
                        </Link>
                        <button
                            type="button"
                            onClick={() => setMobileOpen(false)}
                            className="p-2 text-white"
                            aria-label="Close menu"
                        >
                            <X size={24} />
                        </button>
                    </div>
                    <nav className="flex flex-col justify-center flex-1 px-8 gap-8">
                        {navLinks.map((link, i) => (
                            <Link
                                key={link.to}
                                to={link.to}
                                className="font-serif text-4xl font-semibold no-underline transition-colors duration-200"
                                style={{
                                    color: isActive(link.to)
                                        ? "var(--kandahar-sun)"
                                        : "rgba(255,255,255,0.9)",
                                    animationDelay: `${i * 80}ms`,
                                }}
                                data-ocid={`nav.link.${i + 2}`}
                            >
                                {link.label}
                            </Link>
                        ))}
                        <Link
                            to="/contact"
                            className="inline-block font-sans text-sm font-semibold px-6 py-3 rounded-full no-underline w-fit mt-4"
                            style={{
                                backgroundColor: "var(--kandahar-sun)",
                                color: "var(--diplomatic-blue)",
                            }}
                            data-ocid="nav.contact_button"
                        >
                            Get in Touch
                        </Link>
                    </nav>
                </div>
            )}
        </>
    );
}
