import DashboardLayout from "../../layouts/DashboardLayout";
import SummaryCards from "../../components/dashboard/SummaryCards";
import { useDashboard } from "../../hooks/useDashboard";
import ExpenseOverview from "../../components/dashboard/ExpenseOverview";
import ApprovalStatus from "../../components/dashboard/ApprovalStatus";

const Dashboard = () => {
  const { dashboard, loading, error } = useDashboard();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Something went wrong.</div>;
  }
  return (
    <DashboardLayout>
      <SummaryCards summary={dashboard.summary} />
      <div className="grid grid-cols-3 gap-6 mt-6">
        <div className="col-span-2">
          <ExpenseOverview expenseTrend={dashboard.expenseTrend} />
        </div>
        <div className="col-span-1">
          <ApprovalStatus />
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;
