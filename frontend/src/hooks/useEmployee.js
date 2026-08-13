import React from "react";
import { useState } from "react";
import { getAllEmployees } from "../api/adminApi";
import { useEffect } from "react";

const useEmployee = () => {
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchEmployees = async () => {
    try {
      const data = await getAllEmployees();

      setEmployees(data.employees);
    } catch (error) {
      console.error(error);
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchEmployees();
  }, []);
  return {
    employees,
    loading,
    error,
  };
};

export default useEmployee;
