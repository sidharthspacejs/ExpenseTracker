import { useState } from "react";
import Modal from "../ui/Modal";
import { createEmployee } from "../../api/adminApi";

const AddEmployeeForm = ({ onClose, onEmployeeCreated }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    designation: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await createEmployee(formData);

      await onEmployeeCreated();

      onClose();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Modal
      title="Add Employee"
      description="An invitation email would be send to the employee upon proceed"
      onClose={onClose}
    >
      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Name */}
        <div>
          <label
            htmlFor="name"
            className="mb-2 block text-sm font-medium text-gray-700"
          >
            Full Name
          </label>

          <input
            id="name"
            name="name"
            type="text"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter employee name"
            className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
            required
          />
        </div>

        {/* Email */}
        <div>
          <label
            htmlFor="email"
            className="mb-2 block text-sm font-medium text-gray-700"
          >
            Email
          </label>

          <input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="employee@example.com"
            className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
            required
          />
        </div>

        {/* Designation */}
        <div>
          <label
            htmlFor="designation"
            className="mb-2 block text-sm font-medium text-gray-700"
          >
            Designation
          </label>

          <input
            id="designation"
            name="designation"
            type="text"
            value={formData.designation}
            onChange={handleChange}
            placeholder="e.g. Software Engineer"
            className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
            required
          />
        </div>

        {/* Buttons */}
        <div className="flex justify-end gap-3 border-t border-gray-200 pt-5">
          <button
            type="button"
            onClick={onClose}
            className="rounded-xl border border-gray-300 px-5 py-3 font-medium text-gray-700 hover:bg-gray-50"
          >
            Cancel
          </button>

          <button
            type="submit"
            className="rounded-xl bg-green-500 px-5 py-3 font-medium text-white shadow-sm hover:bg-green-600"
          >
            Add Employee
          </button>
        </div>
      </form>
    </Modal>
  );
};

export default AddEmployeeForm;
