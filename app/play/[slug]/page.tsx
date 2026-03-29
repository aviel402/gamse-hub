// app/play/[slug]/page.tsx
'use client';

import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';

const gamesData: any = {
  "tiger-simulator": {
    title: "🐯 Tiger Simulator 3D",
    url: "https://html5.gamedistribution.com/3e8831ba57bb4b559f8a84e95f7698fc/",
    ratio: 65,
  },
  "pokemon-emerald": {
    title: "🔥 Pokémon Emerald DX Beta",
    url: "https://www.retrogames.cc/embed/42902-pokemon-emerald-dx-beta-v0-5.html",
    ratio: 75,
  },
};

export default function PlayPage() {
  const params = useParams();
  const slug = params.slug as string;
  const game = gamesData[slug];

  if (!game) return <h1>משחק לא נמצא</h1>;

  return (
    <div style={{ padding: '20px', textAlign: 'center', background: '#f9f9f9', minHeight: '100vh' }}>
      <h1 style={{ marginBottom: '30px' }}>{game.title}</h1>
      
      <div style={{
        position: 'relative',
        maxWidth: '960px',
        margin: '0 auto',
        paddingBottom: `${game.ratio}%`,
        height: 0,
        background: '#000',
        borderRadius: '12px',
        overflow: 'hidden',
        boxShadow: '0 15px 40px rgba(0,0,0,0.25)'
      }}>
        <iframe
          src={game.url}
          style={{
            position: 'absolute',
            top: 0, left: 0,
            width: '100%', height: '100%',
            border: 'none'
          }}
          allowFullScreen
          scrolling="no"
        />
      </div>

      <div style={{ marginTop: '30px' }}>
        <button 
          onClick={() => window.open(game.url, '_blank')}
          style={{
            padding: '14px 32px',
            fontSize: '18px',
            background: '#ff4444',
            color: 'white',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer'
          }}
        >
          ▶️ פתח במסך מלא (חלון חדש)
        </button>
      </div>
    </div>
  );
}
