import { useState, createContext, useEffect } from "react";
import { login as loginApi } from "../api/authApi";
import { jwtDecode } from "jwt-decode";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = async (username, password) => {
    try {
      const response = await loginApi(username, password);

      const decoded = jwtDecode(response.token);

      setUser(decoded);

      localStorage.setItem("token", response.token);

      return decoded;
    } catch (error) {
      throw error;
    }
  };

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) return;

    const decoded = jwtDecode(token);

    console.log(decoded);
  }, []);

  return (
    <AuthContext.Provider value={{ user, login }}>
      {children}
    </AuthContext.Provider>
  );
};
