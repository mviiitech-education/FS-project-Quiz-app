import { useContext } from "react";
import { QuizContext } from "../context/QuizContext";

const Result = ({ setPage }) => {
    const { score, data } = useContext(QuizContext);

    function handleClick() {
        setPage('home');
    }

    return (
        <div className="flex justify-center items-center h-screen bg-gray-100">
            <div className="bg-white p-6 rounded-lg shadow-lg w-80 text-center">
                <h2 className="text-2xl font-bold mb-4">Quiz Completed!</h2>
                <p className="text-lg mb-4">
                    Your Score: <span className="font-bold">{score}</span> / {data.questions.length}
                </p>
                <button
                    onClick={handleClick}
                    className="mt-4 w-full bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600"
                >
                    End
                </button>
            </div>
        </div>
    );
};

export default Result;
