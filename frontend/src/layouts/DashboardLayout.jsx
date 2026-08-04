import Sidebar from "../components/dashboard/Sidebar";
import Navbar from "../components/dashboard/Navbar";

const DashboardLayout = ({ name, children }) => {
  return (
    <div className="flex">
      <Sidebar />
      <main className="flex-1 bg-gray-100 min-h-screen">
        <Navbar name={name} />

        <div className="p-6">{children}</div>
      </main>
    </div>
  );
};

export default DashboardLayout;
