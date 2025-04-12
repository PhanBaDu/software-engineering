import { NextSSRPlugin } from '@uploadthing/react/next-ssr-plugin';
import { extractRouterConfig } from 'uploadthing/server';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import '@uploadthing/react/styles.css';
import { ourFileRouter } from '@/app/api/uploadthing/core';

const inter = Inter({
  subsets: ['latin'],
  weight: ['400'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Tech Mall',
  description: 'Generated By Tech Mall',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="overflow-x-hidden" suppressHydrationWarning>
      <body className={`${inter.className} antialiased`} suppressHydrationWarning>
        <div className="container_w text-sm">
          <NextSSRPlugin routerConfig={extractRouterConfig(ourFileRouter)} />
          {children}
        </div>
      </body>
    </html>
  );
}
