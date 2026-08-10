import React from "react";
import DashboardLayout from "../../layouts/DashboardLayout";
import Toolbar from "../../components/ui/Toolbar";

const Transactions = () => {
  return (
    <DashboardLayout>
      <Toolbar buttonElement={"+ Add Expense"} />
    </DashboardLayout>
  );
};

export default Transactions;
