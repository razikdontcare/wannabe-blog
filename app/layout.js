import './globals.css'
import { DM_Sans } from 'next/font/google'

const dm_sans = DM_Sans({ subsets: ['latin'], weight: ["400", "500", "700"] })

export const metadata = {
  title: 'wannabe. Blog',
  description: 'Wannabe Blog',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={dm_sans.className}>{children}</body>
    </html>
  )
}
