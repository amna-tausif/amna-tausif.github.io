import { defineConfig } from "astro/config"
import react from "@astrojs/react"
import tailwind from "@astrojs/tailwind"

export default defineConfig({
    site: "https://mhamza.dev",
    integrations: [
        react(),
        tailwind({
            config: {
                path: "./tailwind.config.cjs",
            },
        }),
    ],
})
