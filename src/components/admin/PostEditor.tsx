import React, { useState, useRef } from 'react';
import { Image, Save, Eye, ArrowLeft } from 'lucide-react';
import type { Post } from '../../types';

interface PostEditorProps {
  post?: Partial<Post>;
  onSave: (data: {
    title: string;
    content: string;
    excerpt: string;
    thumbnail?: string;
    status: 'draft' | 'published';
    author: string;
  }) => Promise<void>;
  onCancel: () => void;
  loading?: boolean;
}

const PostEditor: React.FC<PostEditorProps> = ({
  post,
  onSave,
  onCancel,
  loading = false
}) => {
  const [title, setTitle] = useState(post?.title || '');
  const [content, setContent] = useState(post?.content || '');
  const [excerpt, setExcerpt] = useState(post?.excerpt || '');
  const [thumbnail, setThumbnail] = useState(post?.thumbnail || '');
  const [author, setAuthor] = useState(post?.author || 'Admin Karang Taruna');
  const [status, setStatus] = useState<'draft' | 'published'>(post?.status || 'draft');
  const [showPreview, setShowPreview] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setThumbnail(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!title.trim() || !content.trim()) {
      alert('Judul dan konten harus diisi');
      return;
    }

    const excerptText = excerpt || content.replace(/<[^>]*>/g, '').slice(0, 150) + '...';

    await onSave({
      title,
      content,
      excerpt: excerptText,
      thumbnail,
      status,
      author
    });
  };

  return (
    <div className="bg-white rounded-lg shadow-md">
      <div className="p-6 border-b">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <button
              onClick={onCancel}
              className="flex items-center space-x-2 text-gray-600 hover:text-gray-800"
            >
              <ArrowLeft className="h-5 w-5" />
              <span>Kembali</span>
            </button>
            <h1 className="text-xl font-bold text-gray-900">
              {post?.id ? 'Edit Artikel' : 'Buat Artikel Baru'}
            </h1>
          </div>
          
          <button
            onClick={() => setShowPreview(!showPreview)}
            className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50"
          >
            <Eye className="h-4 w-4" />
            <span>{showPreview ? 'Edit' : 'Preview'}</span>
          </button>
        </div>
      </div>

      {showPreview ? (
        <div className="p-6">
          <article className="max-w-4xl mx-auto">
            {thumbnail && (
              <img
                src={thumbnail}
                alt={title}
                className="w-full aspect-video object-cover rounded-lg mb-6"
              />
            )}
            <h1 className="text-3xl font-bold text-gray-900 mb-4">{title}</h1>
            <div className="text-gray-600 mb-6">
              By {author} • Status: {status === 'published' ? 'Published' : 'Draft'}
            </div>
            <div 
              className="prose max-w-none"
              dangerouslySetInnerHTML={{ __html: content }}
            />
          </article>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="p-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-6">
              <div>
                <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-2">
                  Judul Artikel *
                </label>
                <input
                  type="text"
                  id="title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent text-lg"
                  placeholder="Masukkan judul artikel..."
                  required
                />
              </div>

              <div>
                <label htmlFor="content" className="block text-sm font-medium text-gray-700 mb-2">
                  Konten Artikel *
                </label>
                <textarea
                  id="content"
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  rows={20}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  placeholder="Tulis konten artikel di sini... Anda bisa menggunakan HTML tags sederhana seperti <p>, <br>, <strong>, <em>, dll."
                  required
                />
                <p className="text-xs text-gray-500 mt-1">
                  Tip: Gunakan HTML tags untuk formatting. Contoh: &lt;p&gt;paragraf&lt;/p&gt;, &lt;strong&gt;tebal&lt;/strong&gt;
                </p>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <div className="bg-gray-50 rounded-lg p-4">
                <h3 className="font-medium text-gray-900 mb-4">Pengaturan Publikasi</h3>
                
                <div className="space-y-4">
                  <div>
                    <label htmlFor="status" className="block text-sm font-medium text-gray-700 mb-2">
                      Status
                    </label>
                    <select
                      id="status"
                      value={status}
                      onChange={(e) => setStatus(e.target.value as 'draft' | 'published')}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    >
                      <option value="draft">Draft</option>
                      <option value="published">Published</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="author" className="block text-sm font-medium text-gray-700 mb-2">
                      Penulis
                    </label>
                    <input
                      type="text"
                      id="author"
                      value={author}
                      onChange={(e) => setAuthor(e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    />
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 rounded-lg p-4">
                <h3 className="font-medium text-gray-900 mb-4">Gambar Unggulan</h3>
                
                {thumbnail ? (
                  <div className="mb-4">
                    <img
                      src={thumbnail}
                      alt="Preview"
                      className="w-full aspect-video object-cover rounded-lg"
                    />
                    <button
                      type="button"
                      onClick={() => setThumbnail('')}
                      className="mt-2 text-sm text-red-600 hover:text-red-800"
                    >
                      Hapus Gambar
                    </button>
                  </div>
                ) : (
                  <div
                    onClick={() => fileInputRef.current?.click()}
                    className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center cursor-pointer hover:border-orange-400"
                  >
                    <Image className="h-8 w-8 text-gray-400 mx-auto mb-2" />
                    <p className="text-sm text-gray-600">Klik untuk upload gambar</p>
                  </div>
                )}

                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="hidden"
                />
              </div>

              <div className="bg-gray-50 rounded-lg p-4">
                <label htmlFor="excerpt" className="block text-sm font-medium text-gray-700 mb-2">
                  Ringkasan (Excerpt)
                </label>
                <textarea
                  id="excerpt"
                  value={excerpt}
                  onChange={(e) => setExcerpt(e.target.value)}
                  rows={4}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  placeholder="Ringkasan artikel (opsional, akan otomatis diambil dari konten jika kosong)"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-orange-600 text-white px-4 py-3 rounded-lg hover:bg-orange-700 focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors font-medium flex items-center justify-center space-x-2"
              >
                <Save className="h-4 w-4" />
                <span>{loading ? 'Menyimpan...' : 'Simpan Artikel'}</span>
              </button>
            </div>
          </div>
        </form>
      )}
    </div>
  );
};

export default PostEditor;