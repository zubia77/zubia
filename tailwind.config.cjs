/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                color: {
                    10: "#133b5c",
                    20: "#d7d0cb",
                    30: "#22577E",
                    40: "#5584AC",
                    50: "#95D1CC",
                    60: "#F6F2D4",
                    70: "#1C6758",
                    80: "#3D8361",
                    90: "#D6CDA4",
                    100: "#EEF2E6",
                    110: "#B91646",
                },
            },
            fontFamily: {
                style1: "Delius Swash Caps",
                style2: "Comfortaa",
                style3: "Short Stack",
                style4: "Annie Use Your Telescope",
                style5: "Architects Daughter",
                style6: "B612 Mono",
                style7: "Baloo Da 2",
                style8: "Bellota",
                style9: "Coming Soon",
                style9: "Grand Hotel",
                style10: "Indie Flower",
                style11: "Kalam",
                style12: "Mali",
                style13: "Oregano",
                style14: "Overlock",
                style15: "Pacifico",
                style16: "Pangolin",
                style17: "Shadows",
                style18: "Sunshiney",
                style19: "The Girl Next Door",
                style20: "Twinkle Star",

            },
            backgroundImage: {
                'main': "url('/images/logoZ.png')",
                'aboutMe': "url('/images/zubiRemovebg.png')",
            },
            boxShadow: {
                outer: "-2px -2px 24px 0px rgba(92,83,92,1)",
                inner: "inset 7px 10px 18px -1px rgba(92,87,92,1)",
            },
        },
    },
    plugins: [],
};
