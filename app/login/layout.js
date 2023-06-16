import '../globals.css'
import { DM_Sans } from 'next/font/google'

const dm_sans = DM_Sans({ subsets: ['latin'], weight: ["400", "500", "700"] })

export const metadata = {
  title: 'Login',
  description: 'Sign In to Continue.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={dm_sans.className}>{children}</body>
    </html>
  )
}
