// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
    site: "https://touhourad.io",
    base: "/",
    trailingSlash: "never",
    i18n: {
        defaultLocale: "en",
        locales: ["en", "zh-CN"],
    },
    prefetch: true,
});