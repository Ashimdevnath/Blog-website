import { Card, CardContent } from "@/components/ui/card"
import { Book, Code, Palette, Rocket } from 'lucide-react'

export default function CategoriesSection() {
  const categories = [
    {
      name: "Technology",
      icon: <Code className="h-8 w-8" />,
      count: "124 articles",
      color: "bg-yellow-400"
    },
    {
      name: "Design",
      icon: <Palette className="h-8 w-8" />,
      count: "98 articles",
      color: "bg-indigo-400"
    },
    {
      name: "Science",
      icon: <Rocket className="h-8 w-8" />,
      count: "156 articles",
      color: "bg-green-400"
    },
    {
      name: "Literature",
      icon: <Book className="h-8 w-8" />,
      count: "87 articles",
      color: "bg-purple-400"
    }
  ]

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Explore by Category
          </h2>
          <p className="text-gray-600">
            Dive into your favorite topics and discover new perspectives
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardContent className="p-6 text-center">
                <div className={`${category.color} inline-flex p-3 rounded-full text-white mb-4`}>
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{category.name}</h3>
                <p className="text-gray-500">{category.count}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

