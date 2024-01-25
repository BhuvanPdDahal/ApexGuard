import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic":
                    "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
            },
            spacing: {
                '1px': '1px',
                '40px': '40px',
                '45px': '45px',
                '50px': '50px',
            },
            colors: {
                'primary': '#244b23',
                'primarydark': '#173616',
                'secondary': '#beccea',
                'secondarydark': '#99aacf',
                'tertiary': '#bd5224',
                'tertiarydark': '#9e3609',
                'dim': '#ebedf2',
                'normal': '#454545',
                'grey': '#ccc',
            },
            minHeight: {
                'rem': 'calc(100vh - 61px)',
            },
            transitionProperty: {
                'bg': 'background-color',
            },
            lineHeight: {
                '40px': '40px',
                '50px': '50px',
            },
            boxShadow: {
                'first': 'rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px',
                'second': 'rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px',
                'third': 'rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px'
            }
        },
    },
    plugins: [],
};
export default config;
