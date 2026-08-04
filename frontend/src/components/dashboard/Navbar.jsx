import React from "react";
import { useAuth } from "../../hooks/useAuth";
import { Bell } from "lucide-react";

const Navbar = ({ name }) => {
  const { user } = useAuth();
  return (
    <header className="h-20 bg-white  flex items-center justify-between px-8">
      <div>
        <h1 className="text-2xl font-bold text-gray-800">{name}</h1>
        <p className="text-gray-500">Welcome back!</p>
      </div>

      <div className="flex items-center gap-10 ">
        <button>
          <Bell size={22} />
        </button>

        <div className="flex items-center gap-3">
          <div>
            <p className="font-semibold">{user?.name}</p>
            <p className="text-xs text-gray-500">{user?.designation}</p>
          </div>
          <div className="w-10 h-10 rounded-full text-white bg-indigo-600 flex items-center justify-center">
            {user?.name.charAt(0).toUpperCase()}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
