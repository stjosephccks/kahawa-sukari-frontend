import Layout from "@/components/Layout";
import RichTextEditor from "@/components/RichTextEditor";
import axios from "axios";
import { useRouter } from "next/router";
;
import { useEffect, useState } from "react";

function BulletDetailsPage() {
  const [bulletin, setBulletin] = useState(null);
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    if (!id) {
      return;
    }

    // Extract the actual ID from the URL (it might be in format "id-slug")
    const actualId = Array.isArray(id) ? id[0] : id;

    axios
      .get(`/api/bulletins?id=${actualId}`)
      .then((response) => {
        if (response.data) {
          setBulletin(response.data);
        }
      })
      .catch((error) => {
        console.error("Error fetching bulletin:", error);
      });
  }, [id]);

  if (!bulletin) {
    return (
      <Layout>
        <div className="text-center py-10">
          <h1 className="text-2xl text-gray-600">Loading bulletin...</h1>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="max-w-4xl mx-auto px-3 sm:px-4 py-6 sm:py-8 mt-10">
        <article className="bg-white rounded-lg shadow-lg p-4 sm:p-6 md:p-8">
          <header className="mb-4 sm:mb-6 text-center">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-2 sm:mb-4">
              {bulletin.title}
            </h1>
            <div className="flex items-center justify-center space-x-4 text-gray-600">
              <span className="text-xs sm:text-sm">
                {bulletin.createdAt &&
                  format(new Date(bulletin.createdAt), "MMMM d, yyyy")}
              </span>
            </div>
          </header>

          {bulletin.description && (
            <div className="mb-4 sm:mb-6">
              <p className="text-base sm:text-lg text-gray-700 italic text-center">
                {bulletin.description}
              </p>
            </div>
          )}

          <div className="prose prose-sm sm:prose-base md:prose-lg max-w-none mt-10">
            {bulletin.content && (
              <RichTextEditor
                initialContent={bulletin.content}
              />
            )}
          </div>
        </article>
      </div>
    </Layout>
  );
}

export default BulletDetailsPage;