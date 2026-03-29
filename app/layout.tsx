// app/layout.tsx
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'ARCADE STATION',
  description: 'משחקים חינמיים בדפדפן',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="he" dir="rtl">
      <body style={{ margin: 0, padding: 0, background: '#0a0a0a', color: '#fff' }}>
        {children}
      </body>
    </html>
  );
}
