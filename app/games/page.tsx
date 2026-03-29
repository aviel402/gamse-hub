// app/page.tsx
import Link from 'next/link';

const games = [
  {
    id: 1,
    emoji: "🐯",
    title: "Tiger Simulator 3D",
    slug: "tiger-simulator",
    description: "הפוך לטיגריס ושרוד בטבע הפראי",
    category: "סימולציה",
    color: "#22ff88"
  },
  {
    id: 2,
    emoji: "🔥",
    title: "Pokémon Emerald DX",
    slug: "pokemon-emerald",
    description: "גרסה משופרת של פוקימון אמרלד",
    category: "RPG • רטרו",
    color: "#ff4444"
  },
  // הוסף כאן משחקים נוספים
];

export default function Home() {
  return (
    <div style={{
      background: '#0a0a0a',
      color: '#fff',
      minHeight: '100vh',
      fontFamily: 'system-ui, Arial, sans-serif'
    }}>
      {/* Header */}
      <header style={{
        background: '#111',
        padding: '20px 0',
        textAlign: 'center',
        borderBottom: '2px solid #333'
      }}>
        <h1 style={{ 
          fontSize: '3rem', 
          margin: '0',
          background: 'linear-gradient(90deg, #22ff88, #4488ff)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent'
        }}>
          🎮 ARCADE STATION
        </h1>
        <p style={{ margin: '8px 0 0', color: '#aaa', fontSize: '1.2rem' }}>
          משחקים חינם • בלי הורדות
        </p>
      </header>

      <div style={{ maxWidth: '1200px', margin: '40px auto', padding: '0 20px' }}>
        <h2 style={{ textAlign: 'center', marginBottom: '40px', fontSize: '2.2rem' }}>
          בחר משחק ותתחיל לשחק 🔥
        </h2>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
          gap: '24px'
        }}>
          {games.map((game) => (
            <Link 
              key={game.id} 
              href={`/play/${game.slug}`}
              style={{ textDecoration: 'none', color: 'inherit' }}
            >
              <div style={{
                background: '#1a1a1a',
                borderRadius: '16px',
                padding: '20px',
                border: `2px solid ${game.color}33`,
                transition: 'all 0.3s',
                cursor: 'pointer'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px)';
                e.currentTarget.style.boxShadow = `0 20px 30px ${game.color}22`;
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}
              >
                <div style={{ fontSize: '4rem', marginBottom: '16px' }}>
                  {game.emoji}
                </div>
                
                <h3 style={{ margin: '0 0 10px 0', fontSize: '1.5rem' }}>
                  {game.title}
                </h3>
                
                <p style={{ color: '#bbb', margin: '0 0 16px 0', lineHeight: '1.5' }}>
                  {game.description}
                </p>
                
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center'
                }}>
                  <span style={{
                    background: '#333',
                    padding: '6px 14px',
                    borderRadius: '30px',
                    fontSize: '0.9rem'
                  }}>
                    {game.category}
                  </span>
                  
                  <span style={{
                    background: game.color,
                    color: '#000',
                    padding: '10px 24px',
                    borderRadius: '8px',
                    fontWeight: 'bold'
                  }}>
                    שחק עכשיו →
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer style={{
        textAlign: 'center',
        padding: '40px 20px',
        color: '#666',
        marginTop: '80px'
      }}>
        Arcade Station © 2026 • כל הזכויות שמורות
      </footer>
    </div>
  );
}
