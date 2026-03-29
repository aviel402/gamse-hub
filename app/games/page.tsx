// app/games/page.tsx
import Link from 'next/link';

const games = [
  {
    emoji: "🐯",
    title: "Tiger Simulator 3D",
    slug: "tiger-simulator",
    description: "סימולטור טיגריס מרהיב",
    color: "#22ff88"
  },
  {
    emoji: "🔥",
    title: "Pokémon Emerald DX",
    slug: "pokemon-emerald",
    description: "גרסה משופרת של פוקימון",
    color: "#ff4444"
  }
];

export default function Games() {
  return (
    <div style={{ background: '#0a0a0a', color: '#fff', minHeight: '100vh', padding: '40px 20px' }}>
      <h1 style={{ textAlign: 'center', fontSize: '3rem', marginBottom: '40px' }}>🎮 המשחקים שלנו</h1>
      
      <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '25px' }}>
        {games.map((game, index) => (
          <Link key={index} href={`/play/${game.slug}`} style={{ textDecoration: 'none' }}>
            <div style={{
              background: '#1a1a1a',
              padding: '25px',
              borderRadius: '16px',
              border: `2px solid ${game.color}33`,
              transition: '0.3s'
            }}>
              <div style={{ fontSize: '4.5rem', marginBottom: '15px' }}>{game.emoji}</div>
              <h3 style={{ fontSize: '1.6rem', margin: '0 0 10px 0' }}>{game.title}</h3>
              <p style={{ color: '#bbb' }}>{game.description}</p>
              <div style={{ marginTop: '20px', color: game.color, fontWeight: 'bold' }}>
                שחק עכשיו →
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
