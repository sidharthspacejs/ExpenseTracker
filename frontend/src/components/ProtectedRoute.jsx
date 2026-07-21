import { Navigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

const ProtectedRoute = ({ children, allowedRole }) => {
  const { user } = useAuth();
  if (!user) {
    <Navigate to="/" replace />;
  }
  if (user.role !== allowedRole) {
    <Navigate to="/" replace />;
  }

  return children;
};

export default ProtectedRoute;
