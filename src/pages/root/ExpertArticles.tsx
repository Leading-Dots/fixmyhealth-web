import React, { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Plus, FileText, Pencil } from "lucide-react";
import { Link, useNavigate } from "react-router";
import client from "@/lib/apiClient";
import { articlesByExpertID } from "@/graphql/queries";
import { useAuth } from "@/hooks/useAuth";

interface Article {
  id: string;
  title: string;
  content: string;
  imageUrl: string;
}

// Mock API call (Replace with actual API fetch)
const fetchExpertArticles = async (expertId: string): Promise<Article[]> => {
    try {
      const response = await client.graphql({
        query: articlesByExpertID,
        variables: { expertID: expertId },
      });
  
      const items = response.data?.articlesByExpertID?.items || [];
      return items
      .filter((article: any) => article !== null)
      .map((article: any) => ({
        id: article.id,
        title: article.title || "",
        content: article.content || "",
        imageUrl: article.imageUrl || "",
      }));
    } catch (error) {
      console.error("Error fetching articles:", error);
      return [];
    }
};

const ExpertArticles: React.FC = () => {
  const navigate = useNavigate();
  const {user} = useAuth();

  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getArticles = async () => {
      const data = await fetchExpertArticles(user.id);
      setArticles(data);
      setLoading(false);
    };
    getArticles();
  }, []);

  return (
    <div className="container mx-auto p-4 max-w-4xl">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <FileText size={28} className="text-primary" />
          <h2 className="text-2xl font-semibold">Your Articles</h2>
        </div>
        <Button
          variant="default"
          className="flex items-center gap-2"
          onClick={() => navigate("/create-article")}
        >
          <Plus size={18} />
          Create New Article
        </Button>
      </div>

      {/* Loading State */}
      {loading && (
        <p className="text-gray-500 text-center">Loading articles...</p>
      )}

      {/* No Articles Found */}
      {!loading && articles.length === 0 && (
        <div className="text-center p-10 border rounded-lg shadow-sm">
          <p className="text-gray-500">
            No articles found. Start writing your first article!
          </p>
          <Link
            to="/create-article"
            className="inline-flex items-center mt-4 px-4 py-2 text-sm font-medium"
          >
            Create an Article
          </Link>
        </div>
      )}

      {/* Article List */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {articles.map((article) => (
          <Card key={article.id} className="rounded-lg shadow-md">
            <CardHeader className="relative h-32">
              <img
                src={article.imageUrl}
                alt={article.title}
                className="absolute inset-0 w-full h-full object-cover rounded-t-lg"
              />
            </CardHeader>
            <CardContent>
              <CardTitle className="text-lg">{article.title}</CardTitle>
              <p className="text-sm text-gray-500">{article.content}</p>
               {/* Edit Button Inside Each Article */}
               <Button
                variant="outline"
                size="sm"
                className="mt-3 flex items-center gap-2"
                onClick={() => navigate(`/create-article?id=${article.id}`)}
              >
                <Pencil size={16} />
                Edit
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ExpertArticles;
