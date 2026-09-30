import type { Config } from "tailwindcss";
export default { content: ["./app/**/*.tsx", "./components/**/*.tsx"], theme: { extend: { fontFamily: { sans: ["var(--font)", "system-ui"] } } }, plugins: [] } satisfies Config;
