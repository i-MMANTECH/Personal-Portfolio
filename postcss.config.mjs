/**
 * PostCSS config — registers the Tailwind v4 plugin so Next.js runs
 * Tailwind over globals.css. Without this file, Next.js ships the CSS
 * unprocessed (literal @theme/@tailwind/@config, zero utilities).
 */
const config = {
  plugins: {
    "@tailwindcss/postcss": {},
  },
};

export default config;
