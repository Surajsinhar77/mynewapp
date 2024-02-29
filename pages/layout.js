
// import './globals.css'
import { Rubik } from 'next/font/google'
import { SpeedInsights } from "@vercel/speed-insights/next"
const rubik = Rubik({ subsets: ['latin'] })


const metadata = {
  title: 'My Site',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={rubik.className}>{children}</body>
    </html>
  )
}
