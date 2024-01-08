import { Inter,Roboto } from 'next/font/google'
import './globals.css'
import { FaCheck } from "react-icons/fa";

const roboto = Roboto({ subsets: ['latin'],weight:["100","300","400","500","700","900"] })

export const metadata = {
  title: `Lajumate.ro → Vinzi si cumperi rapid ✔️ `,
  description: 'This is for practice only and has nothing to do with the original website',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}>{children}</body>
    </html>
  )
}
