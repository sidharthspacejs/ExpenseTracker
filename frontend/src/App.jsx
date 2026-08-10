import { useState } from "react";
import Login from "./pages/auth/Login.jsx";
import { Routes, Route } from "react-router-dom";

import AdminDashboard from "./pages/admin/Dashboard.jsx";
import EmployeeManage from "./pages/admin/EmployeeManage.jsx";
import EmployeeDashboard from "./pages/employee/Dashboard.jsx";
import ProtectedRoute from "./components/ProtectedRoute.jsx";
import Transactions from "./pages/admin/Transactions.jsx";

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
        path="/admin/employee-manage"
        element={
          <ProtectedRoute allowedRole="ADMIN">
            <EmployeeManage />
          </ProtectedRoute>
        }
      />
      <Route
        path="/admin/transactions"
        element={
          <ProtectedRoute allowedRole="ADMIN">
            <Transactions />
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
