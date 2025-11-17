import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../../components/ui/button";

const pillsData = [
  { id: "your-notes", label: "Your Notes" },
  { id: "classes", label: "Classes" },
  { id: "summaries", label: "Summaries" },
];

export const SummaryPillsSection = (): React.ReactElement => {
  const [activeTab, setActiveTab] = useState("your-notes");
  const navigate = useNavigate();

  const handleTabClick = (tabId: string) => {
    setActiveTab(tabId);
    if (tabId === "classes" || tabId === "summaries") {
      navigate("/");
    }
  };

  return (
    <nav className="inline-flex items-start gap-3">
      {pillsData.map((pill) => (
        <Button
          key={pill.id}
          onClick={() => handleTabClick(pill.id)}
          className={`h-auto inline-flex items-center justify-center gap-2.5 px-3.5 py-1.5 rounded-[20px] cursor-pointer ${
            activeTab === pill.id
              ? "bg-[#000000e6] hover:bg-[#000000e6]"
              : "bg-[#f6f6f6] hover:bg-[#e6e6e6]"
          }`}
        >
          <span
            className={`[font-family:'Inter',Helvetica] font-medium text-sm tracking-[0] leading-[19.6px] whitespace-nowrap ${
              activeTab === pill.id ? "text-white" : "text-black"
            }`}
          >
            {pill.label}
          </span>
        </Button>
      ))}
    </nav>
  );
};
