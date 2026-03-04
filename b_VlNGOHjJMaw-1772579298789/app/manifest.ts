import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'LawBey',
    short_name: 'LawBey',
    description:
      'Get clear explanations of Bahamian law in plain English. LawBey retrieves real cases and legal texts, then explains them so you can act with confidence.',
    start_url: '/',
    display: 'standalone',
    background_color: '#111827',
    theme_color: '#111827',
    icons: [
      {
        src: '/icon.svg',
        sizes: 'any',
        type: 'image/svg+xml',
        purpose: 'any',
      },
    ],
  }
}
