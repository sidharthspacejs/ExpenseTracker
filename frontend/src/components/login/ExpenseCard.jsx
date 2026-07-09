import { Receipt } from "lucide-react";

const ExpenseCard = () => {
  return (
    <div className="absolute top-[300px] left-[350px] z-20">
      <div className="w-85 rounded-3xl bg-white shadow-xl p-6 rotate-6">
        {/* Header */}
        <div className="flex justify-between items-center">
          {/* Left Section */}
          <div className="flex items-center gap-2">
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
            <span className="text-xs font-medium text-green-700">Approved</span>
          </div>
        </div>

        <div className="my-4 border-t border-gray-100"></div>

        {/* Details */}
        <div className="mt-6 space-y-1">
          {/* Total */}
          <div className="flex justify-between items-center">
            <span className="text-sm font-semibold text-gray-500">Total</span>
            <span className="text-xl font-bold text-slate-900">₹3,240.00</span>
          </div>

          {/* Category */}
          <div className="flex justify-between items-center">
            <span className="text-sm text-gray-500 font-semibold">
              Category
            </span>
            <span className="text-sm font-semibold text-slate-900">Meals</span>
          </div>
        </div>
        <div className="mt-5 flex gap-2">
          <div className="h-1.5 w-12 rounded-full bg-blue-600"></div>
          <div className="h-1.5 w-12 rounded-full bg-blue-600"></div>
          <div className="h-1.5 w-12 rounded-full bg-blue-600"></div>
          <div className="h-1.5 w-12 rounded-full bg-blue-600"></div>
          <div className="h-1.5 w-8 rounded-full bg-gray-200"></div>
          <div className="h-1.5 w-8 rounded-full bg-gray-200"></div>
        </div>
      </div>
    </div>
  );
};

export default ExpenseCard;
