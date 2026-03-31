export default function ImprintArc({
    className = "",
    variant = "hero",
    style,
}) {
    if (variant === "quote") {
        return (
            <svg
                viewBox="0 0 600 300"
                xmlns="http://www.w3.org/2000/svg"
                className={`absolute pointer-events-none ${className}`}
                style={style}
                aria-hidden="true"
            >
                <path
                    d="M50,150 C100,50 250,20 350,80 C450,140 500,200 550,180"
                    fill="none"
                    stroke="#FABD32"
                    strokeWidth="3"
                    opacity="0.7"
                />
                <path
                    d="M80,200 C150,100 300,60 420,120 C500,160 540,220 580,200"
                    fill="none"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeDasharray="8 6"
                    opacity="0.5"
                />
                <circle cx="340" cy="78" r="6" fill="#FABD32" opacity="0.6" />
                <circle cx="120" cy="155" r="4" fill="#FABD32" opacity="0.4" />
            </svg>
        );
    }

    if (variant === "contact") {
        return (
            <svg
                viewBox="0 0 400 400"
                xmlns="http://www.w3.org/2000/svg"
                className={`absolute pointer-events-none ${className}`}
                style={style}
                aria-hidden="true"
            >
                <path
                    d="M20,200 C80,80 200,40 320,100 C380,140 400,200 380,280"
                    fill="none"
                    stroke="#FABD32"
                    strokeWidth="2.5"
                    opacity="0.6"
                />
                <path
                    d="M40,240 C120,120 240,80 360,140"
                    fill="none"
                    stroke="white"
                    strokeWidth="1"
                    strokeDasharray="6 5"
                    opacity="0.35"
                />
                <circle cx="320" cy="100" r="5" fill="#FABD32" opacity="0.5" />
            </svg>
        );
    }

    return (
        <svg
            viewBox="0 0 500 400"
            xmlns="http://www.w3.org/2000/svg"
            className={`absolute pointer-events-none ${className}`}
            aria-hidden="true"
        >
            <path
                d="M-20,200 C60,60 200,20 340,80 C420,120 480,200 460,320"
                fill="none"
                stroke="#FABD32"
                strokeWidth="3"
                opacity="0.75"
            />
            <path
                d="M20,260 C100,120 260,60 400,140 C460,175 490,250 470,360"
                fill="none"
                stroke="#FABD32"
                strokeWidth="1.5"
                opacity="0.4"
            />
            <path
                d="M-10,160 C80,40 220,10 360,70 C430,105 480,180 460,290"
                fill="none"
                stroke="white"
                strokeWidth="1"
                strokeDasharray="8 5"
                opacity="0.3"
            />
            <circle cx="338" cy="80" r="7" fill="#FABD32" opacity="0.6" />
            <circle cx="80" cy="195" r="4" fill="#FABD32" opacity="0.4" />
        </svg>
    );
}
