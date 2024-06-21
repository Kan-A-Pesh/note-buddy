import { fontFamily } from "tailwindcss/defaultTheme";

import type { Config } from "tailwindcss";
const config = {
    darkMode: ["class"],
    content: [
        "./pages/**/*.{ts,tsx}",
        "./components/**/*.{ts,tsx}",
        "./app/**/*.{ts,tsx}",
        "./src/**/*.{ts,tsx}",
    ],
    prefix: "",
    theme: {
        colors: {
            primary: {
                "100": "#ECDDFD",
                "200": "#D7BCFC",
                "300": "#BE99F7",
                "400": "#AA7BFB",
                "500": "#8455E7",
                "600": "#653EC6",
                "700": "#522AA6",
                "800": "#431B85",
                "900": "#34106E",
            },
            secondary: {
                "100": "#F9FDE9",
                "200": "#F2FCD4",
                "300": "#E6F7BC",
                "400": "#D8F0A8",
                "500": "#C4E68A",
                "600": "#AECE7D",
                "700": "#799852",
                "800": "#5A6B47",
                "900": "#444E3A",
            },
            gray: {
                "1100": "#0B080F",
                "1000": "#120E18",
                "900": "#25222A",
                "800": "#403D43",
                "700": "#59565C",
                "600": "#757279",
                "500": "#8C898F",
                "400": "#A6A3A9",
                "300": "#BFBDC1",
                "200": "#D9D8DA",
                "100": "#E6E5E7",
            },
        },
        container: {
            center: true,
            padding: "2rem",
            screens: {
                "2xl": "1400px",
            },
        },
        extend: {
            colors: {
                border: "hsl(var(--border))",
                input: "hsl(var(--input))",
                ring: "hsl(var(--ring))",
                background: "hsl(var(--background))",
                foreground: "hsl(var(--foreground))",
                primary: {
                    DEFAULT: "hsl(var(--primary))",
                    foreground: "hsl(var(--primary-foreground))",
                },
                secondary: {
                    DEFAULT: "hsl(var(--secondary))",
                    foreground: "hsl(var(--secondary-foreground))",
                },
                destructive: {
                    DEFAULT: "hsl(var(--destructive))",
                    foreground: "hsl(var(--destructive-foreground))",
                },
                muted: {
                    DEFAULT: "hsl(var(--muted))",
                    foreground: "hsl(var(--muted-foreground))",
                },
                accent: {
                    DEFAULT: "hsl(var(--accent))",
                    foreground: "hsl(var(--accent-foreground))",
                },
                popover: {
                    DEFAULT: "hsl(var(--popover))",
                    foreground: "hsl(var(--popover-foreground))",
                },
                card: {
                    DEFAULT: "hsl(var(--card))",
                    foreground: "hsl(var(--card-foreground))",
                },
            },
            keyframes: {
                "accordion-down": {
                    from: { height: "0" },
                    to: { height: "var(--radix-accordion-content-height)" },
                },
                "accordion-up": {
                    from: { height: "var(--radix-accordion-content-height)" },
                    to: { height: "0" },
                },
            },
            animation: {
                "accordion-down": "accordion-down 0.2s ease-out",
                "accordion-up": "accordion-up 0.2s ease-out",
            },
            fontFamily: {
                sans: ["var(--font-sans)", ...fontFamily.sans],
            },
        },
    },
    plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
