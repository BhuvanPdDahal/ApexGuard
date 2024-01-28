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
                '20px': '20px',
                '35px': '35px',
                '40px': '40px',
                '45px': '45px',
                '50px': '50px',
                '60px': '60px',
                '200px': '200px',
                '250px': '250px',
            },
            colors: {
                'primarylight': '#15803d',
                'primary': '#244b23',
                'primarydark': '#173616',
                'secondary': '#beccea',
                'secondarydark': '#99aacf',
                'tertiary': '#bd5224',
                'tertiarydark': '#9e3609',
                'dim': '#ebedf2',
                'normal': '#454545',
                'grey': '#ccc',
                'darkgrey': '#aaa',
                'medium': '#999',
            },
            fontSize: {
                '15px': '15px',
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
                '58px': '58px',
            },
            boxShadow: {
                'first': 'rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px',
                'second': 'rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px',
                'third': 'rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px'
            },
            screens: {
                'vs': '460px',
            }
        },
    },
    plugins: [],
};
export default config;
