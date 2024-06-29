import { defineConfig } from 'vite';
import viteCompression from 'vite-plugin-compression';
import basicSsl from '@vitejs/plugin-basic-ssl';
import { svelte } from '@sveltejs/vite-plugin-svelte';

export default defineConfig(async ({ command }) => {

    const { needlePlugins, useGzip, loadConfig } = await import("@needle-tools/engine/plugins/vite/index.js");
    const needleConfig = await loadConfig();

    return {
        base: "./",
        plugins: [
            basicSsl(),
            useGzip(needleConfig) ? viteCompression({ deleteOriginFile: true }) : null,
            needlePlugins(command, needleConfig),
            svelte({/* plugin options */})
        ],
        server: {
            https: true,
            proxy: { // workaround: specifying a proxy skips HTTP2 which is currently problematic in Vite since it causes session memory timeouts.
                'https://localhost:3000': 'https://localhost:3000'
            },
            strictPort: true,
            port: 3000,
        },
        build: {
            outDir: "./dist",
            emptyOutDir: true,
        }
    }
});