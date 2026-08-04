import React from "react";
import DashboardLayout from "../../layouts/DashboardLayout";

const EmployeeManage = () => {
  return (
    <DashboardLayout name={"Employee Manage"}>
      <div className="flex items-center justify-between mb-10 mt-8">
        <button className="bg-green-500 hover:bg-green-600 text-white px-5 py-3 rounded-xl font-medium transition-colors shadow-sm">
          + Add Employee
        </button>
        <div className="flex items-center gap-3">
          <input
            type="text"
            placeholder="Search employees . . ."
            className="w-72 border border-gray-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
          />

          <select className="border border-gray-300 rounded-xl px-4 py-2.5 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500">
            <option>All</option>
            <option>Active</option>
            <option>Pending</option>
            <option>Terminated</option>
          </select>
        </div>
      </div>
      <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-3">
        <table className="w-full ">
          <thead className="bg-gray-50 border-b border-gray-200">
            <tr>
              <th className="text-left px-6 py-4">Name</th>
              <th className="text-left px-6 py-4">Designation</th>
              <th className="text-left px-6 py-4">Status</th>
              <th className="text-left px-6 py-4">Limit</th>
              <th className="text-left px-6 py-4">Expenditure</th>
              <th className="text-left px-6 py-4">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
              <td className="px-6 py-4">
                <div>
                  <p className="font-semibold text-gray-900">John Doe</p>
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
                <button className="text-xl font-bold text-gray-500 hover:text-black">
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
