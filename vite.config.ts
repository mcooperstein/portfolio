import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import fs from 'fs'
import path from 'path'

export default defineConfig({
  plugins: [
    react(),
    {
      name: 'serve-static-subpages',
      configureServer(server) {
        server.middlewares.use((req, res, next) => {
          if (req.url === '/oldportfolio' || req.url === '/oldportfolio/') {
            const filePath = path.resolve(__dirname, 'public/oldportfolio/index.html')
            if (fs.existsSync(filePath)) {
              res.setHeader('Content-Type', 'text/html')
              res.end(fs.readFileSync(filePath, 'utf-8'))
              return
            }
          }
          next()
        })
      },
    },
  ],
  build: {
    outDir: 'dist',
  },
})
