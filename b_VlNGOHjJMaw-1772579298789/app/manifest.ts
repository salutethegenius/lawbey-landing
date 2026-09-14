import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'LawBey',
    short_name: 'LawBey',
    description:
      'Get clear explanations of Bahamian law in plain English. LawBey retrieves real cases and legal texts, then explains them so you can act with confidence.',
    start_url: '/',
    display: 'standalone',
    background_color: '#F0EBE1',
    theme_color: '#F0EBE1',
    icons: [
      {
        src: '/icon.svg',
        sizes: 'any',
        type: 'image/svg+xml',
        purpose: 'any',
      },
      {
        src: '/icon',
        sizes: '64x64',
        type: 'image/png',
        purpose: 'any',
      },
      {
        src: '/apple-icon',
        sizes: '180x180',
        type: 'image/png',
        purpose: 'any',
      },
    ],
  }
}
