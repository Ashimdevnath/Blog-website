import { Button } from "@/components/ui/button"
import { ArrowRight } from 'lucide-react'

export default function HeroSection() {
  return (
    <section className="bg-gradient-to-r from-indigo-600 to-indigo-800 text-white py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Discover Insightful Stories and Ideas
          </h1>
          <p className="text-xl text-indigo-100">
            Explore thought-provoking articles on technology, lifestyle, and culture. Join our community of curious minds.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" className="bg-white text-indigo-600 hover:bg-indigo-50">
              Start Reading <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-indigo-700">
              Browse Categories
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

