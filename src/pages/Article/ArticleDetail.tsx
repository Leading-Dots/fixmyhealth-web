import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import client from "@/lib/apiClient";
import { getArticle } from "@/graphql/queries";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

interface Article {
  id: string;
  title: string;
  content: string;
  imageUrl: string;
}

const ArticleDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>() as { id: string };
  const navigate = useNavigate();
  const [article, setArticle] = useState<Article | null>(null);
  const [loading, setLoading] = useState(true);

  // Fetch the article by ID
  useEffect(() => {
    const fetchArticle = async () => {
      try {
        const response = await client.graphql({
          query: getArticle,
          variables: { id },
        });

        const fetchedArticle = response.data.getArticle;

        if (fetchedArticle) {
          setArticle({
            id: fetchedArticle.id,
            title: fetchedArticle.title || "",
            content: fetchedArticle.content || "",
            imageUrl: fetchedArticle.imageUrl || "",
          });
        } else {
          console.error("Article not found");
          navigate("/");
        }
      } catch (error) {
        console.error("Error fetching article:", error);
        navigate("/");
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchArticle();
    }
  }, [id, navigate]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-gray-500">Loading article...</p>
      </div>
    );
  }

  if (!article) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-red-500">Article not found.</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-6 max-w-3xl">
        {/* Back Button */}
        <Button
          variant="outline"
          className="mb-4 flex items-center gap-2"
          onClick={() => navigate(-1)}
        >
          <ArrowLeft size={18} />
          Back
        </Button>

      {/* Article Image */}
      <div className="w-full h-64 mb-6">
        <img
          src={article.imageUrl}
          alt={article.title}
          className="w-full h-full object-cover rounded-lg shadow-sm"
        />
      </div>

      {/* Article Content */}
      <h1 className="text-3xl font-bold mb-4">{article.title}</h1>
      <p className="text-gray-700 leading-relaxed">{article.content}</p>
    </div>
  );
};

export default ArticleDetail;
