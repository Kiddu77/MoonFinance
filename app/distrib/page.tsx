import React from "react";
import Image from "next/image";
import circle from "../assets/circle.png";
import AssetBar from "../distrib/AssetBar";
import pie from "../assets/pieChart.jpg";
import { FaSquarePhone } from "react-icons/fa6";
import Footer from "../components/Footer";
const distrib = () => {
  return (
    <div className="min-h-screen bg-white text-black">
      <div className="md:flex-row flex-col items-center h-[20%] bg-[#F9F8F8] flex justify-center md:justify-evenly space-x-52 md:pb-5">
        <div className="h-1/2  flex items-center mt-10 p-4 bg-">
          {/* Rupee div */}
          <div className="text-2xl flex-row text-[#6A706E]">
            Invested Amount
            <p className="text-[#12C38C] text-4xl">₹30,70,600</p>
          </div>
        </div>
        <div className="flex items-center justify-center  p-4 bg-white h-1/2 !m-0 !mb-10 md:!mb-0 md:!mt-10 shadow-gray-400 shadow-lg">
          {/* Right side */}
          <Image src={circle} alt="" height={20} width={20} className="" />

          <div className="px-4 ">
            <p className="text-lg font-semibold text-black">Profile Name</p>
            <p className="text-[#959191]">CAGR</p>
          </div>
        </div>
      </div>

      <div>
        {/* Body Div */}
        <h1 className="text-center md:text-left text-4xl md:text-5xl p-6 px-20 font-semibold">Your Assets</h1>
        <div className="h-[20%] flex flex-col md:flex-row justify-between px-20">
          {/* Asset Bar */}
          <AssetBar title="Amount Invested" value="₹ 5000" />
          <AssetBar
            title="Expected CAGR"
            value={
              <>
                10
                <span className="text-[#959191] text-2xl font-bold">.28%</span>
              </>
            }
            valueClass="text-[#12C38C] font-bold"
          />
          <AssetBar title="Assets Invested in " value="3" />
          <AssetBar title="Rebalance Frequency" value="Quaterly" />
        </div>
      </div>

      <div className="h-full mt-6">
        {/* about the alloc */}
        <div className="md:mt-0 mt-10 text-3xl p-2 md:pt-10 md:px-20 font-semibold text-center md:text-left">
          About the Allocation
          <div className="flex flex-col-reverse md:flex-row items-center ">
            <div className="w-full md:w-1/2 h-full font-thin text-[#6A706E] p-4 text-lg">
              {/* Text and Button  */}
              <p className="pb-8">
                Lorem ipsum dolor sit amet consectetur. Nec mauris ut id quam
                netus. Pellentesque sed aliquet tortor auctor dictum sodales
                leo. Sed donec ut laoreet rhoncus pulvinar. Mauris et ac nisi in
                ipsum sed etiam. Pellentesque sed aliquet tortor auctor dictum
                sodales leo.Sed donec ut laoreet rhoncus pulvinar.etiam.
                Pellentesque sed aliquet tortor aucto
              </p>

              <button className="rounded-lg w-[52%] h-fit bg-[#12C38C] p-4 text-white font-extrabold">
                Take Quiz Again
              </button>
              <p className="text-sm text-center w-full md:w-[52%]">
                You can risk analyse before investing.
              </p>
              <div className="flex items-center pt-2 md:justify-normal justify-center">
                <FaSquarePhone className="text-[#12C38C] text-5xl mt-4"></FaSquarePhone>

                <p className=" font-bold text-black px-4 text-3xl pt-4">
                  Contact Us
                </p>
              </div>
            </div>

            <div className="h-full w-1/2 flex justify-center shadow-slate-400 shadow-sm">
              {/* Pie Chart  */}
              <Image src={pie} alt={""} height={500} width={400} />
            </div>
          </div>
        </div>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default distrib;
