import React from 'react';
import { useAuth } from './AuthContext';

export const Logout: React.FC = () => {
  const { logout } = useAuth();

  const handleLogout = async () => {
    await logout();
    alert('Logged out successfully!');
  };

  return <button onClick={handleLogout}>Logout</button>;
};
