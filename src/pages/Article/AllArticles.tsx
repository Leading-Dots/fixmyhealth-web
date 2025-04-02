import React, { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import client from "@/lib/apiClient";
import { listArticles } from "@/graphql/queries";
import { ArrowLeft } from "lucide-react";

interface Article {
  id: string;
  title: string;
  description: string;
  image: string;
}

const AllArticles: React.FC = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const navigate = useNavigate();

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
            description: article.content || "No Description",
            image: article.imageUrl || "/images/icons/default.jpg",
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

  return (
    <div className="container mx-auto p-6 max-w-5xl">
      {/* Page Header */}
      <div className="text-center mb-6">
        <h2 className="text-3xl font-bold">All Health Articles</h2>
        <p className="text-gray-500 mt-1">
          Explore expert health articles and tips.
        </p>
      </div>

      {/* Loading State */}
      {loading ? (
        <p className="text-gray-500 text-center">Loading articles...</p>
      ) : articles.length === 0 ? (
        <div className="text-center p-10 border rounded-lg shadow-sm">
          <p className="text-gray-500">No articles found. Please check back later.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article) => (
            <Card
              key={article.id}
              className="cursor-pointer transition-transform transform hover:scale-105 rounded-lg shadow-md"
              onClick={() => navigate(`/article/${article.id}`)}
            >
              <CardHeader className="relative h-40">
                <img
                  src={article.image}
                  alt={article.title}
                  className="absolute inset-0 w-full h-full object-cover rounded-t-lg"
                />
              </CardHeader>
              <CardContent>
                <CardTitle className="text-lg font-semibold truncate">
                  {article.title}
                </CardTitle>
                <p className="text-sm text-gray-500 line-clamp-2">
                  {article.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      )}

      {/* Back to Home Button */}
      <div className="flex justify-center mt-8">
        <Button
          variant="outline"
          onClick={() => navigate("/")}
          className="flex items-center gap-2 hover:bg-sky-500"
        >
        <ArrowLeft size={18} />
        Back to Home
        </Button>
      </div>
    </div>
  );
};

export default AllArticles;
