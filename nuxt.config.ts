import tailwindcss from '@tailwindcss/vite'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxt/content', '@nuxt/eslint', '@nuxthub/core', '@nuxt/ui'],
  ssr: true,
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  content: {
    database: {
      type: 'postgresql',
      url: process.env.DATABASE_URL!,
    },
  },
  compatibilityDate: '2024-04-03',
  hub: {
    db: {
      dialect: 'postgresql',
      connection: {
        connectionString: process.env.DATABASE_URL,
      },
    },
  },
  vite: {
    plugins: [tailwindcss()],
  },
  eslint: {
    config: {
      stylistic: true,
    },
  },
})
