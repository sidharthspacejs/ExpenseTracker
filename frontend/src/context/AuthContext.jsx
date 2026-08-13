import { useState, createContext, useEffect } from "react";
import { login as loginApi } from "../api/authApi";
import { jwtDecode } from "jwt-decode";
import { getCurrentUser } from "../api/authApi";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, isLoading] = useState(true);

  const login = async (username, password) => {
    try {
      const response = await loginApi(username, password);

      localStorage.setItem("token", response.token);

      setUser(response.user);

      return response.user;
    } catch (error) {
      throw error;
    }
  };

  useEffect(() => {
    const loadUser = async () => {
      const token = localStorage.getItem("token");
      if (!token) {
        setUser(null);
        isLoading(false);
        return;
      }
      try {
        const user = await getCurrentUser();

        setUser(user);
      } catch (error) {
        localStorage.removeItem("token");
        setUser(null);
      } finally {
        isLoading(false);
      }
    };

    loadUser();
  }, []);

  return (
    <AuthContext.Provider value={{ user, login, loading }}>
      {children}
    </AuthContext.Provider>
  );
};
