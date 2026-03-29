// app/page.tsx
import Link from 'next/link';

export default function Home() {
  return (
    <div style={{
      backgroundColor: '#0a0a0a',
      color: '#ffffff',
      minHeight: '100vh',
      fontFamily: 'system-ui, Arial, sans-serif',
      textAlign: 'center',
      paddingTop: '80px'
    }}>
      <h1 style={{
        fontSize: '4rem',
        margin: '0 0 20px 0',
        background: 'linear-gradient(90deg, #22ff88, #4488ff, #ff44aa)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent'
      }}>
        🎮 ARCADE STATION
      </h1>
      
      <p style={{ fontSize: '1.5rem', color: '#aaaaaa', marginBottom: '50px' }}>
        משחקים חינמיים בדפדפן • בלי הורדות
      </p>

      <Link 
        href="/games"
        style={{
          background: 'linear-gradient(45deg, #22ff88, #4488ff)',
          color: '#000',
          padding: '18px 60px',
          fontSize: '1.6rem',
          fontWeight: 'bold',
          borderRadius: '12px',
          textDecoration: 'none',
          display: 'inline-block',
          boxShadow: '0 10px 40px rgba(34, 255, 136, 0.5)'
        }}
      >
        🕹️ כנס לכל המשחקים
      </Link>
    </div>
  );
}
