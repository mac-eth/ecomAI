import '@/app/globals.css'

import { fontMono, fontSans } from '@/lib/fonts'

import { Analytics } from '@vercel/analytics/react'
import { Header } from '@/components/header'
import { Metadata } from 'next'
import { Providers } from '@/components/providers'
import { TailwindIndicator } from '@/components/tailwind-indicator'
import { Toaster } from 'react-hot-toast'
import { cn } from '@/lib/utils'

export const metadata: Metadata = {
  title: {
    default: 'EcomAI',
    template: `%s - EcomAI Expert`
  },
  description:
    'An AI-powered chatbot designed to assist you in your E-commerce business.',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' }
  ],
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png'
  }
}

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={cn(
          'font-sans antialiased',
          fontSans.variable,
          fontMono.variable
        )}
      >
        <Toaster />
        <Providers attribute="class" defaultTheme="system" enableSystem>
          <div className="flex min-h-screen flex-col">
            {/* @ts-ignore */}
            <Header />
            <main className="flex flex-1 flex-col bg-muted/50">{children}</main>
          </div>
          <Analytics />
          <TailwindIndicator />
        </Providers>
      </body>
    </html>
  )
}
