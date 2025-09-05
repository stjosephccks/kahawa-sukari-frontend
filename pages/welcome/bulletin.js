import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Image from 'next/image';
import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import { FiSearch, FiCalendar, FiClock, FiArrowRight } from 'react-icons/fi';

const DEFAULT_IMAGE = "https://kahawa-sukari.s3.amazonaws.com/1757084396156.jpeg";

function BulletinPage() {
  const [bulletins, setBulletins] = useState([]);
  const [featuredBulletin, setFeaturedBulletin] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const fetchBulletins = async () => {
      try {
        const response = await fetch('/api/bulletins');
        if (!response.ok) throw new Error('Failed to fetch bulletins');
        const data = await response.json();
        setBulletins(data);
      } catch (error) {
        console.error("Error fetching bulletins:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBulletins();
  }, []);

  // Filter bulletins based on search query
  const filteredBulletins = bulletins.filter(bulletin => 
    (bulletin.title?.toLowerCase().includes(searchQuery.toLowerCase()) ||
    (bulletin.description?.toLowerCase().includes(searchQuery.toLowerCase()))) &&
    !bulletin.featured
  );

  // Get featured bulletin
  useEffect(() => {
    if (bulletins.length > 0) {
      const featured = bulletins.find(b => b.featured) || bulletins[0];
      setFeaturedBulletin(featured);
    }
  }, [bulletins]);

  const formatDate = (dateString) => {
    if (!dateString) return '';
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  if (loading) {
    return (
      <Layout>
        <div className="flex justify-center items-center min-h-screen">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary"></div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <SEO 
        title="Latest News & Updates | St. Joseph Catholic Church"
        description="Stay updated with the latest news, announcements, and events from St. Joseph Catholic Church."
        url="https://stjosephchurchkahawasukari.org/welcome/bulletin"
      />

      {/* Search Bar */}
      <section className="py-8 bg-white border-b border-gray-200 sticky top-16 z-40 shadow-sm">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl pt-4 mx-auto relative">
            <div className="relative">
              <input
                type="text"
                placeholder="Search articles..."
                className="w-full px-6 py-4 pr-12 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <FiSearch className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500 text-xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Article */}
      {featuredBulletin && (
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="md:flex">
                <div className="md:flex-shrink-0 md:w-1/2">
                  <div className="relative h-64 md:h-full">
                    <Image
                      src={featuredBulletin.featuredImage || featuredBulletin.images?.[0] || DEFAULT_IMAGE}
                      alt={featuredBulletin.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <div className="p-8">
                  <div className="flex flex-wrap items-center gap-2 mb-3">
                    {featuredBulletin.tags?.length > 0 ? (
                      featuredBulletin.tags.map((tag, index) => (
                        <span key={index} className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary/10 text-primary">
                          {tag}
                        </span>
                      ))
                    ) : (
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary/10 text-primary">
                        Featured
                      </span>
                    )}
                    <span className="text-gray-500 text-sm">• {formatDate(featuredBulletin.publishedAt)}</span>
                  </div>
                  <h2 className="text-2xl font-bold mb-4">
                    {featuredBulletin.title}
                  </h2>
                  <p className="text-gray-600 mb-6">
                    {featuredBulletin.excerpt || featuredBulletin.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-500 font-medium">
                        {(featuredBulletin.author?.name || 'A')[0].toUpperCase()}
                      </div>
                      <div className="ml-3">
                        <p className="text-sm font-medium text-gray-900">
                          {featuredBulletin.author?.name || 'Admin'}
                        </p>
                        <p className="text-sm text-gray-500">
                          {formatDate(featuredBulletin.publishedAt, true)}
                        </p>
                      </div>
                    </div>
                    <Link 
                      href={`/welcome/bulletin/${featuredBulletin._id}`}
                      className="text-primary font-medium text-sm hover:underline flex items-center"
                    >
                      Read More <FiArrowRight className="ml-1" size={16} />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Articles Grid */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredBulletins.map((bulletin) => (
              <div key={bulletin._id} className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="relative h-48 w-full">
                  <Image
                    src={bulletin.featuredImage || bulletin.images?.[0] || DEFAULT_IMAGE}
                    alt={bulletin.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex flex-wrap items-center gap-2 mb-3">
                    {bulletin.tags?.length > 0 ? (
                      bulletin.tags.slice(0, 2).map((tag, index) => (
                        <span key={index} className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary/10 text-primary">
                          {tag}
                        </span>
                      ))
                    ) : (
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary/10 text-primary">
                        News
                      </span>
                    )}
                    <span className="text-gray-500 text-sm">• {formatDate(bulletin.publishedAt)}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3 line-clamp-2">
                    {bulletin.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {bulletin.excerpt || bulletin.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-gray-500 text-sm font-medium">
                        {(bulletin.author?.name || 'A')[0].toUpperCase()}
                      </div>
                      <span className="ml-2 text-sm text-gray-600">
                        {bulletin.author?.name || 'Admin'}
                      </span>
                    </div>
                    <Link 
                      href={`/welcome/bulletin/${bulletin._id}`}
                      className="text-primary font-medium text-sm hover:underline flex items-center"
                    >
                      Read More <FiArrowRight className="ml-1" size={16} />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {filteredBulletins.length === 0 && (
            <div className="text-center py-16">
              <p className="text-gray-500 text-lg">
                {searchQuery ? 'No articles match your search.' : 'No articles found.'}
              </p>
            </div>
          )}
        </div>
      </section>
            
    </Layout>
  );
}

export default BulletinPage;
