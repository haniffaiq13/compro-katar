import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import AdminLayout from './components/admin/AdminLayout';
import Home from './pages/Home';
import News from './pages/News';
import NewsDetail from './pages/NewsDetail';
import Contact from './pages/Contact';
import AdminLogin from './pages/admin/Login';
import Dashboard from './pages/admin/Dashboard';
import PostManagement from './pages/admin/PostManagement';
import PostCreate from './pages/admin/PostCreate';
import PostEdit from './pages/admin/PostEdit';
import { authService } from './services/authService';

// Protected Route Component
const ProtectedRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const isAuthenticated = authService.isAuthenticated();
  
  if (!isAuthenticated) {
    return <Navigate to="/admin" replace />;
  }
  
  return <>{children}</>;
};

function App() {
  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={
          <Layout>
            <Home />
          </Layout>
        } />
        
        <Route path="/berita" element={
          <Layout>
            <News />
          </Layout>
        } />
        
        <Route path="/berita/:slug" element={
          <Layout>
            <NewsDetail />
          </Layout>
        } />
        
        <Route path="/kontak" element={
          <Layout>
            <Contact />
          </Layout>
        } />

        {/* Admin Routes */}
        <Route path="/admin" element={<AdminLogin />} />
        
        <Route path="/admin/dashboard" element={
          <ProtectedRoute>
            <AdminLayout>
              <Dashboard />
            </AdminLayout>
          </ProtectedRoute>
        } />
        
        <Route path="/admin/posts" element={
          <ProtectedRoute>
            <AdminLayout>
              <PostManagement />
            </AdminLayout>
          </ProtectedRoute>
        } />
        
        <Route path="/admin/posts/create" element={
          <ProtectedRoute>
            <AdminLayout>
              <PostCreate />
            </AdminLayout>
          </ProtectedRoute>
        } />
        
        <Route path="/admin/posts/:id/edit" element={
          <ProtectedRoute>
            <AdminLayout>
              <PostEdit />
            </AdminLayout>
          </ProtectedRoute>
        } />

        {/* 404 Redirect */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

export default App;