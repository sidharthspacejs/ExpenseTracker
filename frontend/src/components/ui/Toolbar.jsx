import CustomCreationButton from "./CustomCreationButton";
import CustomDropDown from "./CustomDropDown";
import { Filter } from "lucide-react";

const Toolbar = ({
  statusOptions,
  selectedStatus,
  onStatusChange,
  children,
}) => {
  return (
    <div className="flex items-center justify-between mb-10">
      {children}
      <div className="flex items-center gap-3 ml-auto">
        <input
          type="text"
          placeholder="Search employees . . ."
          className="w-72 h-12 border border-gray-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 shadow-sm"
        />
        <CustomDropDown
          icon={<Filter size={18} />}
          options={statusOptions}
          value={selectedStatus}
          onChange={onStatusChange}
        />
      </div>
    </div>
  );
};

export default Toolbar;
