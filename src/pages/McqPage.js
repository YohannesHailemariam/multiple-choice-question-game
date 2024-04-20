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
        <div>
            <h1>Multiple Choice Game</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <p>{currentQuestion.question}</p>
                    <ul>
                        {[...currentQuestion.incorrect_answers, currentQuestion.correct_answer].map((choice, index) => (
                            <li key={index}>
                                <label>
                                    <input
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
                <div>
                    <button onClick={handlePrevious} disabled={currentQuestionIndex === 0}>
                        Previous
                    </button>
                    <button onClick={handleNext} disabled={currentQuestionIndex === questions.length - 1}>
                        Next
                    </button>
                </div>
                <button type="submit">Submit Answer</button>
            </form>
        </div>
    );
}

export default McqPage;