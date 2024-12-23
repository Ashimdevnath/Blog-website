import { BookOpen, Users, TrendingUp } from 'lucide-react'

export default function BlogFeatures() {
  const features = [
    {
      icon: <BookOpen className="h-12 w-12 text-indigo-600" />,
      title: "Diverse Content",
      description: "Explore a wide range of topics from technology to lifestyle, curated by expert writers."
    },
    {
      icon: <Users className="h-12 w-12 text-yellow-500" />,
      title: "Engaged Community",
      description: "Join discussions, share insights, and connect with like-minded readers from around the world."
    },
    {
      icon: <TrendingUp className="h-12 w-12 text-indigo-600" />,
      title: "Stay Informed",
      description: "Keep up with the latest trends and developments in your favorite subjects."
    }
  ]

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          Why Choose Our Blog
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <div className="flex justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

