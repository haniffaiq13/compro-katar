import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Users, LogOut, Plus, FileText, Home } from 'lucide-react';
import { authService } from '../../services/authService';

interface AdminLayoutProps {
  children: React.ReactNode;
}

const AdminLayout: React.FC<AdminLayoutProps> = ({ children }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogout = () => {
    if (confirm('Yakin ingin logout?')) {
      authService.logout();
      navigate('/admin');
    }
  };

  const isActive = (path: string) => {
    return location.pathname === path ? 'bg-orange-600 text-white' : 'text-gray-700 hover:bg-orange-50 hover:text-orange-600';
  };

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-md">
        <div className="p-6 border-b">
          <div className="flex items-center space-x-2">
            <div className="bg-orange-600 p-2 rounded-lg">
              <Users className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-lg font-bold">Admin Panel</h1>
              <p className="text-sm text-gray-600">Karang Taruna</p>
            </div>
          </div>
        </div>

        <nav className="p-4 space-y-2">
          <Link
            to="/admin/dashboard"
            className={`flex items-center space-x-3 px-3 py-2 rounded-lg transition-colors ${isActive('/admin/dashboard')}`}
          >
            <Home className="h-5 w-5" />
            <span>Dashboard</span>
          </Link>
          
          <Link
            to="/admin/posts"
            className={`flex items-center space-x-3 px-3 py-2 rounded-lg transition-colors ${isActive('/admin/posts')}`}
          >
            <FileText className="h-5 w-5" />
            <span>Kelola Artikel</span>
          </Link>
          
          <Link
            to="/admin/posts/create"
            className={`flex items-center space-x-3 px-3 py-2 rounded-lg transition-colors ${isActive('/admin/posts/create')}`}
          >
            <Plus className="h-5 w-5" />
            <span>Buat Artikel</span>
          </Link>

          <div className="border-t pt-4 mt-4">
            <Link
              to="/"
              className="flex items-center space-x-3 px-3 py-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors"
            >
              <Home className="h-5 w-5" />
              <span>Kembali ke Website</span>
            </Link>
            
            <button
              onClick={handleLogout}
              className="w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-red-700 hover:bg-red-50 transition-colors"
            >
              <LogOut className="h-5 w-5" />
              <span>Logout</span>
            </button>
          </div>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8">
        {children}
      </main>
    </div>
  );
};

export default AdminLayout;