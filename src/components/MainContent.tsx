import { useState } from "react";
import { Topic } from "./Dashboard";
import TaskModel from "./TaskModel";

export interface MainContentProps {
  selectedTopic: Topic;
}

export const tabContents = {
  1: "This is the content for Reply 1 . It contains the details of the reply.",
  2: "This is the content for Reply 2 . It contains the details of the reply.",
  3: "This is the content for Reply 3 . It contains the details of the reply.",
};
const MainContent = ({ selectedTopic }: MainContentProps) => {
  const [activeTab, setActiveTab] = useState<number>(1);
  const [iseTaskModelOpen, setIsTaskModelOpen] = useState(false);
  const [isForwardDropDownOpen, SetIsForwardDropDownOpen] = useState(false);

  return (
    <div className="flex-1 p-6 overflow-y-auto  bg-primaryBg">
      <h2 className="text-2xl font-bold mb-6">{selectedTopic.title}</h2>

      {/*  tabs layout for switching between tabssss  */}
      <div className="mb-6 border-b border-gray-200">
        <div className="flex space-x-4">
          {[1, 2, 3].map((tab) => {
            return (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`py-2 px-4 text-sm font-medium ${
                  activeTab === tab
                    ? "border-b-2 border-indigo-500 text-indigo-600"
                    : "text-gray-600 hover:text-gray-700 hover:border-gray-300"
                }`}
              >
                Reply : {tab}
              </button>
            );
          })}
        </div>

        {/*  tab data  */}
        <div className="mb-4 p-4 bg-white rounded-lg shadow-sm min-h-[200px]">
          <p className="text-gray-700">
            {tabContents[activeTab as keyof typeof tabContents]}
          </p>
        </div>

        {/*  action buttons  */}
        <div className="flex flex-wrap gap-4">
          <button
            disabled
            className="px-4 py-2 bg-gray-200 text-gray-500 rounded-md cursor-not-allowed"
          >
            Reply
          </button>

          <div className="relative">
            <button
              className="px-2 py-2 bg-indigo-500 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              onClick={() => SetIsForwardDropDownOpen(!isForwardDropDownOpen)}
            >
              Forward
            </button>
            {isForwardDropDownOpen && (
              <div className="absolute z-10 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                <div className="py-1" role="menu" aeiria-orientation="vertical">
                  <button
                    role="menuitem"
                    className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    onClick={() => SetIsForwardDropDownOpen(false)}
                  >
                    #sales
                  </button>
                  <button
                    role="menuitem"
                    className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    onClick={() => SetIsForwardDropDownOpen(false)}
                  >
                    #support
                  </button>
                </div>
              </div>
            )}
          </div>

          {/*  create new task model  */}
          <button
            onClickCapture={() => setIsTaskModelOpen(true)}
            className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
          >
            Create Task
          </button>
        </div>
      </div>

      {/* task model  */}
      <TaskModel
        isOpen={iseTaskModelOpen}
        onClose={() => setIsTaskModelOpen(false)}
      />
    </div>
  );
};

export default MainContent;
