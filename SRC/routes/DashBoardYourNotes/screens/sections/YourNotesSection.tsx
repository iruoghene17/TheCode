import React from "react";
import { Card, CardContent } from "../../components/ui/card";

export const YourNotesSection = (): React.ReactElement => {
  return (
    <Card className="w-56 bg-white rounded-lg border border-solid border-[#dfdfdf]">
      <CardContent className="flex flex-col items-start gap-2 p-4">
        <div className="w-fit [font-family:'Inter',Helvetica] font-normal text-black text-sm tracking-[0] leading-[19.6px] whitespace-nowrap">
          MAU (Usuarios Activos Mensuales)
        </div>

        <div className="w-fit [font-family:'Inter',Helvetica] font-normal text-black text-[28px] tracking-[-0.56px] leading-[33.6px] whitespace-nowrap">
          10 353
        </div>

        <div className="w-fit [font-family:'Inter',Helvetica] font-medium text-[#828282] text-xs tracking-[0] leading-[18px] whitespace-nowrap">
          -8 % mes a mes
        </div>
      </CardContent>
    </Card>
  );
};
