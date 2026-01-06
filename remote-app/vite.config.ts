import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import federation from '@originjs/vite-plugin-federation'

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: 'remote_app',
      filename: 'remoteEntry.js',
      exposes: {
        './Button': './src/components/Button',
        './RemoteComponent': './src/components/RemoteComponent',
        './RemotePage': './src/RemotePage'
      },
      shared: ['react', 'react-dom', 'react-router-dom']
    }),
  ],
  server: {
    port: 3001,
    cors: true
  },
  build: {
    modulePreload: false,
    target: 'esnext',
    minify: false,
    cssCodeSplit: false
  }
})
