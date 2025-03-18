import { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { UploadCloud } from "lucide-react";
import client from "@/lib/apiClient";
import { useAuth } from "@/hooks/useAuth";
import { createArticle, updateArticle } from "@/graphql/mutations";
import { uploadArticleImage } from "@/lib/storage";
import { useLocation, useNavigate } from "react-router";
import { getArticle } from "@/graphql/queries";

interface FormData {
  title: string;
  content: string;
  imageUrl: string | null;
}

export default function CreateArticle() {
  const { user } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const articleId = params.get("id");

  const [formData, setFormData] = useState<FormData>({
    title: "",
    content: "",
    imageUrl: "null",
  });
  const [loading, setLoading] = useState(false);

  // Fetch article details if editing
  useEffect(() => {
    if (!articleId) return;
    const fetchArticle = async () => {
      try {
        const response = await client.graphql({
          query: getArticle,
          variables: { id: articleId },
        });

        const article = response.data?.getArticle;
        if (article) {
          setFormData({
            title: article.title || "",
            content: article.content || "",
            imageUrl: article.imageUrl || "",
          });
        }
      } catch (error) {
        console.error("Error fetching article:", error);
      }
    };

    fetchArticle();
  }, [articleId]);

  const onFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files?.[0]) return;
    setLoading(true);
    try {
      const file = e.target.files[0];
      const url = await uploadArticleImage(file, user.id);
      setFormData((prev) => ({ ...prev, imageUrl: url }));
      console.error("CreateArticle > Article Image upload, url:", url);
    } catch (error) {
      console.error("Error uploading file:", error);
    } finally {
      setLoading(false);
    }
  };

  // Handle Create or Update
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      if (articleId) {
        // Update Article
        await client.graphql({
          query: updateArticle,
          variables: {
            input: {
              id: articleId,
              title: formData?.title,
              content: formData?.content,
              imageUrl: formData?.imageUrl,
            },
          },
        });
      } else {
        // Create New Article
        await client.graphql({
          query: createArticle,
          variables: {
            input: {
              title: formData?.title,
              content: formData?.content,
              imageUrl: formData?.imageUrl,
              expertID: user.id,
            },
          },
        });
      }
      navigate("/articles");
    } catch (error) {
      console.error("Error saving article:", error);
    } finally {
      setLoading(false);
    }
  };
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <Card className="max-w-2xl mx-auto mt-10 p-5">
      <CardHeader>
        <CardTitle>{articleId ? "Edit Article" : "Create Article"}</CardTitle>
      </CardHeader>
      <CardContent>
        <Input
          name="title"
          placeholder="Article Title"
          value={formData.title}
          onChange={handleInputChange}
        />
        <Textarea
          name="content"
          placeholder="Write your article content..."
          value={formData.content}
          className="mt-3"
          onChange={handleInputChange}
        />
        <label className="mt-3 flex items-center gap-2 cursor-pointer border rounded-md p-2 w-fit">
          <UploadCloud size={20} />
          <span>Upload Image</span>
          <Input
            type="file"
            className="hidden"
            onChange={onFileChange}
            accept="image/*"
          />
        </label>
        {formData.imageUrl && (
          <div className="mt-2">
            <img
              src={formData.imageUrl}
              alt="Article preview"
              className="max-w-xs h-auto"
            />
          </div>
        )}
        <Button
          onClick={handleSubmit}
          className="mt-4 bg-[#23408e] hover:bg-sky-500"
          disabled={loading || !formData.title || !formData.content}
        >
          {loading ? "Submitting..." : "Submit Article"}
        </Button>
        <Button
          variant="outline"
          className="mt-4 ml-2"
          onClick={() => navigate("/articles")}
        >
          Cancel
        </Button>
      </CardContent>
    </Card>
  );
}
