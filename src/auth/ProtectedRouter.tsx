import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from './AuthContext';

const ProtectedRoute = () => {
  const { currentUser } = useAuth();

  const isAuthenticated = !!currentUser;

  return isAuthenticated ? <Outlet /> : <Navigate to="/google_signin" />;
};

export default ProtectedRoute;
