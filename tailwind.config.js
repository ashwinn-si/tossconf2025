/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            fontSize: {
                base: "1rem", // 16px
                h1: "1.618rem", // 26px
                h2: "2.618rem", // 42px
                h3: "4.236rem", // 68px
            },
        },
    },
    plugins: [],
};