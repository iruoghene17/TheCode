import { HomeIcon, MenuIcon, SearchIcon } from "lucide-react";
import React from "react";
import { useNavigate } from "react-router-dom";
import { Avatar, AvatarImage } from "../../Component/ui/avatar";
import { Button } from "../../Component/ui/button";
import { Card, CardContent } from "../../Component/ui/card";
import { Separator } from "../../Component/ui/separator";

const tabs = [
  { label: "Your Notes", active: false },
  { label: "Classes", active: false },
  { label: "Summaries", active: true },
];

const summaryCards = [
  { title: "Atoms", row: 1, col: 1 },
  { title: "Nested Loops", row: 1, col: 2 },
  { title: "Balancing of ...", row: 2, col: 1 },
  { title: "Java", row: 2, col: 2 },
  { title: "Trigonometry", row: 3, col: 1 },
  { title: "Electromagne...", row: 3, col: 2 },
];

const lastSeenTopics = ["Electromagnetism", "Quantum", "Atoms"];

export const DashboardClasses = (): React.ReactElement => {
  const navigate = useNavigate();

  const handleTabClick = (tabLabel: string) => {
    if (tabLabel === "Your Notes") {
      navigate("/dashboard-yournotes");
    }
  };

  return (
    <div
      className="bg-white w-full min-w-[375px] min-h-screen flex flex-col relative"
      data-model-id="7:1040"
    >
      <header className="flex items-center justify-between px-4 pt-11 pb-3 bg-transparent translate-y-[-1rem] animate-fade-in opacity-0">
        <Button variant="ghost" size="icon" className="h-auto p-0">
          <MenuIcon className="w-6 h-6" />
        </Button>

        <h1 className="[font-family:'Inter',Helvetica] font-normal text-black text-xl text-center tracking-[-0.40px] leading-7">
          Grind Lab
        </h1>

        <Avatar className="w-6 h-6">
          <AvatarImage
            src="https://c.animaapp.com/mhwanemqzwanOa/img/profile-image.png"
            alt="Profile"
          />
        </Avatar>
      </header>

      <nav className="flex items-center gap-3 px-4 mb-6 translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]">
        {tabs.map((tab, index) => (
          <Button
            key={index}
            variant="ghost"
            onClick={() => handleTabClick(tab.label)}
            className={`h-auto px-3.5 py-1.5 rounded-[20px] transition-colors cursor-pointer ${
              tab.active
                ? "bg-[#000000e6] text-white hover:bg-[#000000e6]"
                : "bg-[#f6f6f6] text-black hover:bg-[#e6e6e6]"
            }`}
          >
            <span className="[font-family:'Inter',Helvetica] font-medium text-sm tracking-[0] leading-[19.6px]">
              {tab.label}
            </span>
          </Button>
        ))}
      </nav>

      <main className="flex-1 px-3 pb-24">
        <Card className="mb-6 rounded-lg border border-[#00000070] overflow-hidden translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:400ms]">
          <CardContent className="p-4 flex gap-4">
            <div className="flex-shrink-0 relative w-[82px] h-[92px]">
              <img
                className="w-full h-full object-cover"
                alt="Physics"
                src="https://c.animaapp.com/mhwanemqzwanOa/img/image-3.png"
              />
              <img
                className="absolute top-[15px] left-[26px] w-[29px] h-5"
                alt="Icon"
                src="https://c.animaapp.com/mhwanemqzwanOa/img/group-123202.png"
              />
            </div>

            <div className="flex-1 flex flex-col justify-center">
              <h2 className="[font-family:'Inter',Helvetica] font-normal text-black text-2xl tracking-[0] leading-[33.6px] mb-1">
                Physics
              </h2>
              <p className="[font-family:'Inter',Helvetica] font-medium text-[#828282] text-[15px] tracking-[0] leading-[22.5px]">
                7 Topics
              </p>
            </div>

            <Separator orientation="vertical" className="h-[92px]" />

            <div className="flex-shrink-0 w-[140px]">
              <p className="[font-family:'Inter',Helvetica] font-medium text-black text-[11px] tracking-[0] leading-[16.5px] mb-1">
                Last seen topics
              </p>
              <ul className="[font-family:'Inter',Helvetica] font-medium text-black text-[11px] tracking-[0] leading-[16.5px] list-disc list-inside">
                {lastSeenTopics.map((topic, index) => (
                  <li key={index}>{topic}</li>
                ))}
              </ul>
            </div>
          </CardContent>
        </Card>

        <h3 className="[font-family:'Inter',Helvetica] font-normal text-black text-sm tracking-[0] leading-[19.6px] mb-4 translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:600ms]">
          Summaries
        </h3>

        <div className="space-y-4">
          {[1, 2, 3].map((rowIndex) => (
            <div key={rowIndex}>
              <div
                className="grid grid-cols-2 gap-4 mb-4 translate-y-[-1rem] animate-fade-in opacity-0"
                style={
                  {
                    "--animation-delay": `${600 + rowIndex * 200}ms`,
                  } as React.CSSProperties
                }
              >
                {summaryCards
                  .filter((card) => card.row === rowIndex)
                  .map((card, index) => (
                    <Card
                      key={index}
                      className="relative border border-black rounded-none overflow-hidden transition-transform hover:scale-105"
                    >
                      <CardContent className="p-3 h-[133px] flex flex-col">
                        <h4 className="[font-family:'Inter',Helvetica] font-normal text-black text-sm tracking-[0] leading-[19.6px] mb-2">
                          {card.title}
                        </h4>
                        <div className="flex-1 flex items-center justify-center">
                          <img
                            className="w-[90px] h-[90px]"
                            alt="File"
                            src="https://c.animaapp.com/mhwanemqzwanOa/img/file.svg"
                          />
                        </div>
                        <div className="absolute bottom-4 left-1/2 -translate-x-1/2">
                          <img
                            className="w-[29px] h-[18px]"
                            alt="Icon"
                            src="https://c.animaapp.com/mhwanemqzwanOa/img/icon.svg"
                          />
                        </div>
                      </CardContent>
                    </Card>
                  ))}
              </div>
              {rowIndex < 3 && <Separator className="mb-4" />}
            </div>
          ))}
        </div>
      </main>

      <img
        className="fixed top-0 left-0 w-full h-11 z-50"
        alt="Status bar"
        src="https://c.animaapp.com/mhwanemqzwanOa/img/status-bar.svg"
      />

      <nav className="fixed bottom-0 left-0 right-0 bg-white shadow-[0px_-0.5px_0px_#0000001a] backdrop-blur-[10px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(10px)_brightness(100%)]">
        <div className="flex items-center justify-around h-[49px] max-w-[375px] mx-auto">
          <Button
            variant="ghost"
            className="h-auto flex flex-col items-center gap-0 p-0 transition-opacity"
          >
            <HomeIcon className="w-6 h-6 mb-[-2px]" />
            <span className="[font-family:'Inter',Helvetica] font-medium text-black text-sm tracking-[0] leading-[19.6px]">
              HomeIcon
            </span>
          </Button>

          <Button
            variant="ghost"
            className="h-auto flex flex-col items-center gap-0 p-0 transition-opacity"
          >
            <img
              className="w-[29px] h-[29px] mb-[-7px] object-cover"
              alt="New"
              src="https://c.animaapp.com/mhwanemqzwanOa/img/image-1.png"
            />
            <span className="[font-family:'Inter',Helvetica] font-medium text-black text-sm tracking-[0] leading-[19.6px]">
              New
            </span>
          </Button>

          <Button
            variant="ghost"
            className="h-auto flex flex-col items-center gap-0 p-0 opacity-50 transition-opacity hover:opacity-100"
          >
            <SearchIcon className="w-6 h-6 mb-[-2px]" />
            <span className="[font-family:'Inter',Helvetica] font-medium text-black text-sm tracking-[0] leading-[19.6px]">
              SearchIcon
            </span>
          </Button>
        </div>

        <div className="h-[5px] w-[134px] mx-auto bg-black rounded-[100px] mt-[17px] mb-[13px]" />
      </nav>
    </div>
  );
};
