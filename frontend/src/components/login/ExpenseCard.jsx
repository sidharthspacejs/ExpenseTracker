import { Receipt } from "lucide-react";

const ExpenseCard = () => {
  return (
    <div className="absolute top-[360px] left-[400px] z-20">
      <div className="w-80 rounded-3xl bg-white shadow-xl p-6">
        {/* Header */}
        <div className="flex justify-between items-center">
          {/* Left Section */}
          <div className="flex items-center gap-3">
            <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-blue-100">
              <Receipt className="w-5 h-5 text-blue-600" />
            </div>
            <div>
              <h3 className="text-base font-semibold text-slate-900">
                Client Dinner
              </h3>

              <p className=" text-sm text-gray-500">Bengaluru • 18 Feb</p>
            </div>
          </div>

          <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-green-100">
            <div className="w-2 h-2 rounded-full bg-green-500"></div>
          </div>
        </div>

        {/* Location & Date */}
        <div></div>

        {/* Details */}
        <div></div>

        {/* Divider */}
        <div></div>
      </div>
    </div>
  );
};

export default ExpenseCard;
