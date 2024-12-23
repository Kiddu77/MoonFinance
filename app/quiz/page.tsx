"use client";

import Header from '@/app/components/Header';
import React, { useState, useEffect } from 'react';

interface Question {
    id: string;
    question: string;
    options: string[];
}

const QuizPage: React.FC = () => {
    const [questions, setQuestions] = useState<Question[]>([]);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [answers, setAnswers] = useState<{ [key: string]: string }>({});

    useEffect(() => {
        fetch('/data/question.json')
            .then((response) => response.json())
            .then((data) => setQuestions(data))
            .catch((error) => console.error('Error loading questions:', error));
    }, []);

    const handleOptionSelect = (questionId: string, option: string) => {
        setAnswers((prevAnswers) => ({
            ...prevAnswers,
            [questionId]: option,
        }));
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

    const handleSubmit = async () => {
        try {
            const response = await fetch('/api/userResponses/post', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ answers }),
            });

            if (response.ok) {
                console.log('Answers submitted successfully!');
            } else {
                console.error('Error submitting answers');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    if (questions.length === 0) {
        return <p>Loading questions...</p>;
    }

    const currentQuestion = questions[currentQuestionIndex];

    return (
        <div className="flex flex-col min-h-screen">
            {/* Header */}
            <div className="bg-white shadow-md">
                <Header />
            </div>

            {/* Main Content */}
            <main className="flex-grow flex flex-col items-center justify-center bg-gradient-to-b from-black to-[#03ffc824] text-white px-16">
                <div className="text-center mb-8">
                    <h2 className="text-2xl font-bold">{currentQuestion.question}</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
                    {currentQuestion.options.map((option, index) => (
                        <div
                            key={index}
                            onClick={() => handleOptionSelect(currentQuestion.id, option)}
                            className={`p-4 rounded-lg cursor-pointer border-2 transition-all duration-200 text-lg font-semibold 
                                ${answers[currentQuestion.id] === option
                                    ? 'bg-black border-[#03FFC980] text-white'
                                    : 'bg-black border-[#03FFC980] text-white hover:opacity-80'
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
