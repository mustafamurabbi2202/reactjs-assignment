import { X } from "lucide-react";
import { useState } from "react";

export interface TaskModelProps {
  isOpen: boolean;
  onClose: () => void;
}
const TaskModel = ({ isOpen, onClose }: TaskModelProps) => {
  const [taskName, setTaskName] = useState("");
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-md mx-4">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold"> Create New task </h2>
          <div className="">
            <button
              onClick={onClose}
              className="tex-gray-500 hover:text-gray-700"
            >
              <X />
            </button>
          </div>
        </div>
        <div className="mb-4">
          <label htmlFor="lastName">Task Name </label>
          <input
            type="text"
            id="taskName"
            value={taskName}
            onChange={(e) => setTaskName(e.target.value)}
            placeholder="Enter the task name"
          />
        </div>
        {/*  create new task model  */}
        <button
          onClickCapture={() =>onClose()}
          className="px-4 py-2 mt-4 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
        >
          Create Task
        </button>
      </div>
    </div>
  );
};

export default TaskModel;
