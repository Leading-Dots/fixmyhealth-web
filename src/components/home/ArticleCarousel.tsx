import React, { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Article {
  id: string;
  title: string;
  description: string;
  image: string;
}

const articles: Article[] = [
  { id: "1", title: "Health Tips for 2025", description: "Stay ahead with these expert health tips.", image: "/images/icons/login/loginbg.jpg" },
  { id: "2", title: "Nutrition Myths Busted", description: "Discover the truth behind common nutrition myths.", image: "/images/icons/login/loginbg.jpg" },
  { id: "3", title: "Best Exercises for Heart Health", description: "Boost your heart health with these exercises.", image: "/images/icons/login/loginbg.jpg" },
  { id: "4", title: "Mindfulness for Stress", description: "Reduce stress with proven mindfulness techniques.", image: "/images/icons/login/loginbg.jpg" }
];

const ArticleCarousel: React.FC = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { align: "start", loop: true },
    [Autoplay({ delay: 3000 })]
  );

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  return (
    <div className="relative flex flex-col items-center max-w-4xl mx-auto space-y-4">
      {/* Section Header */}
      <div className="text-center">
        <h2 className="text-2xl font-semibold">Top Health Articles from Experts</h2>
        <p className="text-gray-500 text-sm mt-1">
          Stay informed with expert health tips and best practices.
        </p>
      </div>

      {/* Embla Carousel with Navigation */}
      <div className="relative flex items-center w-full">
        {/* Left Arrow */}
        <Button
          onClick={scrollPrev}
          variant="outline"
          className="absolute -left-14 z-10 bg-white/80 backdrop-blur-md p-4 rounded-full shadow-md pointer-events-auto"
        >
          <ChevronLeft size={28} />
        </Button>

        {/* Carousel Container */}
        <div className="w-full overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {articles.map((article) => (
              <div key={article.id} className="flex-none w-1/2 p-2">
                <Card className="h-64 rounded-lg shadow-md">
                  <CardHeader className="relative h-32">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="absolute inset-0 w-full h-full object-cover rounded-t-lg"
                    />
                  </CardHeader>
                  <CardContent>
                    <CardTitle className="text-lg">{article.title}</CardTitle>
                    <p className="text-sm text-gray-500">{article.description}</p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>

        {/* Right Arrow */}
        <Button
          onClick={scrollNext}
          variant="outline"
          className="absolute -right-14 z-10 bg-white/80 backdrop-blur-md p-4 rounded-full shadow-md pointer-events-auto"
        >
          <ChevronRight size={28} />
        </Button>
      </div>

      {/* CTA Button */}
      <Button variant="default" className="mt-3">
        View All Articles
      </Button>
    </div>
  );
};

export default ArticleCarousel;
