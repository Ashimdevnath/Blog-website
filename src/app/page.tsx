import Navbar from "@/components/navbar"
import HeroSection from "@/components/hero-section"
import FeaturedPosts from "@/components/featured-posts"
import CategoriesSection from "@/components/categories-section"
import BlogFeatures from "@/components/blog-features"
import NewsletterSection from "@/components/newsletter-section"

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <HeroSection />
      <FeaturedPosts />
      <CategoriesSection />
      <BlogFeatures />
      <NewsletterSection />
    </div>
  )
}

