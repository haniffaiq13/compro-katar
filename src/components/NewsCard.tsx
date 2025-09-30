import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, User, ArrowRight } from 'lucide-react';
import { format } from 'date-fns';
import { id } from 'date-fns/locale';
import type { Post } from '../types';

interface NewsCardProps {
  post: Post;
}

const NewsCard: React.FC<NewsCardProps> = ({ post }) => {
  return (
    <article className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      {post.thumbnail && (
        <div className="aspect-video overflow-hidden">
          <img
            src={post.thumbnail}
            alt={post.title}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
          />
        </div>
      )}
      
      <div className="p-6">
        <div className="flex items-center space-x-4 text-sm text-gray-600 mb-3">
          <div className="flex items-center space-x-1">
            <Calendar className="h-4 w-4" />
            <span>{format(new Date(post.publishedAt), 'dd MMMM yyyy', { locale: id })}</span>
          </div>
          <div className="flex items-center space-x-1">
            <User className="h-4 w-4" />
            <span>{post.author}</span>
          </div>
        </div>
        
        <h2 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
          {post.title}
        </h2>
        
        <p className="text-gray-600 mb-4 line-clamp-3">
          {post.excerpt}
        </p>
        
        <Link
          to={`/berita/${post.slug}`}
          className="inline-flex items-center space-x-2 text-orange-600 hover:text-orange-700 font-medium transition-colors"
        >
          <span>Baca Selengkapnya</span>
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </article>
  );
};

export default NewsCard;