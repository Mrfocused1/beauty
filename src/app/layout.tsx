import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'The Hair and Beauty Hub - Beauty Student Practice Platform',
  description: 'Connecting beauty therapy students with clients for practice and portfolio building. From student to entrepreneur.',
  keywords: ['beauty therapy', 'students', 'practice', 'portfolio', 'entrepreneurs', 'UK'],
  authors: [{ name: 'The Hair and Beauty Hub Team' }],
  viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="min-h-screen bg-gray-50 antialiased">
        {children}
      </body>
    </html>
  )
}