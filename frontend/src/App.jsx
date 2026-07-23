import { useState } from "react";
import Login from "./pages/auth/Login.jsx";
import { Routes, Route } from "react-router-dom";

import AdminDashboard from "./pages/admin/Dashboard.jsx";
import EmployeeDashboard from "./pages/employee/Dashboard.jsx";
import ProtectedRoute from "./components/ProtectedRoute.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Routes>
      <Route path="/" element={<Login />} />

      <Route
        path="/admin/dashboard"
        element={
          <ProtectedRoute allowedRole="ADMIN">
            <AdminDashboard />
          </ProtectedRoute>
        }
      />

      <Route
        path="/employee/dashboard"
        element={
          <ProtectedRoute allowedRole="EMPLOYEE">
            <EmployeeDashboard />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
}

export default App;
