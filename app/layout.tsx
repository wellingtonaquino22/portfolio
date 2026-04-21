import type { Metadata } from 'next'
import { Syne, DM_Sans } from 'next/font/google'
import './globals.css'

const syne = Syne({
  subsets: ['latin'],
  variable: '--font-syne',
  weight: ['400', '500', '600', '700', '800'],
  display: 'swap',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm',
  weight: ['300', '400', '500', '600'],
  style: ['normal', 'italic'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Wellington Aquino | Desenvolvedor Front-End',
  description:
    'Portfolio profissional de Wellington Aquino — Desenvolvedor Front-End e Full-Stack especializado em JavaScript, TypeScript, React e Next.js.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body
        className={`${syne.variable} ${dmSans.variable} font-dm bg-[#050510] text-slate-100 antialiased`}
      >
        {children}
      </body>
    </html>
  )
}
