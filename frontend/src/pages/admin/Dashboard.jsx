import DashboardLayout from "../../layouts/DashboardLayout";
import SummaryCards from "../../components/dashboard/SummaryCards";
import { useDashboard } from "../../hooks/useDashboard";

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
    </DashboardLayout>
  );
};

export default Dashboard;
