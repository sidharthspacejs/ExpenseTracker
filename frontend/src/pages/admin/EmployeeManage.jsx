import React, { useState } from "react";
import DashboardLayout from "../../layouts/DashboardLayout";
import Toolbar from "../../components/ui/Toolbar";

const EmployeeManage = () => {
  const statusOptions = ["ALL", "ACTIVE", "PENDING", "TERMINATED"];
  const [selectedStatus, setSelectedStatus] = useState("ALL");
  return (
    <DashboardLayout name={"Employee Manage"}>
      <Toolbar
        statusOptions={statusOptions}
        selectedStatus={selectedStatus}
        onStatusChange={setSelectedStatus}
      />
      <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-3">
        <table className="w-full ">
          <thead className="bg-gray-50 border-b border-gray-200">
            <tr>
              <th className="text-left px-6 py-4 text-gray-700 font-semibold">
                Name
              </th>
              <th className="text-left px-6 py-4 text-gray-700 font-semibold">
                Designation
              </th>
              <th className="text-left px-6 py-4 text-gray-700 font-semibold">
                Status
              </th>
              <th className="text-left px-6 py-4 text-gray-700 font-semibold">
                Limit
              </th>
              <th className="text-left px-6 py-4 text-gray-700 font-semibold">
                Expenditure
              </th>
              <th className="text-left px-6 py-4 text-gray-700 font-semibold">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
              <td className="px-6 py-4">
                <div>
                  <p className="font-semibold text-gray-900 ">John Doe</p>
                  <p className="text-sm text-gray-500">john@gmail.com</p>
                </div>
              </td>

              <td className="px-6 py-4 text-gray-700">Software Engineer</td>

              <td className="px-6 py-4">
                <span className="inline-flex items-center rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-700">
                  Active
                </span>
              </td>

              <td className="px-6 py-4 font-medium">₹50,000</td>

              <td className="px-6 py-4 font-medium">₹18,250</td>

              <td className="px-6 py-4 text-center">
                <button className="text-xl font-bold text-gray-500 hover:text-black flex justify-center items-center">
                  ⋮
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </DashboardLayout>
  );
};

export default EmployeeManage;
