import React, { useState, useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import client from "@/lib/apiClient"; // Your API client
import { listArticles } from "@/graphql/queries"; // Replace with correct query
import { Link, useNavigate } from "react-router-dom";
import { stripHtml } from "string-strip-html";

interface Article {
  id: string;
  title: string;
  content: string;
  imageUrl: string;
}

const ArticleCarousel: React.FC = () => {

  const navigate = useNavigate();
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  // Fetch articles from API
  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await client.graphql({
          query: listArticles,
        });

        const items = response.data?.listArticles?.items || [];
        const formattedArticles = items
          .filter((article: any) => article !== null)
          .map((article: any) => ({
            id: article.id,
            title: article.title || "No Title",
            content: article.content || "No Description",
            imageUrl: article.imageUrl || "/images/icons/login/loginbg.jpg",
          }));

        setArticles(formattedArticles);
      } catch (error) {
        console.error("Error fetching articles:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchArticles();
  }, []);

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
        <h2 className="text-2xl font-semibold">
          Top Health Articles from Experts
        </h2>
        <p className="text-gray-500 text-sm mt-1">
          Stay informed with expert health tips and best practices.
        </p>
      </div>

      {/* Loading State */}
      {loading ? (
        <p className="text-gray-500 text-center">Loading articles...</p>
      ) : (
        <>
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
                      <Link to={`/article/${article.id}`}>
                        <CardHeader className="relative h-32">
                          <img
                            src={article.imageUrl}
                            alt={article.title}
                            className="absolute inset-0 w-full h-full object-cover rounded-t-lg"
                          />
                        </CardHeader>
                      </Link>
                      <CardContent>
                        <div>
                          <Link to={`/article/${article.id}`}>
                            <CardTitle className="text-lg line-clamp-1">
                              {article.title}
                            </CardTitle>
                            <p className="text-sm text-gray-500 line-clamp-3">
                              {stripHtml(article.content).result}
                            </p>
                          </Link>
                        </div>
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
          <Button
            variant="default"
            className="mt-3 bg-primary hover:bg-secondary"
            onClick={() => navigate("/all-articles")}
          >
            View All Articles
          </Button>
        </>
      )}
    </div>
  );
};

export default ArticleCarousel;
