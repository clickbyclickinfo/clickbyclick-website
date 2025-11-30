import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'ClickByClick - Interactive Demo Creation Tool',
  description: 'An interactive demo creation tool that allows users to build step-by-step, clickable demonstrations using images and videos.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <script src="https://assets.calendly.com/assets/external/widget.js" async></script>
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
