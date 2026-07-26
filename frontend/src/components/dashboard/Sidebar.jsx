import React from "react";
import {
  LayoutDashboard,
  Wallet,
  ArrowLeftRight,
  ChartColumn,
  User,
  Settings,
} from "lucide-react";

const Sidebar = () => {
  const menuItems = [
    { name: "Dashboard", icon: LayoutDashboard },
    { name: "Wallet", icon: Wallet },
    { name: "Transactions", icon: ArrowLeftRight },
    { name: "Analytics", icon: ChartColumn },
    { name: "Profile", icon: User },
    { name: "Settings", icon: Settings },
  ];
  return (
    <aside className="w-64 h-screen flex flex-col bg-blue-800 border-r">
      <div className="p-6">
        <h1 className="text-2xl font-bold">Expense Tracker</h1>
      </div>
      <div className="flex flex-col gap-2 px-4">
        {menuItems.map((item) => {
          const Icon = item.icon;
          return (
            <div
              key={item.name}
              className="flex items-center gap-3 p-3 rounded-lg cursor-pointer hover:bg-gray-100"
            >
              <Icon size={20} />
              <span>{item.name}</span>
            </div>
          );
        })}
      </div>
      <div className="mt-auto p-4 border-t">Logout</div>
    </aside>
  );
};

export default Sidebar;
