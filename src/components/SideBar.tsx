import { useState } from "react";
import { Topic } from "./Dashboard";

export interface SideBarProps {
  topics: Topic[];
  selctedTopics: Topic;
  onSelectTopic: (topic: Topic) => void;
  isMobileMenuOpen: boolean;
  setIsMobileMenuOpen: (isOpen: boolean) => void;
}
const SideBar = ({
  topics,
  selctedTopics,
  onSelectTopic,
  isMobileMenuOpen,
  setIsMobileMenuOpen,
}: SideBarProps) => {
  const [filter, setFilter] = useState("All");
  const filterOptions = ["All", "Slack", "Gmail", "Outlook"];

  //  filter topics base on selected filterss herre ;
  const filteredTopics = topics.filter(
    (topic) => filter == "All" || topic.source === filter
  );

  //  function for handeling filteration
  const handleFilterChange = (newFilter: string) => {
    setFilter(newFilter); 
    const isCurrentTopicVisible =
      newFilter === "All" || selctedTopics.source === newFilter;
    if (isCurrentTopicVisible) {
      const firstVisibleTopic = topics.find(
        (topic) => topic.source === newFilter
      );
      if (firstVisibleTopic) {
        onSelectTopic(firstVisibleTopic);
      }
    }
  };

  return (
    <div
      className={`
  ${isMobileMenuOpen ? "block" : "hidden "} 
  md:block w-full md:w-[300px] bg-white border-r border-gray-200 shrink-0 h-full md:h-screen overflow-y-auto
  `}
    >
      <div className="p-4">
        <div className="mb-4">
          <div className="">
            <label htmlFor="filter">Filter By Source</label>

            {/*  drop down options  */}
            <select
              id="filter"
              value={filter}
              onChange={(e) => handleFilterChange(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            >
              {filterOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
              ;
            </select>
          </div>

          <h2 className="">Topics</h2>
          {filteredTopics.length > 0 ? (
            <ul>
              {filteredTopics.map((topic) => {
                return (
                  <li key={topic.id} className="">
                    <button
                      onClick={() => {
                        onSelectTopic(topic);
                        setIsMobileMenuOpen(false);
                      }}
                      className={`w-full text-left p-3 rounded-md ${
                        selctedTopics.id === topic.id
                          ? "bg-indigo-50 text-indigo-700"
                          : "hover:bg-gray-100"
                      }`}
                    >
                      <div className="flex gap-4">
                        <div className="font-medium">{topic.title}</div>
                        <div className="font-medium">({topic.source})</div>
                      </div>
                    </button>
                  </li>
                );
              })}
            </ul>
          ) : (
            <p className="text-gray-500 text-sm p-3">
              No topic match selected filetr .
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default SideBar;
