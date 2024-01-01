/** @type {import('tailwindcss').Config} */

import protoUITailwindConfig from "./proto-boiler/tailwind.config.mjs";

export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        "ui-background": "#000000",
        "ui-background-alt": "#1a1a1a",
        "ui-background-border": "#333333",
        "ui-background-text": "#ffffff",
        "ui-background-accent": "#9C92FC",
      },
    },
  },
  plugins: [],
  presets: [protoUITailwindConfig],
};
