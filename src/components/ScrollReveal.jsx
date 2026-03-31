import { useEffect, useRef } from "react";

export default function ScrollReveal({
    children,
    delay = 0,
    className = "",
    direction = "up",
}) {
    const ref = useRef(null);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        const transforms = {
            up: "translateY(30px)",
            left: "translateX(-30px)",
            scale: "scale(0.98) translateY(20px)",
        };

        el.style.opacity = "0";
        el.style.transform = transforms[direction];
        el.style.transition = `opacity 0.7s ease-out ${delay}ms, transform 0.7s ease-out ${delay}ms`;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    el.style.opacity = "1";
                    el.style.transform = "none";
                    observer.unobserve(el);
                }
            },
            { threshold: 0.1, rootMargin: "0px 0px -40px 0px" },
        );

        observer.observe(el);
        return () => observer.disconnect();
    }, [delay, direction]);

    return (
        <div ref={ref} className={className}>
            {children}
        </div>
    );
}
