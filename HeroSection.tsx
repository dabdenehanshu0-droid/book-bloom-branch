import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, BookOpen, Clock } from "lucide-react";

interface BookCardProps {
  title: string;
  author: string;
  category: string;
  rating: number;
  availability: "available" | "borrowed" | "reserved";
  coverUrl?: string;
  description?: string;
}

const BookCard = ({ 
  title, 
  author, 
  category, 
  rating, 
  availability, 
  coverUrl, 
  description 
}: BookCardProps) => {
  const availabilityColor = {
    available: "bg-green-500",
    borrowed: "bg-red-500",
    reserved: "bg-yellow-500"
  };

  const availabilityText = {
    available: "Available",
    borrowed: "Borrowed",
    reserved: "Reserved"
  };

  return (
    <Card className="group hover:shadow-book transition-all duration-300 hover:-translate-y-1 bg-gradient-card">
      <CardContent className="p-4">
        <div className="flex gap-4">
          <div className="w-16 h-20 bg-muted rounded-md flex items-center justify-center shrink-0">
            {coverUrl ? (
              <img src={coverUrl} alt={title} className="w-full h-full object-cover rounded-md" />
            ) : (
              <BookOpen className="h-8 w-8 text-muted-foreground" />
            )}
          </div>
          
          <div className="flex-1 min-w-0">
            <div className="flex items-start justify-between mb-2">
              <h3 className="font-semibold text-sm leading-tight group-hover:text-primary transition-colors">
                {title}
              </h3>
              <Badge 
                variant="secondary" 
                className={`ml-2 text-xs ${availabilityColor[availability]} text-white`}
              >
                {availabilityText[availability]}
              </Badge>
            </div>
            
            <p className="text-sm text-muted-foreground mb-2">{author}</p>
            <p className="text-xs text-muted-foreground mb-2">{category}</p>
            
            <div className="flex items-center gap-1 mb-2">
              <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
              <span className="text-xs font-medium">{rating}</span>
            </div>
            
            {description && (
              <p className="text-xs text-muted-foreground line-clamp-2">{description}</p>
            )}
          </div>
        </div>
      </CardContent>
      
      <CardFooter className="p-4 pt-0">
        <div className="flex gap-2 w-full">
          {availability === "available" ? (
            <Button size="sm" className="flex-1">
              <BookOpen className="h-3 w-3 mr-1" />
              Borrow
            </Button>
          ) : (
            <Button size="sm" variant="outline" className="flex-1">
              <Clock className="h-3 w-3 mr-1" />
              Reserve
            </Button>
          )}
          <Button size="sm" variant="outline">
            Details
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
};

export default BookCard;