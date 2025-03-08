import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { createHtmlPlugin } from 'vite-plugin-html'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),
    createHtmlPlugin({
      minify: true,
      inject: {
        data: {
          title: 'Rajiv Kumar - Full Stack Developer',
          description: 'Explore my portfolio showcasing Django and full-stack projects.',
        },
      },
    }),
  ],
})
