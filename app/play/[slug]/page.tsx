// app/play/[slug]/page.tsx
'use client';

import { useParams } from 'next/navigation';

const gameList: any = {
  "tiger-simulator": {
    title: "🐯 Tiger Simulator 3D",
    url: "https://html5.gamedistribution.com/3e8831ba57bb4b559f8a84e95f7698fc/",
    ratio: 65
  },
  "pokemon-emerald": {
    title: "🔥 Pokémon Emerald DX Beta",
    url: "https://www.retrogames.cc/embed/42902-pokemon-emerald-dx-beta-v0-5.html",
    ratio: 75
  }
};

export default function PlayGame() {
  const params = useParams();
  const slug = params.slug as string;
  const game = gameList[slug];

  if (!game) {
    return <h1 style={{color: 'white', textAlign: 'center', padding: '100px'}}>משחק לא נמצא 😕</h1>;
  }

  return (
    <div style={{ background: '#0a0a0a', color: '#fff', minHeight: '100vh', padding: '20px' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '30px' }}>{game.title}</h1>
      
      <div style={{
        position: 'relative',
        maxWidth: '960px',
        margin: '0 auto',
        paddingBottom: `${game.ratio}%`,
        height: 0,
        background: '#000',
        borderRadius: '12px',
        overflow: 'hidden'
      }}>
        <iframe
          src={game.url}
          style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 'none' }}
          allowFullScreen
        />
      </div>
    </div>
  );
}
