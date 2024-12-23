import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function FeaturedPosts() {
  const posts = [
    {
      title: "The Future of AI in Everyday Life",
      category: "Technology",
      image: "/placeholder.svg?height=200&width=400",
      readTime: "5 min read",
    },
    {
      title: "Sustainable Living: A Practical Guide",
      category: "Lifestyle",
      image: "/placeholder.svg?height=200&width=400",
      readTime: "4 min read",
    },
    {
      title: "Modern Architecture Trends 2024",
      category: "Design",
      image: "/placeholder.svg?height=200&width=400",
      readTime: "6 min read",
    }
  ]

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Featured Posts</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative h-48">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover"
                />
              </div>
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <Badge variant="secondary" className="bg-indigo-100 text-indigo-800 hover:bg-indigo-200">
                    {post.category}
                  </Badge>
                  <span className="text-sm text-gray-500">{post.readTime}</span>
                </div>
                <CardTitle className="text-xl">{post.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Click to read more about {post.title.toLowerCase()} and discover insights that could change your perspective.
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

