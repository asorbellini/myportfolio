import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

import dotenv from 'dotenv'
dotenv.config()

const readyPlayerMeAPIKey = process.env.VITE_READY_PLAYER_ME_API_KEY
// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react()],
    define: {
      __READY_PLAYER_ME_API_KEY__: JSON.stringify(readyPlayerMeAPIKey),
    },

})
