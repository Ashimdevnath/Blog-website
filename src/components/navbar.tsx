import Link from "next/link"
import { Search } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function Navbar() {
  return (
    <nav className="border-b bg-white">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold text-indigo-600">
          BlogSpace
        </Link>
        
        <div className="hidden md:flex items-center space-x-8">
          <Link href="/" className="text-gray-600 hover:text-indigo-600 transition-colors">
            Home
          </Link>
          <Link href="/categories" className="text-gray-600 hover:text-indigo-600 transition-colors">
            Categories
          </Link>
          <Link href="/featured" className="text-gray-600 hover:text-indigo-600 transition-colors">
            Featured
          </Link>
          <Link href="/recent" className="text-gray-600 hover:text-indigo-600 transition-colors">
            Recent
          </Link>
        </div>

        <div className="flex items-center space-x-4">
          <div className="relative hidden md:block">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <Input
              type="search"
              placeholder="Search articles..."
              className="pl-10 w-[200px] bg-gray-50"
            />
          </div>
          <Button className="bg-indigo-600 hover:bg-indigo-700">
            Subscribe
          </Button>
        </div>
      </div>
    </nav>
  )
}

