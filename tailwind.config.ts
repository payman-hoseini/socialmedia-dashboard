import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'Lime-Green' : 'hsl(163, 72%, 41%)',
        'Bright-Red' : 'hsl(356, 69%, 56%)',
        'Facebook' : 'hsl(208, 92%, 53%)',
        'Twitter' : 'hsl(203, 89%, 53%)',
        'Instagram_1' : 'hsl(37, 97%, 70%)',
        'Instagram_2' : 'hsl(329, 70%, 58%)',
        'YouTube': 'hsl(348, 97%, 39%)',
        'background' : 'var(--background)',
        'top-background' : 'var(--top-background)',
        'card': 'var(--card)',
        'text' : 'var(--text)',
        'bw-text': 'var(--bw-text)',
      },
    },
  },
  plugins: [],
};
export default config;
