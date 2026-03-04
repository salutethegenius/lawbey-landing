import { ImageResponse } from 'next/og'

export const alt = 'LawBey — AI Legal Research for The Bahamas'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#111827',
          padding: 48,
        }}
      >
        <div
          style={{
            fontSize: 24,
            color: '#C8922A',
            letterSpacing: '0.22em',
            textTransform: 'uppercase',
            marginBottom: 24,
          }}
        >
          § LawBey — Bahamian Legal Research AI
        </div>
        <div
          style={{
            fontSize: 72,
            fontWeight: 600,
            color: '#FFFFFF',
            textAlign: 'center',
            lineHeight: 1.1,
            maxWidth: 900,
          }}
        >
          Simple, reliable answers about law in The Bahamas
        </div>
        <div
          style={{
            fontSize: 28,
            color: 'rgba(255,255,255,0.5)',
            marginTop: 32,
            letterSpacing: '0.08em',
          }}
        >
          Retrieval-grounded · Accessible · Sovereign
        </div>
      </div>
    ),
    { ...size }
  )
}
