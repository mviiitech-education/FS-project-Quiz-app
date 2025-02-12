import { useContext, useState } from "react";
import { QuizContext } from "../context/QuizContext";

const Home = ({ setPage }) => {
    const { data } = useContext(QuizContext);

    function handleClick() {
        setPage("quiz")
    }

    return (
        <div className="flex justify-center items-center h-screen bg-gray-100">
            <div className="bg-white p-6 rounded-lg shadow-lg w-100 text-center">
                <h2 className="text-2xl font-bold mb-4">{data.title}</h2>
                <h3 className="text-xl mb-2">{data.subtitle}</h3>
                <p className="text-gray-700 mb-4">{data.description}</p>
                <p className="text-gray-500 mb-4">{data.startTime}</p>

                <button
                    onClick={handleClick}
                    className="w-full bg-green-500 text-white p-2 rounded-lg hover:bg-green-600"
                >
                    Start Test
                </button>
            </div>
        </div>
    );
};

export default Home;
