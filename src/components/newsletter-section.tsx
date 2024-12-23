import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function NewsletterSection() {
  return (
    <section className="bg-indigo-600 py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center space-y-6">
          <h2 className="text-3xl font-bold text-white">
            Stay Updated with Our Newsletter
          </h2>
          <p className="text-indigo-100">
            Get the latest articles and insights delivered straight to your inbox
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Input
              type="email"
              placeholder="Enter your email"
              className="bg-white/90 placeholder:text-gray-500"
            />
            <Button size="lg" className="bg-yellow-400 text-gray-900 hover:bg-yellow-500">
              Subscribe Now
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

