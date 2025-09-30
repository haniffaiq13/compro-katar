import React from 'react';
import { CreditCard as Edit, Trash2, Eye, Calendar, User } from 'lucide-react';
import { format } from 'date-fns';
import { id } from 'date-fns/locale';
import type { Post } from '../../types';

interface PostListProps {
  posts: Post[];
  onEdit: (post: Post) => void;
  onDelete: (id: string) => void;
  onView: (slug: string) => void;
  loading?: boolean;
}

const PostList: React.FC<PostListProps> = ({
  posts,
  onEdit,
  onDelete,
  onView,
  loading = false
}) => {
  if (loading) {
    return (
      <div className="bg-white rounded-lg shadow-md">
        <div className="p-6">
          <div className="animate-pulse space-y-4">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="h-16 bg-gray-200 rounded"></div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (posts.length === 0) {
    return (
      <div className="bg-white rounded-lg shadow-md p-8 text-center">
        <p className="text-gray-600">Belum ada artikel</p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Artikel
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Status
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Tanggal
              </th>
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                Aksi
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {posts.map((post) => (
              <tr key={post.id} className="hover:bg-gray-50">
                <td className="px-6 py-4">
                  <div className="flex items-center">
                    {post.thumbnail && (
                      <img
                        src={post.thumbnail}
                        alt=""
                        className="h-12 w-12 object-cover rounded-lg mr-4"
                      />
                    )}
                    <div>
                      <h3 className="text-sm font-medium text-gray-900 line-clamp-1">
                        {post.title}
                      </h3>
                      <div className="flex items-center space-x-2 mt-1">
                        <div className="flex items-center text-xs text-gray-500">
                          <User className="h-3 w-3 mr-1" />
                          {post.author}
                        </div>
                      </div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span
                    className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                      post.status === 'published'
                        ? 'bg-green-100 text-green-800'
                        : 'bg-yellow-100 text-yellow-800'
                    }`}
                  >
                    {post.status === 'published' ? 'Published' : 'Draft'}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center text-sm text-gray-500">
                    <Calendar className="h-4 w-4 mr-1" />
                    {format(new Date(post.publishedAt || post.createdAt), 'dd MMM yyyy', { locale: id })}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <div className="flex items-center justify-end space-x-2">
                    <button
                      onClick={() => onView(post.slug)}
                      className="text-blue-600 hover:text-blue-900 p-1"
                      title="Lihat"
                    >
                      <Eye className="h-4 w-4" />
                    </button>
                    <button
                      onClick={() => onEdit(post)}
                      className="text-orange-600 hover:text-orange-900 p-1"
                      title="Edit"
                    >
                      <Edit className="h-4 w-4" />
                    </button>
                    <button
                      onClick={() => {
                        if (confirm('Yakin ingin menghapus artikel ini?')) {
                          onDelete(post.id);
                        }
                      }}
                      className="text-red-600 hover:text-red-900 p-1"
                      title="Hapus"
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PostList;