import React, { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Plus, FileText, Pencil, Trash2 } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import client from "@/lib/apiClient";
import { articlesByExpertID } from "@/graphql/queries";
import { deleteArticle } from "@/graphql/mutations";
import { useAuth } from "@/hooks/useAuth";
import DeleteConfirmationDialog from "@/components/common/DeleteConfirmationDialog";
import { stripHtml } from "string-strip-html";

interface Article {
  id: string;
  title: string;
  content: string;
  imageUrl: string;
}

// Fetch articles by expert
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

// Delete article by ID
const deleteExpertArticle = async (articleId: string): Promise<boolean> => {
  try {
    await client.graphql({
      query: deleteArticle,
      variables: { input: { id: articleId } },
    });
    return true;
  } catch (error) {
    console.error("Error deleting article:", error);
    return false;
  }
};

const ExpertArticles: React.FC = () => {
  const navigate = useNavigate();
  const { user } = useAuth();

  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [articleToDelete, setArticleToDelete] = useState<string | null>(null);

  // Fetch articles on component mount
  useEffect(() => {
    const getArticles = async () => {
      const data = await fetchExpertArticles(user.id);
      setArticles(data);
      setLoading(false);
    };
    getArticles();
  }, [user?.id]);

  // Handle delete confirmation
  const handleDelete = async () => {
    if (articleToDelete) {
      const success = await deleteExpertArticle(articleToDelete);
      if (success) {
        setArticles(articles.filter((article) => article.id !== articleToDelete));
      }
    }
    setDeleteModalOpen(false);
    setArticleToDelete(null);
  };

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
          className="flex items-center gap-2 bg-primary hover:bg-secondary"
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
          <p className="text-gray-500">No articles found. Start writing your first article!</p>
          <Link
            to="/create-article"
            className="inline-flex items-center mt-4 text-sm font-medium text-blue-600 hover:underline"
          >
            Create an Article
          </Link>
        </div>
      )}

      {/* Article List */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {articles.map((article) => (
          <Card
            key={article.id}
            className="rounded-lg shadow-md cursor-pointer hover:shadow-lg transition"
          >
            <Link to={`/article/${article.id}`}>
              <CardHeader className="relative h-32">
                <img
                  src={article.imageUrl}
                  alt={article.title}
                  className="absolute inset-0 w-full h-full object-cover rounded-t-lg"
                />
              </CardHeader>
            </Link>
            <CardContent className="h-40 flex flex-col justify-between">
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
              <div className="flex justify-between mt-3">
                {/* Edit Button */}
                <Button
                  variant="outline"
                  size="sm"
                  className="flex items-center gap-2 hover:bg-secondary"
                  onClick={() => navigate(`/create-article?id=${article.id}`)}
                >
                  <Pencil size={16} />
                  Edit
                </Button>
                {/* Delete Button */}
                <Button
                  variant="destructive"
                  size="sm"
                  className="flex items-center gap-2"
                  onClick={() => {
                    setArticleToDelete(article.id);
                    setDeleteModalOpen(true);
                  }}
                >
                  <Trash2 size={16} />
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <DeleteConfirmationDialog
        isOpen={deleteModalOpen}
        onClose={() => setDeleteModalOpen(false)}
        onConfirm={handleDelete}
      />
    </div>
  );
};

export default ExpertArticles;
