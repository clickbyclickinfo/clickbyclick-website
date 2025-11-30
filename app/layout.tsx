import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://clickbyclick.cloud'),
  title: {
    template: '%s | ClickByClick - Interactive Demo Creation Tool',
    default: 'ClickByClick - Create Interactive Demos With Images and Videos',
  },
  description: 'Transform static images into engaging, interactive experiences. Create step-by-step, clickable demonstrations using our intuitive demo creation tool. Wow your audience with guided walkthroughs.',
  keywords: ['demo creation', 'interactive demos', 'clickable images', 'step-by-step guides', 'product demos', 'tutorial builder', 'user onboarding', 'customer education'],
  authors: [{ name: 'ClickByClick Team' }],
  creator: 'ClickByClick',
  publisher: 'ClickByClick',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    }
  },
  alternates: {
    canonical: 'https://clickbyclick.cloud'
  },
  openGraph: {
    title: 'ClickByClick - Interactive Demo Creation Tool',
    description: 'Create engaging, interactive demos with step-by-step clickable guides. Transform static images into powerful user experiences.',
    url: 'https://clickbyclick.cloud',
    siteName: 'ClickByClick',
    images: [
      {
        url: 'https://clickbyclick.cloud/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'ClickByClick - Interactive Demo Creation Platform',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ClickByClick - Interactive Demo Creation Tool',
    description: 'Create engaging, interactive demos with step-by-step clickable guides. Transform static images into powerful user experiences.',
    creator: '@clickbyclick',
    images: ['https://clickbyclick.cloud/twitter-image.jpg'],
  },
  verification: {
    google: 'YOUR_GOOGLE_SEARCH_CONSOLE_VERIFICATION_CODE',
  },
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
        {/* Google Analytics */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'GA_MEASUREMENT_ID');
            `,
          }}
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}