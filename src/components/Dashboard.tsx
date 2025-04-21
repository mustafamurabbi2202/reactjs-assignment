import { useState } from "react";
import SideBar from "./SideBar";
import MainContent from "./MainContent";
import { MenuIcon } from "lucide-react";

export interface Topic {
  id: number;
  title: string;
  source: string;
}

export const initial_topics: Topic[] = [
  { id: 1, title: "Slack Thread 1", source: "Slack" },
  { id: 2, title: "Gmail Message 2", source: "Gmail" },
  { id: 3, title: "Outlook Email 3", source: "Outlook" },
  { id: 4, title: "Secondary Outlook", source: "Outlook" },
  { id: 5, title: "Secondary Gmail", source: "Gmail" },
  { id: 6, title: "Secondary Slack", source: "Slack" },
];
const Dashboard = () => {
  const [selectedTopic, setSelectedTopic] = useState<Topic>(initial_topics[0]);
  const [Topic] = useState<Topic[]>(initial_topics);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <div className="flex flex-col md:flex-row min-h-screen">
        {/*  mobile toggle for small screnns  */}
        <div className="md:hidden p-4 bg-white border-b">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="flex items-center tect-gray-700"
          >
            <MenuIcon />
            {selectedTopic.title}
          </button>
        </div>

        {/* right sidebar  */}
        <SideBar
          topics={Topic}
          selctedTopics={selectedTopic}
          isMobileMenuOpen={isMobileMenuOpen}
          setIsMobileMenuOpen={setIsMobileMenuOpen}
          onSelectTopic={setSelectedTopic}
        />

        {/* left content window  */}
        <MainContent selectedTopic={selectedTopic} />
      </div>
    </>
  );
};

export default Dashboard;
