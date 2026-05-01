import { ImageResponse } from 'next/og'

// Route segment config
export const runtime = 'edge'

// Image metadata
export const alt = 'FullWebDevKev | Kevin van Deventer — Full-Stack Developer'
export const size = {
  width: 1200,
  height: 630,
}

export const contentType = 'image/png'

// Image generation
export default async function Image() {
  return new ImageResponse(
    (
      // ImageResponse JSX element
      <div
        style={{
          fontSize: 128,
          background: 'linear-gradient(to bottom right, #000000, #1a1a1a)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          padding: '40px',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
          <span style={{ color: '#3b82f6', fontWeight: 'bold' }}>FWDK</span>
        </div>
        <div style={{ fontSize: 64, fontWeight: 'bold', textAlign: 'center' }}>
          Kevin van Deventer
        </div>
        <div style={{ fontSize: 32, marginTop: '20px', color: '#94a3b8' }}>
          Full-Stack Web Engineering
        </div>
      </div>
    ),
    // ImageResponse options
    {
      ...size,
    }
  )
}
