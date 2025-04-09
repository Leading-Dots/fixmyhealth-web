import React, { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import client from "@/lib/apiClient";
import { listArticles, getExpert } from "@/graphql/queries";
import { Link, useNavigate } from "react-router-dom";

interface Article {
  id: string;
  title: string;
  imageUrl: string;
  expertID: string;
}

interface Expert {
  id: string;
  firstName: string;
  lastName: string;
}

const ArticleCarousel: React.FC = () => {
  const navigate = useNavigate();
  const [articles, setArticles] = useState<Article[]>([]);
  const [expertNames, setExpertNames] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState<boolean>(true);

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
            imageUrl: article.imageUrl || "/images/icons/login/loginbg.jpg",
            expertID: article.expertID,
          }));

        setArticles(formattedArticles.slice(0, 3));

        // Fetch expert names for the first 3 articles
        for (const article of formattedArticles.slice(0, 3)) {
          if (article.expertID && !expertNames[article.expertID]) {
            const expertRes = await client.graphql({
              query: getExpert,
              variables: { id: article.expertID },
            });

            const expert = expertRes.data?.getExpert;
            if (expert) {
              setExpertNames((prev) => ({
                ...prev,
                [expert.id]: `${expert.firstName} ${expert.lastName}`,
              }));
            }
          }
        }
      } catch (error) {
        console.error("Error fetching articles or experts:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchArticles();
  }, []);

  return (
    <div className="max-w-6xl mx-auto space-y-4">
      {/* Header with View All Button */}
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-xl font-semibold">Top Health Articles</h2>
          <p className="text-sm text-gray-500 mt-1">
            Stay informed with expert health tips and best practices.
          </p>
        </div>
        <Button
          variant="outline"
          className="text-secondary border-sky-400 hover:bg-sky-50"
          onClick={() => navigate("/all-articles")}
        >
          View All Articles
        </Button>
      </div>

      {/* Loading State */}
      {loading ? (
        <p className="text-gray-500 text-center">Loading articles...</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {articles.map((article) => (
            <Card
              key={article.id}
              className="h-full rounded-lg shadow-md flex flex-col"
            >
              <Link to={`/article/${article.id}`}>
                <CardHeader className="relative h-40">
                  <img
                    src={article.imageUrl}
                    alt={article.title}
                    className="absolute inset-0 w-full h-full object-cover rounded-t-lg"
                  />
                </CardHeader>
              </Link>
              <CardContent className="p-4 flex flex-col flex-grow justify-between">
                <Link to={`/article/${article.id}`}>
                  <CardTitle className="text-lg">{article.title}</CardTitle>
                </Link>
                <div className="mt-auto pt-2">
                  <p className="text-sm text-muted-foreground">
                    Dr. {expertNames[article.expertID] || "Expert"}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
};

export default ArticleCarousel;
