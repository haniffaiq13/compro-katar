import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import PostEditor from '../../components/admin/PostEditor';
import { postService } from '../../services/localPostService';
import type { Post } from '../../types';

const PostEdit: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [post, setPost] = useState<Post | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (id) {
      loadPost(id);
    }
  }, [id]);

  const loadPost = async (postId: string) => {
    try {
      setLoading(true);
      const fetchedPost = await postService.getPostById(postId);
      if (fetchedPost) {
        setPost(fetchedPost);
      } else {
        alert('Artikel tidak ditemukan');
        navigate('/admin/posts');
      }
    } catch (error) {
      console.error('Error loading post:', error);
      alert('Gagal memuat artikel');
      navigate('/admin/posts');
    } finally {
      setLoading(false);
    }
  };

  const handleSave = async (data: {
    title: string;
    content: string;
    excerpt: string;
    thumbnail?: string;
    status: 'draft' | 'published';
    author: string;
  }) => {
    if (!post) return;

    try {
      const updates: any = { ...data };
      
      // Update publishedAt only if changing from draft to published
      if (post.status === 'draft' && data.status === 'published') {
        updates.publishedAt = new Date().toISOString();
      }
      
      await postService.updatePost(post.id, updates);
      alert('Artikel berhasil diupdate!');
      navigate('/admin/posts');
    } catch (error) {
      console.error('Error updating post:', error);
      alert('Gagal mengupdate artikel');
    }
  };

  const handleCancel = () => {
    if (confirm('Yakin ingin membatalkan? Perubahan yang belum disimpan akan hilang.')) {
      navigate('/admin/posts');
    }
  };

  if (loading) {
    return (
      <div className="space-y-6">
        <div className="bg-white rounded-lg shadow-md p-6 animate-pulse">
          <div className="h-8 bg-gray-300 rounded w-1/4 mb-6"></div>
          <div className="space-y-4">
            <div className="h-4 bg-gray-300 rounded"></div>
            <div className="h-32 bg-gray-300 rounded"></div>
          </div>
        </div>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="text-center py-12">
        <p className="text-xl text-gray-600">Artikel tidak ditemukan</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <PostEditor
        post={post}
        onSave={handleSave}
        onCancel={handleCancel}
      />
    </div>
  );
};

export default PostEdit;