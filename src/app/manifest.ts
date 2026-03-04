import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'J&M Industry',
    short_name: 'J&M Industry',
    description: 'Transformando negocios con inteligencia artificial y automatización avanzada.',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#171717',
    icons: [
      {
        src: 'https://df50lbm4qcrt6.cloudfront.net/JYM_INDUSTRY/JyMlogo_no_bvackground-removebg-preview.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
          src: 'https://df50lbm4qcrt6.cloudfront.net/JYM_INDUSTRY/JyMlogo_no_bvackground-removebg-preview.png',
          sizes: '512x512',
          type: 'image/png',
      }
    ],
  }
}
