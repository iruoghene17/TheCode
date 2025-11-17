import React from "react";
import { Card, CardContent } from "../../components/ui/card";

const classesData = [
  {
    name: "Math",
    topics: 8,
    icon: "https://c.animaapp.com/mhzmyumcU7qDsl/img/image-2.png",
    iconOverlay: "https://c.animaapp.com/mhzmyumcU7qDsl/img/group-123204.png",
    lastSeenTopics: ["Diferential Calculas", "Trigonometry", "2 by 2equations"],
  },
  {
    name: "Chemistry",
    topics: 14,
    icon: "https://c.animaapp.com/mhzmyumcU7qDsl/img/image-2.png",
    iconOverlay: null,
    lastSeenTopics: [
      "Organic Chemistry",
      "Balancing of Equations",
      "Atomic Structure",
    ],
  },
  {
    name: "Computer Science",
    topics: 11,
    icon: "https://c.animaapp.com/mhzmyumcU7qDsl/img/image-2.png",
    iconOverlay: "https://c.animaapp.com/mhzmyumcU7qDsl/img/group-123202-1.png",
    lastSeenTopics: ["Java functions", "Nested Loops", "Encapsulation"],
  },
  {
    name: "Physics",
    topics: 7,
    icon: "https://c.animaapp.com/mhzmyumcU7qDsl/img/image-2.png",
    iconOverlay: null,
    lastSeenTopics: ["Electromagnetism", "Quantum", "Atoms"],
  },
];

export const ClassesSection = (): React.ReactElement => {
  return (
    <section className="w-full flex flex-col gap-4 py-5 px-4">
      <h2 className="[font-family:'Inter',Helvetica] font-normal text-black text-sm tracking-[0] leading-[19.6px]">
        Classes
      </h2>

      <div className="flex flex-col gap-4">
        {classesData.map((classItem, index) => (
          <Card
            key={index}
            className="w-full bg-white rounded-lg border border-solid border-[#00000070] overflow-hidden cursor-pointer hover:shadow-md transition-shadow"
          >
            <CardContent className="p-0 relative h-[110px] flex items-center">
              <div className="relative w-[87px] h-full flex-shrink-0 flex items-center justify-center">
                <img
                  className="w-full h-[92px] object-cover"
                  alt={`${classItem.name} icon`}
                  src={classItem.icon}
                />
                {classItem.iconOverlay && (
                  <img
                    className="absolute w-[29px] h-5"
                    alt="Icon overlay"
                    src={classItem.iconOverlay}
                  />
                )}
              </div>

              <div className="flex-shrink-0 w-px h-[94px] bg-gray-300 mx-4" />

              <div className="flex-1 flex items-center gap-6 pr-4">
                <div className="flex flex-col gap-1 min-w-[100px]">
                  <h3 className="[font-family:'Inter',Helvetica] font-normal text-black text-2xl tracking-[0] leading-[33.6px]">
                    {classItem.name}
                  </h3>
                  <p className="[font-family:'Inter',Helvetica] font-medium text-[#828282] text-[15px] tracking-[0] leading-[22.5px] whitespace-nowrap">
                    {classItem.topics} Topics
                  </p>
                </div>

                <div className="flex-1">
                  <p className="[font-family:'Inter',Helvetica] font-medium text-black text-[11px] tracking-[0] leading-[16.5px] mb-1">
                    Last seen topics
                  </p>
                  <ul className="[font-family:'Inter',Helvetica] font-medium text-black text-[11px] tracking-[0] leading-[16.5px] list-none">
                    {classItem.lastSeenTopics.map((topic, topicIndex) => (
                      <li key={topicIndex}>{topic}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
