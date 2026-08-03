import React from "react";

const ApprovalStatus = ({ summary }) => {
  return (
    <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-8 h-[360px]">
      <h2 className="text-xl font-semibold mb-6">Approval Status</h2>

      <div className="space-y-5 mt-8">
        <div className="flex items-center justify-between py-3 border-b border-gray-100">
          <div className="flex items-center gap-3">
            <div className="w-4 h-4 rounded-full bg-amber-400"></div>

            <span className="text-gray-700">Pending</span>
          </div>

          <span className="font-bold text-2xl text-gray-900">
            {summary.pending}
          </span>
        </div>
        <div className="flex items-center justify-between py-3 border-b border-gray-100">
          <div className="flex items-center gap-3">
            <div className="w-4 h-4 rounded-full bg-emerald-500"></div>

            <span className="text-gray-700">Approved</span>
          </div>

          <span className="font-bold text-2xl text-gray-900">
            {summary.approved}
          </span>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-4 h-4 rounded-full bg-rose-500"></div>

            <span className="text-gray-700">Rejected</span>
          </div>

          <span className="font-bold text-2xl text-gray-900">
            {summary.rejected}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ApprovalStatus;
