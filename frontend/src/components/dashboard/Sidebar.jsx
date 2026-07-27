import React from "react";
import {
  LayoutDashboard,
  Wallet,
  ArrowLeftRight,
  ChartColumn,
  User,
  Settings,
  LogOut,
} from "lucide-react";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  const menuItems = [
    { name: "Dashboard", icon: LayoutDashboard, path: "/admin/dashboard" },
    { name: "Wallet", icon: Wallet, path: "/admin/wallet" },
    { name: "Transactions", icon: ArrowLeftRight, path: "/admin/transactions" },
    { name: "Analytics", icon: ChartColumn, path: "/admin/analytics" },
    { name: "Profile", icon: User, path: "/admin/profile" },
    { name: "Settings", icon: Settings, path: "/admin/settings" },
  ];
  return (
    <aside className="group w-20 hover:w-64 h-screen flex flex-col bg-indigo-700 rounded-r-3xl transition-all duration-300">
      <div className="flex items-center justify-center h-20">
        <div className="mt-5 h-12 w-12 rounded-full bg-orange-400 flex items-center justify-center text-white font-bold text-xl">
          ET
        </div>
      </div>
      <div className="flex flex-col gap-2 mt-10 px-3 ">
        {menuItems.map((item) => {
          const Icon = item.icon;
          return (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                `flex items-center p-3 rounded-xl cursor-pointer transition-all duration-300 ${isActive ? "bg-white/20" : "hover:bg-white/10"}`
              }
            >
              <Icon size={22} className="text-white shrink-0" />

              <span className="ml-4 text-white whitespace-nowrap opacity-0 w-0 overflow-hidden transition-all duration-300 group-hover:opacity-100 group-hover:w-auto">
                {item.name}
              </span>
            </NavLink>
          );
        })}
      </div>
      <div className="mt-auto p-3 ">
        <div className="flex items-center p-3 rounded-xl cursor-pointer hover:bg-white/20">
          <LogOut size={22} className="text-white shrink-0" />

          <span className="ml-4 text-white whitespace-nowrap opacity-0 w-0 overflow-hidden transition-all duration-300 group-hover:opacity-100 group-hover:w-auto">
            Logout
          </span>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
