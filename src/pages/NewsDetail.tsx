import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, User, Share2, Facebook, Twitter, Copy, Check } from 'lucide-react';
import { format } from 'date-fns';
import { id } from 'date-fns/locale';
import { postService } from '../services/localPostService';
import type { Post } from '../types';

const NewsDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [post, setPost] = useState<Post | null>(null);
  const [loading, setLoading] = useState(true);
  const [copied, setCopied] = useState(false);
  const [relatedPosts, setRelatedPosts] = useState<Post[]>([]);

  useEffect(() => {
    if (slug) {
      loadPost(slug);
      loadRelatedPosts();
    }
  }, [slug]);

  const loadPost = async (slug: string) => {
    try {
      setLoading(true);
      const fetchedPost = await postService.getPostBySlug(slug);
      if (fetchedPost) {
        if (fetchedPost.status !== 'published') {
          navigate('/berita');
          return;
        }
        setPost(fetchedPost);
      } else {
        navigate('/berita');
      }
    } catch (error) {
      console.error('Error loading post:', error);
      navigate('/berita');
    } finally {
      setLoading(false);
    }
  };

  const loadRelatedPosts = async () => {
    try {
      const { posts } = await postService.getPublishedPosts(1, 3);
      setRelatedPosts(posts.filter(p => p.slug !== slug));
    } catch (error) {
      console.error('Error loading related posts:', error);
    }
  };

  const handleShare = async () => {
    const url = window.location.href;
    
    if (navigator.share) {
      try {
        await navigator.share({
          title: post?.title,
          text: post?.excerpt,
          url: url,
        });
      } catch (error) {
        console.log('Error sharing:', error);
      }
    } else {
      // Fallback to copy URL
      try {
        await navigator.clipboard.writeText(url);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      } catch (error) {
        console.error('Error copying to clipboard:', error);
      }
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-white py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="animate-pulse">
              <div className="h-8 bg-gray-300 rounded w-1/4 mb-8"></div>
              <div className="h-64 bg-gray-300 rounded mb-8"></div>
              <div className="h-10 bg-gray-300 rounded w-3/4 mb-4"></div>
              <div className="h-6 bg-gray-300 rounded w-1/2 mb-8"></div>
              <div className="space-y-4">
                {[...Array(8)].map((_, i) => (
                  <div key={i} className="h-4 bg-gray-300 rounded"></div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="min-h-screen bg-white py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">Artikel tidak ditemukan</h1>
            <Link
              to="/berita"
              className="inline-flex items-center space-x-2 text-orange-600 hover:text-orange-700"
            >
              <ArrowLeft className="h-5 w-5" />
              <span>Kembali ke Berita</span>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Back Button */}
          <Link
            to="/berita"
            className="inline-flex items-center space-x-2 text-gray-600 hover:text-gray-800 mb-8 transition-colors"
          >
            <ArrowLeft className="h-5 w-5" />
            <span>Kembali ke Berita</span>
          </Link>

          {/* Article Header */}
          <header className="mb-8">
            {post.thumbnail && (
              <img
                src={post.thumbnail}
                alt={post.title}
                className="w-full aspect-video object-cover rounded-lg mb-8"
              />
            )}

            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              {post.title}
            </h1>

            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6">
              <div className="flex items-center space-x-6 text-gray-600 mb-4 sm:mb-0">
                <div className="flex items-center space-x-2">
                  <Calendar className="h-5 w-5" />
                  <span>{format(new Date(post.publishedAt), 'dd MMMM yyyy', { locale: id })}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <User className="h-5 w-5" />
                  <span>{post.author}</span>
                </div>
              </div>

              <div className="flex items-center space-x-2">
                <button
                  onClick={handleShare}
                  className="flex items-center space-x-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
                >
                  {copied ? <Check className="h-4 w-4" /> : <Share2 className="h-4 w-4" />}
                  <span>{copied ? 'Copied!' : 'Share'}</span>
                </button>
                
                <a
                  href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  <Facebook className="h-4 w-4" />
                </a>
                
                <a
                  href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(window.location.href)}&text=${encodeURIComponent(post.title)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-blue-400 text-white rounded-lg hover:bg-blue-500 transition-colors"
                >
                  <Twitter className="h-4 w-4" />
                </a>
              </div>
            </div>
          </header>

          {/* Article Content */}
          <article className="prose max-w-none">
            <div 
              className="text-lg text-gray-700 leading-relaxed"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </article>

          {/* Related Posts */}
          {relatedPosts.length > 0 && (
            <section className="mt-16 pt-16 border-t">
              <h2 className="text-2xl font-bold text-gray-900 mb-8">Artikel Terkait</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {relatedPosts.slice(0, 3).map((relatedPost) => (
                  <Link
                    key={relatedPost.id}
                    to={`/berita/${relatedPost.slug}`}
                    className="group"
                  >
                    <article className="bg-white rounded-lg overflow-hidden hover:shadow-md transition-shadow">
                      {relatedPost.thumbnail && (
                        <img
                          src={relatedPost.thumbnail}
                          alt={relatedPost.title}
                          className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      )}
                      <div className="p-4">
                        <h3 className="font-semibold text-gray-900 line-clamp-2 group-hover:text-orange-600 transition-colors">
                          {relatedPost.title}
                        </h3>
                        <div className="flex items-center text-sm text-gray-500 mt-2">
                          <Calendar className="h-3 w-3 mr-1" />
                          <span>{format(new Date(relatedPost.publishedAt), 'dd MMM yyyy', { locale: id })}</span>
                        </div>
                      </div>
                    </article>
                  </Link>
                ))}
              </div>
            </section>
          )}
        </div>
      </div>
    </div>
  );
};

export default NewsDetail;