import React from 'react';

const Faq: React.FC = () => {
  return (
    <div className="flex justify-center items-center flex-col px-[12%] text-center text-lg bg-white text-[#1b1b1b]">
      <div className="flex justify-center">
        <div>
          <h2 className="font-medium text-4xl mt-6 mb-0 md:text-3xl">-FAQs</h2>
          <h1 className="text-[45px] h-[26px] mt-0 md:text-3xl">Questions ?? Look Here .</h1>
        </div>
      </div>
      <ul className="my-[60px] w-full max-w-[750px]">
        {[
          { id: 'first', question: 'How does Moon Finance work ?', answer: 'Moon Finance uses a combination of AI & deep research algorithms by our research analysts to give you a portfolio of assets which are the best suited for your investment needs.' },
          { id: 'second', question: 'Why should I use Moon Finance?', answer: 'Moon Finance is developed in a way to maximize your returns & minimize your risks. It provides you with SEBI certified Investment advisory.' },
          { id: 'third', question: 'How is my money investment?', answer: 'The money is invested through your broker.' },
          { id: 'fourth', question: 'Where is my money invested?', answer: 'Your money is invested in the portfolio made by Moon Finance based on your investment profile.' },
          { id: 'fifth', question: 'Is my money safe with Moon Finance?', answer: 'We do not keep your money, the money is directly invested through your broker and the ETFs are transferred to your demat account, i.e you have the full control of your investments.' },
        ].map((item, index) => (
          <li key={item.id} className={`list-none w-full p-[5px] ${index === 0 ? 'mt-4' : ''}`}>
            <input type="checkbox" name="accordion" id={item.id} className="hidden peer" />
            <label htmlFor={item.id} className="flex items-center p-5 text-lg font-medium bg-white mb-[2px] cursor-pointer relative border-solid border-2 peer-checked:[&::after]:rotate-135 after:w-[57px] after:h-[57px] after:content-['+'] after:text-[34px] after:absolute after:right-5 after:transition-transform after:duration-500">
              {item.question}
            </label>
            <div className="border-2 border-black bg-white text-left px-5 max-h-0 overflow-hidden transition-all duration-500 peer-checked:max-h-[600px] peer-checked:py-[30px]">
              <p>{item.answer}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Faq;