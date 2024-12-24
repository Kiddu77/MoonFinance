import React from 'react';

const Faq: React.FC = () => {
  return (
    <div className="flex justify-center items-center flex-col px-6 md:px-[12%] text-center text-lg bg-white text-[#1b1b1b]">
      {/* Header Section */}
      <div className="flex justify-center mb-8">
        <div>
          <h2 className="font-medium text-2xl md:text-3xl lg:text-4xl mt-6 mb-2">- FAQs</h2>
          <h1 className="text-xl md:text-2xl lg:text-[45px] font-bold">
            Questions? Look Here.
          </h1>
        </div>
      </div>

      {/* FAQ List */}
      <ul className="my-10 w-full max-w-xl">
        {[
          {
            id: 'first',
            question: 'How does Moon Finance work?',
            answer:
              'Moon Finance uses a combination of AI & deep research algorithms by our research analysts to give you a portfolio of assets which are the best suited for your investment needs.',
          },
          {
            id: 'second',
            question: 'Why should I use Moon Finance?',
            answer:
              'Moon Finance is developed in a way to maximize your returns & minimize your risks. It provides you with SEBI-certified investment advisory.',
          },
          {
            id: 'third',
            question: 'How is my money invested?',
            answer: 'The money is invested through your broker.',
          },
          {
            id: 'fourth',
            question: 'Where is my money invested?',
            answer:
              'Your money is invested in the portfolio made by Moon Finance based on your investment profile.',
          },
          {
            id: 'fifth',
            question: 'Is my money safe with Moon Finance?',
            answer:
              'We do not keep your money; the money is directly invested through your broker and the ETFs are transferred to your demat account, i.e., you have full control of your investments.',
          },
        ].map((item, index) => (
          <li
            key={item.id}
            className={`list-none w-full p-2 ${index === 0 ? 'mt-4' : ''}`}
          >
            <input
              type="checkbox"
              name="accordion"
              id={item.id}
              className="hidden peer"
            />
            <label
              htmlFor={item.id}
              className="flex items-center p-4 text-base md:text-lg font-medium bg-white mb-2 cursor-pointer relative border-solid border-2 border-black peer-checked:[&::after]:rotate-135 after:w-6 after:h-6 after:content-['+'] after:text-2xl after:absolute after:right-5 after:transition-transform after:duration-500"
            >
              {item.question}
            </label>
            <div className="border-2 border-black bg-white text-left px-4 py-0 max-h-0 overflow-hidden transition-all duration-500 peer-checked:max-h-[300px] peer-checked:py-4">
              <p>{item.answer}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Faq;
