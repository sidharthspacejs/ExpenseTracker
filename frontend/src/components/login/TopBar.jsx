import { Lock } from "lucide-react";

const TopBar = () => {
  return (
    <div className="absolute top-8 left-8 right-8 flex justify-between items-center z-10">
      {/* Left Badge */}
      <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/60 backdrop-blur-md border border-white/60 shadow-sm">
        <Lock size={16} className="text-slate-600" />
        <span className="text-sm font-medium text-slate-700">
          Secure Workspace
        </span>
      </div>

      {/* Right Badge */}
      <div className="flex items-center px-4 py-2 rounded-full bg-white/60 backdrop-blur-md border border-white/60 shadow-sm">
        <span className="text-sm font-semibold text-slate-700">
          Expense Tracker
        </span>
      </div>
    </div>
  );
};

export default TopBar;
