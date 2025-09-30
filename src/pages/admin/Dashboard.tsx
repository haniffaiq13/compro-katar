import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Plus, FileText, Eye, Users, Calendar, TrendingUp, Download, Upload, RotateCcw } from 'lucide-react';
import { postService } from '../../services/localPostService';
import { dataManager } from '../../utils/dataManager';
import type { Post } from '../../types';

const Dashboard: React.FC = () => {
  const [stats, setStats] = useState({
    totalPosts: 0,
    publishedPosts: 0,
    draftPosts: 0,
  });
  const [recentPosts, setRecentPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadDashboardData();
  }, []);

  const loadDashboardData = async () => {
    try {
      setLoading(true);
      
      // Get all posts for stats
      const { posts: allPosts } = await postService.getPosts();
      const publishedCount = allPosts.filter(p => p.status === 'published').length;
      const draftCount = allPosts.filter(p => p.status === 'draft').length;
      
      setStats({
        totalPosts: allPosts.length,
        publishedPosts: publishedCount,
        draftPosts: draftCount,
      });

      // Get recent posts
      const { posts: recent } = await postService.getPosts(undefined, 1, 5);
      setRecentPosts(recent);
    } catch (error) {
      console.error('Error loading dashboard data:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleImportData = () => {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = '.json';
    input.onchange = async (e) => {
      const file = (e.target as HTMLInputElement).files?.[0];
      if (file) {
        try {
          await dataManager.importData(file);
          alert('Data berhasil diimport!');
          loadDashboardData();
        } catch (error) {
          alert('Error importing data: ' + (error as Error).message);
        }
      }
    };
    input.click();
  };

  if (loading) {
    return (
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="bg-white p-6 rounded-lg shadow-md animate-pulse">
              <div className="h-4 bg-gray-300 rounded w-1/2 mb-4"></div>
              <div className="h-8 bg-gray-300 rounded w-1/4"></div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
          <p className="text-gray-600">Selamat datang di admin panel Karang Taruna</p>
        </div>
        
        <Link
          to="/admin/posts/create"
          className="bg-orange-600 text-white px-4 py-2 rounded-lg hover:bg-orange-700 transition-colors flex items-center space-x-2"
        >
          <Plus className="h-4 w-4" />
          <span>Buat Artikel</span>
        </Link>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Total Artikel</p>
              <p className="text-2xl font-bold text-gray-900">{stats.totalPosts}</p>
            </div>
            <div className="bg-blue-100 p-3 rounded-full">
              <FileText className="h-6 w-6 text-blue-600" />
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Published</p>
              <p className="text-2xl font-bold text-green-600">{stats.publishedPosts}</p>
            </div>
            <div className="bg-green-100 p-3 rounded-full">
              <Eye className="h-6 w-6 text-green-600" />
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Draft</p>
              <p className="text-2xl font-bold text-yellow-600">{stats.draftPosts}</p>
            </div>
            <div className="bg-yellow-100 p-3 rounded-full">
              <FileText className="h-6 w-6 text-yellow-600" />
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Posts */}
        <div className="bg-white rounded-lg shadow-md">
          <div className="p-6 border-b">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold text-gray-900">Artikel Terbaru</h2>
              <Link
                to="/admin/posts"
                className="text-orange-600 hover:text-orange-700 text-sm font-medium"
              >
                Lihat Semua
              </Link>
            </div>
          </div>
          
          <div className="p-6">
            {recentPosts.length === 0 ? (
              <p className="text-gray-600 text-center py-4">Belum ada artikel</p>
            ) : (
              <div className="space-y-4">
                {recentPosts.map((post) => (
                  <div key={post.id} className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg">
                    <div className="flex-1">
                      <h3 className="font-medium text-gray-900 line-clamp-1">{post.title}</h3>
                      <div className="flex items-center space-x-2 mt-1">
                        <span
                          className={`text-xs px-2 py-1 rounded-full ${
                            post.status === 'published'
                              ? 'bg-green-100 text-green-800'
                              : 'bg-yellow-100 text-yellow-800'
                          }`}
                        >
                          {post.status}
                        </span>
                        <span className="text-xs text-gray-500">{post.author}</span>
                      </div>
                    </div>
                    <Link
                      to={`/admin/posts/${post.id}/edit`}
                      className="text-orange-600 hover:text-orange-700 ml-4"
                    >
                      <FileText className="h-4 w-4" />
                    </Link>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-white rounded-lg shadow-md">
          <div className="p-6 border-b">
            <h2 className="text-lg font-semibold text-gray-900">Aksi Cepat</h2>
          </div>
          
          <div className="p-6 space-y-4">
            <Link
              to="/admin/posts/create"
              className="flex items-center space-x-3 p-3 hover:bg-gray-50 rounded-lg transition-colors"
            >
              <div className="bg-orange-100 p-2 rounded">
                <Plus className="h-5 w-5 text-orange-600" />
              </div>
              <div>
                <h3 className="font-medium text-gray-900">Buat Artikel Baru</h3>
                <p className="text-sm text-gray-600">Tulis dan publish artikel baru</p>
              </div>
            </Link>

            <Link
              to="/admin/posts"
              className="flex items-center space-x-3 p-3 hover:bg-gray-50 rounded-lg transition-colors"
            >
              <div className="bg-blue-100 p-2 rounded">
                <FileText className="h-5 w-5 text-blue-600" />
              </div>
              <div>
                <h3 className="font-medium text-gray-900">Kelola Artikel</h3>
                <p className="text-sm text-gray-600">Edit, hapus, atau atur status artikel</p>
              </div>
            </Link>

            <Link
              to="/"
              target="_blank"
              className="flex items-center space-x-3 p-3 hover:bg-gray-50 rounded-lg transition-colors"
            >
              <div className="bg-green-100 p-2 rounded">
                <Eye className="h-5 w-5 text-green-600" />
              </div>
              <div>
                <h3 className="font-medium text-gray-900">Lihat Website</h3>
                <p className="text-sm text-gray-600">Preview website publik</p>
              </div>
            </Link>
          </div>
        </div>
      </div>

      {/* Data Management */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Manajemen Data</h2>
        <div className="flex flex-wrap gap-4">
          <button
            onClick={dataManager.exportData}
            className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            <Download className="h-4 w-4" />
            <span>Export Data</span>
          </button>
          
          <button
            onClick={handleImportData}
            className="flex items-center space-x-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
          >
            <Upload className="h-4 w-4" />
            <span>Import Data</span>
          </button>
          
          <button
            onClick={dataManager.resetData}
            className="flex items-center space-x-2 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
          >
            <RotateCcw className="h-4 w-4" />
            <span>Reset Data</span>
          </button>
        </div>
        
        <div className="mt-4 p-4 bg-blue-50 rounded-lg">
          <p className="text-sm text-blue-700">
            <strong>Export:</strong> Download semua data artikel ke file JSON<br />
            <strong>Import:</strong> Upload file JSON untuk restore data<br />
            <strong>Reset:</strong> Kembalikan ke data awal (seed data)
          </p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;