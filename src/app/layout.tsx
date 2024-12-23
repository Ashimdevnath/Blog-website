import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Blog Website',
  description: 'A simple blog website with admin panel',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav className="bg-gray-800 text-white p-4">
          <div className="container mx-auto flex justify-between items-center">
            <a href="/" className="text-xl font-bold">Blog Website</a>
            <a href="/admin" className="hover:underline">Admin Panel</a>
          </div>
        </nav>
        <main>{children}</main>
      </body>
    </html>
  )
}

