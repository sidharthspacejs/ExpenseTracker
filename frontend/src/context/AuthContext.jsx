import { useState, createContext, useEffect } from "react";
import { login as loginApi } from "../api/authApi";
import { jwtDecode } from "jwt-decode";
import { getCurrentUser } from "../api/authApi";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

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
      try {
        const user = await getCurrentUser();

        setUser(user);
      } catch (error) {
        localStorage.removeItem("token");
        setUser(null);
      }
    };

    loadUser();
  }, []);

  return (
    <AuthContext.Provider value={{ user, login }}>
      {children}
    </AuthContext.Provider>
  );
};
