// app/page.tsx
import Link from 'next/link';

export default function Home() {
  return (
    <div style={{ 
      background: '#0a0a0a', 
      color: '#fff', 
      minHeight: '100vh',
      fontFamily: 'system-ui, -apple-system, sans-serif'
    }}>
      <header style={{
        background: '#111',
        padding: '30px 20px',
        textAlign: 'center',
        borderBottom: '3px solid #22ff88'
      }}>
        <h1 style={{ 
          fontSize: '3.5rem',
          margin: 0,
          background: 'linear-gradient(90deg, #22ff88, #4488ff, #ff44aa)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent'
        }}>
          🎮 ARCADE STATION
        </h1>
        <p style={{ fontSize: '1.4rem', margin: '10px 0 0', color: '#aaa' }}>
          משחקים חינמיים • ישר בדפדפן
        </p>
      </header>

      <main style={{ maxWidth: '1200px', margin: '50px auto', padding: '0 20px' }}>
        <h2 style={{ textAlign: 'center', marginBottom: '40px', fontSize: '2.3rem' }}>
          בחר משחק ותתחיל 🔥
        </h2>

        <div style={{ textAlign: 'center' }}>
          <Link 
            href="/games"
            style={{
              background: 'linear-gradient(45deg, #22ff88, #4488ff)',
              color: '#000',
              padding: '18px 50px',
              fontSize: '1.4rem',
              fontWeight: 'bold',
              borderRadius: '12px',
              textDecoration: 'none',
              display: 'inline-block',
              boxShadow: '0 10px 30px rgba(34, 255, 136, 0.4)'
            }}
          >
            🕹️ לכל המשחקים
          </Link>
        </div>
      </main>

      <footer style={{ 
        textAlign: 'center', 
        padding: '60px 20px 30px', 
        color: '#555',
        fontSize: '0.95rem'
      }}>
        Arcade Station © 2026 • בנוי עם ❤️
      </footer>
    </div>
  );
}
