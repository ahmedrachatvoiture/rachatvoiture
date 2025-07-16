import type { Metadata } from 'next'
import { Inter, Montserrat } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
})

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-heading',
})

export const metadata: Metadata = {
  title: 'Rachat de voiture direct',
  description: 'Rachat de voiture direct',
  generator: 'Rachat de voiture direct',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${montserrat.variable}`}>
      <head>
        <meta charSet="UTF-8" />
      </head>
      <body className="font-sans">{children}</body>
    </html>
  )
}
