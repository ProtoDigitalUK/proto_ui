/** @type {import('tailwindcss').Config} */

import protoUITailwindConfig from "./tailwind.config.proto-ui";

export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        "ui-background": "#000000",
        "ui-background-alt": "#1a1a1a",
        "ui-background-border": "#333333",
      },
    },
  },
  plugins: [],
  presets: [protoUITailwindConfig],
};
