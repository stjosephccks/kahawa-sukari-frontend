import Layout from "@/components/Layout";
import RichTextEditor from "@/components/RichTextEditor";
import Bulletin from "@/models/Bulletin";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import SEO from "@/components/SEO";
import axios from "axios";
import Link from "next/link";

function BulletDetailsPage() {
  const [bulletin, setBulletin] = useState(null);
  const [otherBulletins, setOtherBulletins] = useState([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    if (!id) return;

    const fetchBulletin = async () => {
      try {
        const actualId = Array.isArray(id) ? id[0] : id;
        
        // Fetch current bulletin
        const response = await axios.get('/api/bulletins?id=' + actualId);
        const fetchedBulletin = response.data;
        setBulletin(fetchedBulletin);
        
        // Fetch all bulletins and filter out current one
        const allBulletinsResponse = await axios.get('/api/bulletins');
        const allBulletins = allBulletinsResponse.data;
        const filteredBulletins = allBulletins.filter(b => b._id !== actualId).slice(0, 4); // Get 4 other bulletins
        setOtherBulletins(filteredBulletins);
        
        setLoading(false);
      } catch (error) {
        console.error("Error fetching bulletin:", error);
        setLoading(false);
      }
    };

    fetchBulletin();
  }, [id]);

  if (loading) {
    return (
      <Layout>
        <div className="flex justify-center items-center min-h-screen">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary"></div>
        </div>
      </Layout>
    );
  }

  if (!bulletin) {
    return (
      <Layout>
        <div className="text-center py-16">
          <h1 className="text-2xl text-gray-600">Bulletin not found</h1>
          <button 
            onClick={() => router.back()} 
            className="mt-4 px-6 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors"
          >
            Go Back
          </button>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <SEO 
        title={`${bulletin.title} | St. Joseph Catholic Church Kahawa Sukari`}
        description={bulletin.excerpt || bulletin.description}
        keywords={bulletin.tags?.join(', ')}
        url={`https://stjosephchurchkahawasukari.org/welcome/bulletin/${bulletin._id}`}
      />
      <article className="max-w-4xl mx-auto px-4  py-28">
        <header className="mb-8">
          {/* Categories/Sections */}
          {bulletin.sections?.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-4">
              {bulletin.sections.map((section, index) => (
                <span 
                  key={index}
                  className="px-3 py-1 bg-indigo-100 text-indigo-800 text-sm font-medium rounded-full"
                >
                  {section}
                </span>
              ))}
            </div>
          )}

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 leading-tight">
            {bulletin.title}
          </h1>

          {/* Excerpt */}
          {bulletin.excerpt && (
            <p className="text-xl text-gray-600 mb-6 italic">
              {bulletin.excerpt}
            </p>
          )}

          {/* Metadata */}
          <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 border-b border-gray-200 pb-6">
            <div className="flex items-center">
              <span className="font-medium">By {bulletin.author?.name || 'Admin'}</span>
            </div>
            {bulletin.readingTime && (
              <div className="flex items-center">
                <span>{bulletin.readingTime} min read</span>
              </div>
            )}
          </div>
        </header>

        {/* Description */}
        {bulletin.description && (
          <div className="mb-8">
            <p className="text-lg text-gray-700 leading-relaxed">
              {bulletin.description}
            </p>
          </div>
        )}

        {/* Content */}
        <div className="prose prose-lg max-w-none leading-relaxed">
          {bulletin.content && (
            <div 
              className="text-gray-800 leading-relaxed"
              dangerouslySetInnerHTML={{ 
                __html: bulletin.content.replace(
                  /<img([^>]+)>/g, 
                  '<img$1 class="max-w-full h-auto rounded-lg shadow-md my-6 mx-auto block" />'
                ) 
              }}
            />
          )}
        </div>

        {/* Tags */}
        {bulletin.tags?.length > 0 && (
          <div className="mt-12 pt-8 border-t border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Tags</h3>
            <div className="flex flex-wrap gap-2">
              {bulletin.tags.map((tag, index) => (
                <span 
                  key={index}
                  className="px-3 py-1 bg-gray-100 text-gray-800 text-sm rounded-full"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Other Bulletins Section */}
        {otherBulletins.length > 0 && (
          <div className="mt-16 pt-12 border-t border-gray-200 bg-gray-50">
            <div className="max-w-6xl mx-auto px-4">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2 text-center">More from Our Bulletin</h2>
              <p className="text-gray-600 text-center mb-8">Discover more inspiring content from our community</p>
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
                {otherBulletins.map((otherBulletin) => (
                  <Link 
                    key={otherBulletin._id}
                    href={`/welcome/bulletin/${otherBulletin._id}`}
                    className="group"
                  >
                    <article className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-100 hover:border-gray-200 transform hover:-translate-y-1">
                      <div className="relative h-40 overflow-hidden">
                        <img
                          src={otherBulletin.featuredImage || "https://kahawa-sukari.s3.amazonaws.com/1757084396156.jpeg"}
                          alt={otherBulletin.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      </div>
                      <div className="p-5">
                        <h3 className="font-bold text-gray-900 mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors text-sm leading-tight">
                          {otherBulletin.title}
                        </h3>
                        {otherBulletin.excerpt && (
                          <p className="text-gray-700 text-xs line-clamp-2 mb-3 leading-relaxed">
                            {otherBulletin.excerpt}
                          </p>
                        )}
                        <div className="flex items-center justify-between text-xs text-gray-500">
                          
                          {otherBulletin.readingTime && (
                            <span className="flex items-center">
                              <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                              </svg>
                              {otherBulletin.readingTime} min
                            </span>
                          )}
                        </div>
                        <div className="mt-3 flex items-center text-xs text-blue-600 font-medium group-hover:text-blue-700 transition-colors">
                          Read more
                          <svg className="w-3 h-3 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"></path>
                          </svg>
                        </div>
                      </div>
                    </article>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Back Button */}
        <div className="mt-12 text-center">
          <button 
            onClick={() => router.back()} 
            className="px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors font-medium"
          >
            ← Back to Bulletins
          </button>
        </div>
      </article>
    </Layout>
  );
}

export default BulletDetailsPage;