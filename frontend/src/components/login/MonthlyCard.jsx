import { TrendingUp } from "lucide-react";

const MonthlyCard = () => {
  return (
    <div className="absolute top-50 left-30 z-10">
      <div className="w-64 bg-white rounded-3xl shadow-xl p-6 -rotate-7">
        <div className="uppercase text-xs tracking-widest text-gray-400 font-semibold">
          THIS MONTH
        </div>
        <div className="mt-3 text-4xl font-bold text-slate-900">₹4,82,930</div>
        <div className="mt-4 flex items-center gap-2">
          <TrendingUp className="text-green-500 w-4 h-4" />
          <span className="text-sm font-semibold text-green-500">12.4%</span>
          <span className="text-sm font-semibold text-gray-400">
            vs last month
          </span>
        </div>
        <div className="mt-2 flex items-end justify-between h-16">
          <div className="w-4 h-6 rounded-full bg-blue-200"></div>
          <div className="w-4 h-10 rounded-full bg-blue-300"></div>
          <div className="w-4 h-8 rounded-full bg-blue-400"></div>
          <div className="w-4 h-12 rounded-full bg-blue-500"></div>
          <div className="w-4 h-14 rounded-full bg-blue-600"></div>
          <div className="w-4 h-9 rounded-full bg-blue-400"></div>
        </div>
      </div>
    </div>
  );
};

export default MonthlyCard;
