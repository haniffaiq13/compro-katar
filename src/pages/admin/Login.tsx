import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import LoginForm from '../../components/admin/LoginForm';
import { authService } from '../../services/authService';

const Login: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Redirect if already authenticated
    if (authService.isAuthenticated()) {
      navigate('/admin/dashboard');
    }
  }, [navigate]);

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4">
      <LoginForm />
    </div>
  );
};

export default Login;