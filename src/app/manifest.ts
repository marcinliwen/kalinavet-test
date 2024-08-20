import type { MetadataRoute } from 'next'
 
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Kalina Vet | Gabinet Weterynaryjny',
    short_name: 'Kalina Vet',
    description: 'Gabinet Weterynaryjny małych zwierząt w Zasiekach',
    start_url: '/',
    display: 'standalone',
    background_color: '#6be0ff',
    theme_color: '#e22a18',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
      {
        src: "icons/icon-192.png",
        sizes: "192x192",
        type: "image/png"
    },
    {
        src: "icons/icon-512.png",
        sizes: "512x512",
        type: "image/png"
    }
    ],
  }
}