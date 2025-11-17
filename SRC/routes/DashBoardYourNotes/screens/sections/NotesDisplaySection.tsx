import React from "react";
import { Card, CardContent } from "../../components/ui/card";

const notesData = [
  {
    title: "Differential Calculas",
    subject: "Math",
    image:
      "https://c.animaapp.com/mhzmyumcU7qDsl/img/screenshot-2025-10-12-at-2-44-30-pm-1.png",
    imageWidth: "w-[182px]",
    imageHeight: "h-[100px]",
  },
  {
    title: "Organic Chemestri",
    subject: "Chemistry",
    image:
      "https://c.animaapp.com/mhzmyumcU7qDsl/img/screenshot-2025-10-12-at-2-48-12-pm-1.png",
    imageWidth: "w-[117px]",
    imageHeight: "h-[98px]",
  },
];

export const NotesDisplaySection = (): React.ReactElement => {
  return (
    <section className="w-full flex flex-col gap-[5px]">
      <h2 className="ml-[5px] [font-family:'Inter',Helvetica] font-normal text-black text-sm tracking-[0] leading-[19.6px] whitespace-nowrap">
        Your Notes
      </h2>

      <div className="flex gap-3">
        {notesData.map((note, index) => (
          <Card
            key={index}
            className="flex-shrink-0 bg-white rounded-lg border border-solid border-[#dfdfdf] overflow-hidden"
          >
            <CardContent className="flex flex-col items-start gap-2 p-4">
              <div className="[font-family:'Inter',Helvetica] font-normal text-black text-sm tracking-[0] leading-[19.6px] whitespace-nowrap">
                {note.title}
              </div>

              <div className="[font-family:'Inter',Helvetica] font-medium text-[#828282] text-xs tracking-[0] leading-[18px] whitespace-nowrap">
                {note.subject}
              </div>

              <img
                className={`${note.imageWidth} ${note.imageHeight} border border-solid border-[#00000059] object-cover`}
                alt={`${note.title} screenshot`}
                src={note.image}
              />
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
