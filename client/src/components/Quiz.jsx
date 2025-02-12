import { useContext, useEffect, useState } from "react";
import { QuizContext } from "../context/QuizContext";

const Quiz = ({ setPage }) => {
    const { data, score, setScore } = useContext(QuizContext);
    const [shuffledQuestions, setShuffledQuestions] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState(null);

    useEffect(() => {
        // Shuffle questions when the component loads
        const shuffled = [...data.questions].sort(() => Math.random() - 0.5);
        setShuffledQuestions(shuffled);
    }, [data]);

    const handleAnswerSelect = (answer) => {
        setSelectedAnswer(answer);
    };

    const handleNextQuestion = () => {
        if (selectedAnswer === shuffledQuestions[currentIndex].correctOption) {
            setScore(score + 1);
        }

        if (currentIndex < shuffledQuestions.length - 1) {
            setCurrentIndex(currentIndex + 1);
            setSelectedAnswer(null);
        } else {
            setPage('result')
        }
    };

    if (shuffledQuestions.length === 0) {
        return <div className="text-center mt-10">Loading...</div>;
    }

    return (
        <div className="flex justify-center items-center h-screen bg-gray-100">
            <div className="bg-white p-6 rounded-lg shadow-lg w-96 text-center">
                <h2 className="text-xl font-bold mb-4">
                    Question {currentIndex + 1} / {shuffledQuestions.length}
                </h2>
                <p className="mb-4">{shuffledQuestions[currentIndex].question}</p>
                <div className="flex flex-col space-y-2">
                    {shuffledQuestions[currentIndex].options.map((option, index) => (
                        <button
                            key={index}
                            onClick={() => handleAnswerSelect(option)}
                            className={`p-2 border rounded-lg ${selectedAnswer === option ? "bg-blue-500 text-white" : "bg-gray-200"
                                }`}
                        >
                            {option}
                        </button>
                    ))}
                </div>
                <button
                    onClick={handleNextQuestion}
                    disabled={selectedAnswer === null}
                    className="mt-4 w-full bg-green-500 text-white p-2 rounded-lg hover:bg-green-600 disabled:bg-gray-400"
                >
                    {currentIndex < shuffledQuestions.length - 1 ? "Next" : "Finish"}
                </button>
            </div>
        </div>
    );
};

export default Quiz;
