import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

import dotenv from 'dotenv'
dotenv.config()

const servicesId = process.env.VITE_EMAILJS_SERVICEID
const templateId = process.env.VITE_EMAILJS_TEMPLATEID
const publicKey = process.env.VITE_EMAILJS_PUBLICKEY

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react()],
    define: {
      __EMAILJS_SERVICEID__: JSON.stringify(servicesId),
      __EMAILJS_TEMPLATEID__: JSON.stringify(templateId),
      __EMAILJS_PUBLICKEY__: JSON.stringify(publicKey),
    },

})
