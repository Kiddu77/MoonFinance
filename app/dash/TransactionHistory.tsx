import React from 'react';

type Transaction = {
  id: string;
  basket: string;
  price: number;
  cagr: number;
};

type TransactionHistoryProps = {
  transactions: Transaction[];
  onViewBasket: (id: string) => void;
  onLoadMore: () => void;
};

const TransactionHistory = ({ transactions, onViewBasket, onLoadMore }: TransactionHistoryProps) => {
  return (
    <div className="bg-white rounded-lg p-3 md:p-6 shadow-md shadow-slate-400">
      <h2 className="text-xl text-gray-700 font-medium mb-6 text-center md:text-left">Transaction History</h2>
      
      {/* Table Header */}
      <div className="grid grid-cols-4 gap-4 border-b border-gray-100 pb-4 mb-2 md:text-base text-sm">
        <div className="text-gray-500">Transaction</div>
        <div className="text-gray-500">Price</div>
        <div className="text-gray-500">CAGR</div>
        <div className="text-gray-500"></div>
      </div>
      
      {/* Transaction Rows */}
      <div className="space-y-4">
        {transactions.map((transaction) => (
          <div 
            key={transaction.id}
            className="grid grid-cols-4 gap-4 items-center py-2 border-b border-dashed border-gray-100 last:border-none text-sm md:text-base"
          >
            <div className="text-gray-600">{transaction.basket}</div>
            <div className="text-gray-600">₹ {transaction.price.toLocaleString()}</div>
            <div className="text-gray-600">{transaction.cagr}%</div>
            <div className=''>
              <button
                onClick={() => onViewBasket(transaction.id)}
                className="bg-emerald-500 text-white px-4 py-1.5 rounded-md text-xs md:text-sm hover:bg-emerald-600 transition-colors  md:mx-[10%]"
              >
                View Basket
              </button>
            </div>
          </div>
        ))}
      </div>
      
      {/* Load More Button */}
      <button
        onClick={onLoadMore}
        className="w-full mt-6 py-3 text-gray-500 hover:text-gray-700 text-sm transition-colors"
      >
        Load More
      </button>
    </div>
  );
};

export default TransactionHistory;