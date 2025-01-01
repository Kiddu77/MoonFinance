"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

interface Question {
  id: string;
  question: string;
  options: string[];
}

interface Answers {
  [key: string]: number; // questionId -> selectedOption (number)
}

const QuizPage: React.FC = () => {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Answers>({});
  const router = useRouter();

  useEffect(() => {
    // Fetch questions from a JSON file or API
    fetch("/data/question.json")
      .then((response) => response.json())
      .then((data) => {
        setQuestions(data);

        // Initialize the answers object with 0 for all questions
        const initialAnswers: Answers = {};
        data.forEach((q: Question) => {
          initialAnswers[q.id] = 0; // Default value indicating no answer
        });
        setAnswers(initialAnswers);
      })
      .catch((error) => console.error("Error loading questions:", error));
  }, []);

  const handleOptionSelect = (questionId: string, optionIndex: number) => {
    setAnswers((prevAnswers) => {
      const updatedAnswers = {
        ...prevAnswers,
        [questionId]: optionIndex,
      };

      // Log updated answers to console
      console.log("Updated Answers:", updatedAnswers);

      return updatedAnswers;
    });
  };

  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
    }
  };

  const handleBack = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex((prevIndex) => prevIndex - 1);
    }
  };

  const handleSubmit = () => {
    const answersString = JSON.stringify(answers); // Serialize the answers object
    const encodedAnswers = encodeURIComponent(answersString); // Encode for URL safety
    router.push(`/distrib?answers=${encodedAnswers}`); // Pass the encoded object
  };

  if (questions.length === 0) {
    return <p>Loading questions...</p>;
  }

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Main Content */}
      <main className="flex-grow flex flex-col items-center justify-center bg-gradient-to-b from-black to-[#03ffc824] text-white px-16">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold">{currentQuestion.question}</h2>
        </div>
        <div
          className={`grid grid-cols-1 md:grid-cols-2 gap-6 w-full ${
            currentQuestion.options.length % 2 !== 0 ? "grid-rows-auto" : ""
          }`}
        >
          {currentQuestion.options.map((option, index) => (
            <div
              key={index}
              onClick={() => handleOptionSelect(currentQuestion.id, index + 1)} // Save as a number (1-based index)
              className={`p-4 rounded-lg cursor-pointer border-2 transition-all duration-200 text-lg font-semibold 
                ${
                  answers[currentQuestion.id] === index + 1
                    ? "bg-green-500 border-[#03FFC980] text-white"
                    : "bg-black border-[#03FFC980] text-white hover:opacity-80"
                } 

                ${
                  index === currentQuestion.options.length - 1 &&
                  currentQuestion.options.length % 2 !== 0
                    ? "md:col-span-2 justify-self-center"
                    : ""
                }`}
            >
              {String.fromCharCode(65 + index)}. {option}
            </div>
          ))}
        </div>
        <div className="flex justify-between items-center mt-8 w-full">
          <button
            onClick={handleBack}
            disabled={currentQuestionIndex === 0}
            className="px-6 py-2 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-600"
          >
            Back
          </button>
          {currentQuestionIndex === questions.length - 1 ? (
            <button
              onClick={handleSubmit}
              className="px-6 py-2 bg-[#03ffc89b] rounded-lg hover:bg-[#2b937c]"
            >
              Submit
            </button>
          ) : (
            <button
              onClick={handleNext}
              className="px-6 py-2 rounded-lg hover:bg-[#2b937c]"
            >
              Next
            </button>
          )}
        </div>
        <div className="mt-4 text-center text-sm text-gray-500">
          Question {currentQuestionIndex + 1} of {questions.length}
        </div>
      </main>
    </div>
  );
};

export default QuizPage;
