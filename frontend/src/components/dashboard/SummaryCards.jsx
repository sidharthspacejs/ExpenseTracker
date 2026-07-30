import { Clock3, Receipt, Users, Wallet } from "lucide-react";
import React from "react";
import { formatCurrency } from "../../utils/formatCurrency";
import StatCard from "./StatCard";

const SummaryCards = ({ summary }) => {
  const cards = [
    {
      title: "Employees",
      value: summary.employeeCount,
      icon: Users,
    },
    {
      title: "Total Spending",
      value: formatCurrency(summary.totalExpense),
      icon: Wallet,
    },
    {
      title: "Expense Entries",
      value: summary.numberOfExpenses,
      icon: Receipt,
    },
    {
      title: "Pending Approvals",
      value: summary.pending,
      icon: Clock3,
    },
  ];
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
      {cards.map((card) => (
        <StatCard
          key={card.title}
          title={card.title}
          value={card.value}
          icon={card.icon}
        />
      ))}
    </div>
  );
};

export default SummaryCards;
