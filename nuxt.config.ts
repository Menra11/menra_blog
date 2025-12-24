import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxt/content', '@nuxt/eslint'],
  ssr: true,
  css: ['~/assets/css/main.css'],
  vite:{
    plugins: [tailwindcss()],
  },
  eslint:{
    config: {
      stylistic: true 
    }
  },
  devtools: { enabled: true },
  compatibilityDate: '2024-04-03',
})