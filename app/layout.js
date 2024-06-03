import './globals.css';

export const metadata = {
  title: 'Arcade Haven Database',
  description: 'Get the most up-to-date information on any Arcade Haven user.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
