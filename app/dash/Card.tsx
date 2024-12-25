import React from 'react';

const Card = ({ title, value, splitIndex }: { title: string; value: string; splitIndex?: number }) => {
  // Only split the text if splitIndex is provided
  const renderValue = () => {
    if (splitIndex !== undefined) {
      const firstPart = value.slice(0, splitIndex);
      const secondPart = value.slice(splitIndex);
      
      return (
        <p className='text-5xl text-[#3E3E3E] font-bold px-2'>
          <span>{firstPart}</span>
          <span className="text-[#959191] text-2xl">{secondPart}</span>
        </p>
      );
    }
    
    return <p className='text-5xl text-[#3E3E3E] font-bold px-4'>{value}</p>;
  };

  return (
    <div className='h-[145px] w-[280px] bg-white rounded-3xl shadow-md shadow-slate-400'>
      <p className='text-2xl p-4 text-[#6A706E] font-medium'>{title}</p>
      {renderValue()}
    </div>
  );
};

export default Card;