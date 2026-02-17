import BookCard from "./BookCard";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

const FeaturedBooks = () => {
  const featuredBooks = [
    {
      title: "The Future of Technology",
      author: "Dr. Sarah Chen",
      category: "Technology",
      rating: 4.8,
      availability: "available" as const,
      description: "Exploring emerging technologies and their impact on society"
    },
    {
      title: "Advanced Machine Learning",
      author: "Prof. Michael Rodriguez",
      category: "Computer Science",
      rating: 4.9,
      availability: "borrowed" as const,
      description: "Comprehensive guide to modern ML algorithms and applications"
    },
    {
      title: "Digital Transformation",
      author: "Emily Johnson",
      category: "Business",
      rating: 4.6,
      availability: "available" as const,
      description: "How organizations can adapt to the digital age"
    },
    {
      title: "Sustainable Engineering",
      author: "Dr. James Wilson",
      category: "Engineering",
      rating: 4.7,
      availability: "reserved" as const,
      description: "Building a sustainable future through innovative engineering"
    },
    {
      title: "Data Science Fundamentals",
      author: "Lisa Anderson",
      category: "Data Science",
      rating: 4.8,
      availability: "available" as const,
      description: "Essential concepts and tools for data science practitioners"
    },
    {
      title: "Modern Web Development",
      author: "Alex Thompson",
      category: "Programming",
      rating: 4.9,
      availability: "available" as const,
      description: "Latest frameworks and best practices for web development"
    }
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Sparkles className="h-6 w-6 text-library-orange" />
            <span className="text-sm font-medium text-library-orange uppercase tracking-wide">
              AI Powered
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Recommended for You
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover your next great read with our AI-powered recommendation system
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {featuredBooks.map((book, index) => (
            <BookCard key={index} {...book} />
          ))}
        </div>

        <div className="text-center">
          <Button size="lg" variant="outline">
            View All Recommendations
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedBooks;