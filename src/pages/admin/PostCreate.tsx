import React from 'react';
import { useNavigate } from 'react-router-dom';
import PostEditor from '../../components/admin/PostEditor';
import { postService } from '../../services/localPostService';

const PostCreate: React.FC = () => {
  const navigate = useNavigate();

  const handleSave = async (data: {
    title: string;
    content: string;
    excerpt: string;
    thumbnail?: string;
    status: 'draft' | 'published';
    author: string;
  }) => {
    try {
      const publishedAt = data.status === 'published' ? new Date().toISOString() : new Date().toISOString();
      
      await postService.createPost({
        ...data,
        publishedAt
      });
      
      alert('Artikel berhasil dibuat!');
      navigate('/admin/posts');
    } catch (error) {
      console.error('Error creating post:', error);
      alert('Gagal membuat artikel');
    }
  };

  const handleCancel = () => {
    if (confirm('Yakin ingin membatalkan? Data yang belum disimpan akan hilang.')) {
      navigate('/admin/posts');
    }
  };

  return (
    <div className="space-y-6">
      <PostEditor
        onSave={handleSave}
        onCancel={handleCancel}
      />
    </div>
  );
};

export default PostCreate;