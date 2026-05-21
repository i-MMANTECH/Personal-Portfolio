import type { Config } from "tailwindcss";

/**
 * Explicit content configuration. Tailwind v4 automatic source
 * detection was scanning zero files in this project, producing a CSS
 * bundle with no utility classes. Declaring `content` here — loaded via
 * `@config` in globals.css — pins the scanner to our source tree.
 *
 * Paths are resolved relative to this file (the project root).
 */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
} satisfies Config;
