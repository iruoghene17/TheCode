import { HomeIcon, PlusIcon, SearchIcon } from "lucide-react";
import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../../components/ui/button";

const navigationItems = [
  {
    icon: HomeIcon,
    label: "Home",
    isActive: true,
    opacity: "opacity-100",
  },
  {
    icon: PlusIcon,
    label: "New",
    isActive: true,
    opacity: "opacity-100",
  },
  {
    icon: SearchIcon,
    label: "Search",
    isActive: false,
    opacity: "opacity-50",
  },
];

export const NavigationTabBarSection = (): React.ReactElement => {
  const navigate = useNavigate();

  const handleNavClick = (label: string) => {
    if (label === "Home") {
      navigate("/");
    }
  };

  return (
    <nav className="w-full bg-white shadow-[0px_-0.5px_0px_#0000001a] backdrop-blur-[10px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(10px)_brightness(100%)]">
      <div className="w-full h-[49px] flex items-start justify-center">
        {navigationItems.map((item, index) => {
          const Icon = item.icon;
          return (
            <Button
              key={index}
              variant="ghost"
              onClick={() => handleNavClick(item.label)}
              className={`h-auto w-[76px] flex flex-col items-center justify-start gap-0 px-0 py-0 hover:bg-transparent cursor-pointer ${item.opacity}`}
            >
              <Icon className="w-6 h-6 mt-1" />
              <span className="[font-family:'Inter',Helvetica] font-medium text-black text-sm tracking-[0] leading-[19.6px] mt-[1px]">
                {item.label}
              </span>
            </Button>
          );
        })}
      </div>
      <div className="w-[134px] h-[5px] mx-auto bg-black rounded-[100px]" />
    </nav>
  );
};
