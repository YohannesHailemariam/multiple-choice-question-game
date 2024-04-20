import React, { useEffect, useState } from 'react';
import axios from 'axios';

function McqPage() {
    const [questions, setQuestions] = useState([]);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://opentdb.com/api.php?amount=10');
                setQuestions(response.data.results);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    const handleAnswerChange = (event) => {
        setSelectedAnswer(event.target.value);
    };

    const handlePrevious = () => {
        setCurrentQuestionIndex((prevIndex) => Math.max(0, prevIndex - 1));
        setSelectedAnswer(null); // Reset selected answer when navigating
    };

    const handleNext = () => {
        setCurrentQuestionIndex((prevIndex) => Math.min(prevIndex + 1, questions.length - 1));
        setSelectedAnswer(null); // Reset selected answer when navigating
    };

    const handleSubmit = (event) => {
        event.preventDefault(); // Prevent form submission (we handle it manually)
        // Logic to handle submitted answers
        console.log('Selected Answers:', selectedAnswer);
        // You can compare selectedAnswer with correct answer and calculate score here
    };

    if (questions.length === 0) {
        return <div>Loading...</div>; // Show loading message until questions are fetched
    }

    const currentQuestion = questions[currentQuestionIndex];

    return (
        <div className='flex mt-[5px] items-center justify-center'>
            <div className='w-[1000px] pt-10 pr-10 pb-10 pl-5 bg-[#fafafa] border-[1px] border-[#ebebeb] shadow shadow-lg'>
              <h1 className='flex items-center justify-center mb-10 text-2xl text-[#636363]'>Multiple Choice Game</h1>
              <form onSubmit={handleSubmit}>
                <div>
                    <p className='mb-3'><span>{currentQuestionIndex + 1}. </span>{currentQuestion.question}</p>
                    <ul>
                        {[...currentQuestion.incorrect_answers, currentQuestion.correct_answer].map((choice, index) => (
                            <li className='mb-3' key={index}>
                                <label>
                                    <input
                                        className='mr-3'
                                        type="radio"
                                        name="answer"
                                        value={choice}
                                        checked={selectedAnswer === choice}
                                        onChange={handleAnswerChange}
                                    />
                                    {choice}
                                </label>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className='mt-10 mb-20 flex items-center flex-row gap-[350px]'>
                    <button className='inline-block pt-4 pb-4 pr-20 pl-16 mt-[.3em] mr-0 mb-[1em] ml-0 w-[25%] align-middle text-[#fff] text-16 leading-[20px] antialiased text-center tracking-normal bg-transparent border-0 border-b-2 border-b-solid cursor-pointer transition-all duration-150 ease focus:outline-none bg-[#4a89dc]' onClick={handlePrevious} disabled={currentQuestionIndex === 0}>
                        Previous
                    </button>
                    <button className='inline-block pt-4 pb-4 pr-20 pl-16 mt-[.3em] mr-0 mb-[1em] ml-0 w-[25%] align-middle text-[#fff] text-16 leading-[20px] antialiased text-center tracking-normal bg-transparent border-0 border-b-2 border-b-solid cursor-pointer transition-all duration-150 ease focus:outline-none bg-[#4a89dc]' onClick={handleNext} disabled={currentQuestionIndex === questions.length - 1}>
                        Next
                    </button>
                </div>
                <div className='flex items-center justify-center'>
                <button className='relative inline-block pt-4 pb-4 pr-20 pl-20 mt-[.3em] mr-0 mb-[1em] ml-0 w-[40%] align-middle text-[#fff] text-16 leading-[20px] antialiased text-center tracking-normal bg-transparent border-0 border-b-2 border-b-solid cursor-pointer transition-all duration-150 ease focus:outline-none bg-[#4a89dc]' type="submit">Submit Answer</button>
                </div>
              </form>
            </div>
        </div>
    );
}

export default McqPage;