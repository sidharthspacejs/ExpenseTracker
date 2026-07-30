import React from "react";

const StatCard = ({ title, value, trend, icon: Icon }) => {
  return (
    <div className=" bg-white shadow-sm p-6 flex flex-col justify-between  rounded-2xl hover:shadow-md transition-all min-h-40">
      <div className="flex justify-between items-center">
        <h2 className="text-sm text-gray-500 font-medium">{title}</h2>
        <div className="p-3 rounded-xl bg-indigo-100">
          <Icon className="text-indigo-600" size={22} />
        </div>
      </div>
      <p className="text-3xl font-bold text-gray-900">{value}</p>
      {trend && <p className="text-green-600 text-sm font-medium">{trend}</p>}
    </div>
  );
};

export default StatCard;
