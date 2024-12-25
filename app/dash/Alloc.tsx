import React from "react";

type SubItem = {
  description: string;
  percentage: number;
};

type AssetSectionProps = {
  title: string;
  percentage: number;
  accentColor: string;
  subItems: SubItem[];
};

const AssetSection = ({
  title,
  percentage,
  accentColor,
  subItems,
}: AssetSectionProps) => {
  return (
    <div className="space-y-4 w-full">
      {/* Main header bar */}
      <div className="relative w-full h-10 bg-black rounded-lg flex items-center justify-between px-4">
        <div className="flex items-center gap-2">
          {/* Accent color bar */}
          <div
            className="absolute left-0 top-0 bottom-0 w-1 rounded-l-lg"
            style={{ backgroundColor: accentColor }}
          />
          <span className="text-white">{title}</span>
        </div>
        <span className="text-white">{percentage}%</span>
      </div>

      {/* Sub items */}
      <div className="space-y-6 px-4">
        {subItems.map((item, index) => (
          <div key={index} className="relative">
            <div className="flex justify-between text-gray-500 mb-1">
              <span>{item.description}</span>
              <span>{item.percentage}%</span>
            </div>
            {/* Underline with accent color */}
            <div className="absolute bottom-0 w-full h-px bg-gray-200">
              <div
                className="absolute bottom-0 left-0 h-px"
                style={{
                  backgroundColor: accentColor,
                  width: `${item.percentage}%`,
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AssetSection;
