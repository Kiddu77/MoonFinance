import React from 'react';

interface AssetBarProps {
  title: string;
  value: React.ReactNode; // Accepts ReactNode to allow HTML for complex formatting
  valueClass?: string;
}

const AssetBar: React.FC<AssetBarProps> = ({ title, value, valueClass }) => {
  return (
    <div className="w-auto h-fit">
      <p className="text-[#6A706E] text-lg px-2 pr-16">{title}</p>
      <p className={`text-[#3E3E3E] text-3xl pt-2 px-2 font-bold pb-2 ${valueClass || ''}`}>{value}</p>
      <div className="border-t border-[#12C38C] w-fill ml-2"></div>
    </div>
  );
};

export default AssetBar;
