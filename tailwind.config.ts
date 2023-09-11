import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                black: "#1E1E1E",
                "white-softer": "#F8F9FA",
                "green-light": "#B9F5D8",
                "green-dark": "#6B8F71",
                orange: "#FC9E4F"
            },
        },
    },
    plugins: [],
};
export default config;
