import { MenuIcon } from "lucide-react";
import React from "react";
import { useNavigate } from "react-router-dom";
import { ClassesSection } from "./sections/ClassesSection";
import { NavigationTabBarSection } from "./sections/NavigationTabBarSection";
import { NotesDisplaySection } from "./sections/NotesDisplaySection";
import { SummaryPillsSection } from "./sections/SummaryPillsSection";

export const DashboardYourNotes = (): React.ReactElement => {
  const navigate = useNavigate();

  return (
    <div className="bg-white flex flex-col w-full min-w-[375px] relative">
      <img
        className="w-full h-11"
        alt="Status bar"
        src="https://c.animaapp.com/mhzmyumcU7qDsl/img/status-bar.svg"
      />

      <header className="w-full h-14 bg-transparent flex items-center justify-between px-4 relative">
        <MenuIcon className="w-6 h-6" />

        <div className="[font-family:'Inter',Helvetica] font-normal text-black text-xl text-center tracking-[-0.40px] leading-7 whitespace-nowrap">
          Grind Lab
        </div>

        <img
          className="w-6 h-6 object-cover rounded-full"
          alt="Profile image"
          src="https://c.animaapp.com/mhzmyumcU7qDsl/img/profile-image.png"
        />
      </header>

      <SummaryPillsSection />
      <NotesDisplaySection />
      <ClassesSection />
      <NavigationTabBarSection />
    </div>
  );
};
