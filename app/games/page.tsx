
// app/games/page.tsx
import Link from 'next/link';

const games = [
  {
    id: 1,
    title: "🐯 Tiger Simulator 3D",
    slug: "tiger-simulator",
    url: "https://html5.gamedistribution.com/3e8831ba57bb4b559f8a84e95f7698fc/",
    description: "סימולטור טיגריס מרהיב בעולם פתוח",
    category: "סימולציה",
    heightRatio: 65,   // אחוז גובה יחסי
  },
  {
    id: 2,
    title: "🔥 Pokémon Emerald DX Beta",
    slug: "pokemon-emerald",
    url: "https://www.retrogames.cc/embed/42902-pokemon-emerald-dx-beta-v0-5.html",
    description: "גרסת beta משופרת של פוקימון אמרלד",
    category: "RPG / רטרו",
    heightRatio: 75,
  },
  // ← כאן תוסיף משחקים חדשים בקלות
];

export default function GamesPage() {
  return (
    <div style={{ 
      fontFamily: 'system-ui, Arial, sans-serif',
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '20px'
    }}>
      <h1 style={{ textAlign: 'center', marginBottom: '40px', color: '#333' }}>
        🎮 משחקים שלי
      </h1>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
        gap: '25px'
      }}>
        {games.map((game) => (
          <div key={game.id} style={{
            border: '1px solid #ddd',
            borderRadius: '16px',
            overflow: 'hidden',
            boxShadow: '0 6px 20px rgba(0,0,0,0.1)',
            background: 'white'
          }}>
            <div style={{
              position: 'relative',
              paddingBottom: `${game.heightRatio}%`,
              height: 0,
              background: '#111',
            }}>
              <iframe
                src={game.url}
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  border: 'none'
                }}
                allowFullScreen
                scrolling="no"
                title={game.title}
              />
            </div>

            <div style={{ padding: '18px' }}>
              <h3 style={{ margin: '0 0 8px 0' }}>{game.title}</h3>
              <p style={{ margin: '0 0 12px 0', color: '#555', fontSize: '15px' }}>
                {game.description}
              </p>
              <div style={{ 
                display: 'flex', 
                justifyContent: 'space-between', 
                alignItems: 'center' 
              }}>
                <span style={{ 
                  background: '#f0f0f0', 
                  padding: '4px 12px', 
                  borderRadius: '20px',
                  fontSize: '14px'
                }}>
                  {game.category}
                </span>
                
                <Link 
                  href={`/play/${game.slug}`}
                  style={{
                    background: '#0066ff',
                    color: 'white',
                    padding: '10px 20px',
                    borderRadius: '8px',
                    textDecoration: 'none',
                    fontWeight: 'bold'
                  }}
                >
                  שחק עכשיו →
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
