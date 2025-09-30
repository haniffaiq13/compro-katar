import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Plus, Filter } from 'lucide-react';
import PostList from '../../components/admin/PostList';
import { postService } from '../../services/localPostService';
import type { Post } from '../../types';

const PostManagement: React.FC = () => {
  const navigate = useNavigate();
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState<'all' | 'published' | 'draft'>('all');
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPosts, setTotalPosts] = useState(0);
  const postsPerPage = 10;

  const totalPages = Math.ceil(totalPosts / postsPerPage);

  useEffect(() => {
    loadPosts();
  }, [filter, currentPage]);

  const loadPosts = async () => {
    try {
      setLoading(true);
      const status = filter === 'all' ? undefined : filter as 'published' | 'draft';
      const { posts: fetchedPosts, total } = await postService.getPosts(status, currentPage, postsPerPage);
      setPosts(fetchedPosts);
      setTotalPosts(total);
    } catch (error) {
      console.error('Error loading posts:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleEdit = (post: Post) => {
    navigate(`/admin/posts/${post.id}/edit`);
  };

  const handleDelete = async (id: string) => {
    try {
      await postService.deletePost(id);
      loadPosts(); // Reload posts after deletion
    } catch (error) {
      console.error('Error deleting post:', error);
      alert('Gagal menghapus artikel');
    }
  };

  const handleView = (slug: string) => {
    window.open(`/berita/${slug}`, '_blank');
  };

  const handleFilterChange = (newFilter: 'all' | 'published' | 'draft') => {
    setFilter(newFilter);
    setCurrentPage(1);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Kelola Artikel</h1>
          <p className="text-gray-600">Manage semua artikel dan postingan</p>
        </div>
        
        <button
          onClick={() => navigate('/admin/posts/create')}
          className="bg-orange-600 text-white px-4 py-2 rounded-lg hover:bg-orange-700 transition-colors flex items-center space-x-2"
        >
          <Plus className="h-4 w-4" />
          <span>Buat Artikel</span>
        </button>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-lg shadow-md p-4">
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <Filter className="h-5 w-5 text-gray-400" />
            <span className="text-sm font-medium text-gray-700">Filter:</span>
          </div>
          
          <div className="flex space-x-2">
            {[
              { key: 'all', label: 'Semua' },
              { key: 'published', label: 'Published' },
              { key: 'draft', label: 'Draft' }
            ].map((item) => (
              <button
                key={item.key}
                onClick={() => handleFilterChange(item.key as any)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  filter === item.key
                    ? 'bg-orange-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Posts List */}
      <PostList
        posts={posts}
        onEdit={handleEdit}
        onDelete={handleDelete}
        onView={handleView}
        loading={loading}
      />

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex items-center justify-center space-x-2">
          <button
            onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
            disabled={currentPage === 1}
            className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Previous
          </button>

          {[...Array(totalPages)].map((_, i) => {
            const page = i + 1;
            return (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`px-4 py-2 rounded-lg font-medium ${
                  currentPage === page
                    ? 'bg-orange-600 text-white'
                    : 'border border-gray-300 hover:bg-gray-50'
                }`}
              >
                {page}
              </button>
            );
          })}

          <button
            onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
            disabled={currentPage === totalPages}
            className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
};

export default PostManagement;