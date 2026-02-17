import { Card, CardContent } from "@/components/ui/card";
import { 
  Computer, 
  Beaker, 
  BookOpen, 
  Briefcase, 
  Palette, 
  Calculator,
  Globe,
  Heart
} from "lucide-react";

const CategoriesSection = () => {
  const categories = [
    {
      name: "Technology",
      icon: Computer,
      count: "1,234 books",
      color: "text-blue-600",
      bgColor: "bg-blue-50 dark:bg-blue-950/30"
    },
    {
      name: "Science",
      icon: Beaker,
      count: "987 books",
      color: "text-green-600",
      bgColor: "bg-green-50 dark:bg-green-950/30"
    },
    {
      name: "Literature",
      icon: BookOpen,
      count: "2,156 books",
      color: "text-purple-600",
      bgColor: "bg-purple-50 dark:bg-purple-950/30"
    },
    {
      name: "Business",
      icon: Briefcase,
      count: "743 books",
      color: "text-orange-600",
      bgColor: "bg-orange-50 dark:bg-orange-950/30"
    },
    {
      name: "Arts",
      icon: Palette,
      count: "521 books",
      color: "text-pink-600",
      bgColor: "bg-pink-50 dark:bg-pink-950/30"
    },
    {
      name: "Mathematics",
      icon: Calculator,
      count: "612 books",
      color: "text-indigo-600",
      bgColor: "bg-indigo-50 dark:bg-indigo-950/30"
    },
    {
      name: "History",
      icon: Globe,
      count: "834 books",
      color: "text-amber-600",
      bgColor: "bg-amber-50 dark:bg-amber-950/30"
    },
    {
      name: "Health",
      icon: Heart,
      count: "456 books",
      color: "text-red-600",
      bgColor: "bg-red-50 dark:bg-red-950/30"
    }
  ];

  return (
    <section className="py-16 bg-muted/30">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Explore Categories
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Browse our extensive collection organized by subject matter
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {categories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <Card 
                key={index} 
                className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 cursor-pointer"
              >
                <CardContent className="p-6 text-center">
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-full ${category.bgColor} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className={`h-8 w-8 ${category.color}`} />
                  </div>
                  <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
                    {category.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {category.count}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;