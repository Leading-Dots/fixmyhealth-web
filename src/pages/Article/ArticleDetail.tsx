import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import client from "@/lib/apiClient";
import { getArticle, getExpert } from "@/graphql/queries";
import { UserCircle } from "lucide-react";

interface Article {
  id: string;
  title: string;
  content: string;
  imageUrl: string;
  expertID: string;
}

interface Expert {
  id: string;
  firstName?: string;
  lastName?: string;
  profilePictureUrl?: string;
}

const ArticleDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>() as { id: string };
  const navigate = useNavigate();
  const [article, setArticle] = useState<Article | null>(null);
  const [expert, setExpert] = useState<Expert | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchArticleAndExpert = async () => {
      try {
        const response = await client.graphql({
          query: getArticle,
          variables: { id },
        });

        const fetchedArticle = response.data?.getArticle;

        if (!fetchedArticle) {
          console.error("Article not found");
          navigate("/");
          return;
        }

        setArticle({
          id: fetchedArticle.id,
          title: fetchedArticle.title || "Untitled",
          content: fetchedArticle.content || "",
          imageUrl: fetchedArticle.imageUrl || "/images/icons/login/loginbg.jpg",
          expertID: fetchedArticle.expertID || "",
        });

        // Fetch expert if expertID exists
        if (fetchedArticle.expertID) {
          const expertRes = await client.graphql({
            query: getExpert,
            variables: { id: fetchedArticle.expertID },
          });

          const expertData = expertRes.data?.getExpert;
          if (expertData) {
            setExpert({
              id: expertData.id,
              firstName: expertData.firstName || "",
              lastName: expertData.lastName || "",
              profilePictureUrl: expertData.profilePictureUrl || "",
            });
          }
        }
      } catch (error) {
        console.error("Error fetching article or expert:", error);
        navigate("/");
      } finally {
        setLoading(false);
      }
    };

    if (id) fetchArticleAndExpert();
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
      {/* Article Image */}
      {article.imageUrl && (
        <div className="w-full h-64 mb-6">
          <img
            src={article.imageUrl}
            alt={article.title}
            className="w-full h-full object-cover rounded-lg shadow-sm"
          />
        </div>
      )}

      {/* Title */}
      <h1 className="text-3xl font-bold mb-2">{article.title}</h1>

      {/* Expert Info */}
      {expert && (
        <div className="flex items-center gap-3 mb-6">
          {expert.profilePictureUrl ? (
            <img
              src={expert.profilePictureUrl}
              alt={`${expert.firstName} ${expert.lastName}`}
              className="w-10 h-10 rounded-full border"
            />
          ) : (
            <UserCircle className="w-10 h-10 text-gray-400" />
          )}
          <span className="text-base text-gray-700 font-medium">
            Dr. {expert.firstName} {expert.lastName}
          </span>
        </div>
      )}

      {/* Rich content */}
      <div
        className="prose max-w-none"
        dangerouslySetInnerHTML={{ __html: article.content }}
      />
    </div>
  );
};

export default ArticleDetail;
