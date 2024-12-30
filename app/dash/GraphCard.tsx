import React from 'react';

const GraphCard = ({ 
  title, 
  value, 
  lineColor 
}: { 
  title: string;
  value: string;
  lineColor: string;
}) => {
  // Create points for the curved line
  const points = [
    [0, 35],
    [20, 30],
    [40, 32],
    [60, 28],
    [80, 33],
    [100, 25],
    [120, 30],
    [140, 28],
    [160, 25],
    [180, 23]
  ];

  // Create the SVG path
  const createPath = () => {
    let path = `M ${points[0][0]} ${points[0][1]}`;
    
    for (let i = 1; i < points.length; i++) {
      // Using cubic bezier curves for smooth lines
      const x1 = points[i-1][0] + (points[i][0] - points[i-1][0]) / 3;
      const x2 = points[i][0] - (points[i][0] - points[i-1][0]) / 3;
      const y1 = points[i-1][1];
      const y2 = points[i][1];
      
      path += ` C ${x1} ${y1}, ${x2} ${y2}, ${points[i][0]} ${points[i][1]}`;
    }
    
    return path;
  };

  return (
    <div className="mb-5 md:mb-0 bg-white rounded-2xl p-4 w-[300px] md:w-[280px] h-[145px] shadow-md shadow-slate-400">
      <div className="">
        <p className="text-xl md:px-4 text-[#6A706E] font-medium">{title}</p>
        <p className="text-2xl text-[#3E3E3E] font-bold md:px-4">₹ {value}</p>
      </div>
      
      <div className="h-10 mt-2">
        <svg width="180" height="40" className="w-full">
          <path
            d={createPath()}
            fill="none"
            stroke={lineColor}
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </div>
  );
};

export default GraphCard;