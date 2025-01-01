"use client";

import React, { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import circle from "../assets/circle.png";
import AssetBar from "../distrib/AssetBar";
import DonutChart from "../components/DonutChart";
import { FaSquarePhone } from "react-icons/fa6";
import Footer from "../components/Footer";

const DistribPage: React.FC = () => {
  const searchParams = useSearchParams();
  const [scores, setScores] = useState({
    equity: 0,
    debt: 0,
    gold: 0,
  });

  useEffect(() => {
    // Extract answers from query params
    const answers = searchParams.get("answers");
    if (answers) {
      try {
        // Define and parse answers as an array of numbers
        const parsedAnswers: number[] = JSON.parse(answers) as number[];
  
        // Operation 1: Calculate risk, diversity, and stability scores
        let risk_score = 0;
        let diversity_score = 0;
        let stability_score = 0;
  
        if (parsedAnswers.length === 9) {
          risk_score =
            parsedAnswers[0] * 0.15 +
            parsedAnswers[1] * 0.1 +
            parsedAnswers[2] * 0.3 +
            parsedAnswers[4] * 0.15 +
            parsedAnswers[5] * 0.12 +
            parsedAnswers[6] * 0.05 +
            parsedAnswers[7] * 0.08;
  
          diversity_score =
            parsedAnswers[3] * 0.1 +
            parsedAnswers[4] * 0.08 +
            parsedAnswers[8] * 0.1 +
            2 / risk_score;
  
          stability_score =
            parsedAnswers[0] * 0.1 +
            parsedAnswers[1] * 0.1 +
            parsedAnswers[5] * 0.2 +
            parsedAnswers[6] * 0.15 +
            parsedAnswers[7] * 0.15 +
            parsedAnswers[4] * 0.4;
  
          // Debugging: Alert scores
          // alert(`Risk Score: ${risk_score}`);
          // alert(`Diversity Score: ${diversity_score}`);
          // alert(`Stability Score: ${stability_score}`);
        }
  
        // Operation 2: Map scores to the table and assign allocations
        let equity = 0;
        let debt = 0;
        let gold = 0;
  
        if (risk_score <= 3 && stability_score >= 7) {
          // Very low risk, very high stability
          if (diversity_score <= 5) {
            equity = 40;
            debt = 40;
            gold = 20;
          } else {
            equity = 30;
            debt = 50;
            gold = 20;
          }
        } else if (risk_score <= 5 && stability_score >= 5) {
          // Low risk, high stability
          if (diversity_score <= 5) {
            equity = 60;
            debt = 20;
            gold = 20;
          } else if (diversity_score > 5 && diversity_score <= 8) {
            equity = 50;
            debt = 30;
            gold = 20;
          } else {
            equity = 40;
            debt = 40;
            gold = 20;
          }
        } else if (risk_score > 5 && risk_score <= 7) {
          // Moderate risk
          if (stability_score >= 5 && diversity_score <= 5) {
            equity = 70;
            debt = 20;
            gold = 10;
          } else if (stability_score >= 5 && diversity_score > 5) {
            equity = 60;
            debt = 30;
            gold = 10;
          } else if (stability_score < 5) {
            equity = 50;
            debt = 40;
            gold = 10;
          }
        } else if (risk_score > 7 && risk_score <= 9) {
          // High risk
          if (stability_score >= 5 && diversity_score <= 5) {
            equity = 80;
            debt = 10;
            gold = 10;
          } else if (stability_score >= 5 && diversity_score > 5) {
            equity = 70;
            debt = 20;
            gold = 10;
          } else if (stability_score < 5) {
            equity = 60;
            debt = 30;
            gold = 10;
          }
        } else if (risk_score > 9) {
          // Very high risk
          if (stability_score >= 5 && diversity_score <= 5) {
            equity = 100;
            debt = 0;
            gold = 0;
          } else if (stability_score >= 5 && diversity_score > 5) {
            equity = 90;
            debt = 0;
            gold = 10;
          } else if (stability_score < 5) {
            equity = 80;
            debt = 10;
            gold = 10;
          }
        } else {
          // Catch-all fallback
          equity = 50;
          debt = 30;
          gold = 20;
        }
        
  
        // Set scores for graph
        setScores({ equity, debt, gold });
  
        // Debugging: Alert allocations
        // alert(`Equity: ${equity}%`);
        // alert(`Debt: ${debt}%`);
        // alert(`Gold: ${gold}%`);
      } catch (error) {
        console.error("Error parsing answers:", error);
      }
    }
  }, [searchParams]);
  
  return (
    <div className="min-h-screen bg-white text-black">
      <div className="md:flex-row flex-col items-center h-[20%] bg-[#F9F8F8] flex justify-center md:justify-evenly space-x-52 md:pb-5">
        <div className="h-1/2 flex items-center mt-10 p-4">
          {/* Rupee div */}
          <div className="text-2xl flex-row text-[#6A706E]">
            Invested Amount
            <p className="text-[#12C38C] text-4xl">₹30,70,600</p>
          </div>
        </div>
        <div className="flex items-center justify-center p-4 bg-white h-1/2 !m-0 !mb-10 md:!mb-0 md:!mt-10 shadow-gray-400 shadow-lg">
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
        <h1 className="text-center md:text-left text-4xl md:text-5xl p-6 px-20 font-semibold">
          Your Assets
        </h1>
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
          <AssetBar title="Rebalance Frequency" value="Quarterly" />
        </div>
      </div>

      <div className="h-full mt-6">
        {/* About the Allocation */}
        <div className="md:mt-0 mt-10 text-3xl p-2 md:pt-10 md:px-20 font-semibold text-center md:text-left">
          About the Allocation
          <div className="flex flex-col-reverse md:flex-row items-center ">
            <div className="w-full md:w-1/2 h-full font-thin text-[#6A706E] p-4 text-lg">
              {/* Text and Button */}
              <p className="pb-8">
                Lorem ipsum dolor sit amet consectetur. Nec mauris ut id quam
                netus. Pellentesque sed aliquet tortor auctor dictum sodales
                leo. Sed donec ut laoreet rhoncus pulvinar. Mauris et ac nisi in
                ipsum sed etiam. Pellentesque sed aliquet tortor auctor dictum
                sodales leo. Sed donec ut laoreet rhoncus pulvinar.etiam.
                Pellentesque sed aliquet tortor aucto
              </p>

              <button className="rounded-lg w-[52%] h-fit bg-[#12C38C] p-4 text-white font-extrabold">
                Take Quiz Again
              </button>
              <p className="text-sm text-center w-full md:w-[52%]">
                You can risk analyze before investing.
              </p>
              <div className="flex items-center pt-2 md:justify-normal justify-center">
                <FaSquarePhone className="text-[#12C38C] text-5xl mt-4" />
                <p className="font-bold text-black px-4 text-3xl pt-4">
                  Contact Us
                </p>
              </div>
            </div>

            <div className="h-full w-1/2 flex justify-center shadow-slate-400 shadow-sm">
              {/* Replace Pie Chart Image with DonutChart */}
              <DonutChart
                equity={scores.equity / 100}
                debt={scores.debt / 100}
                gold={scores.gold / 100}
              />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default DistribPage;
