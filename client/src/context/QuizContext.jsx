import { createContext, useEffect, useState } from "react";
import { DATA, EMPTY_DATA } from "../mock/questions";

const QuizContext = createContext();

export default function QuizProvider({ children }) {
    const [score, setScore] = useState(0);
    const [data, setData] = useState(EMPTY_DATA);

    useEffect(() => {
        setData(DATA);
    }, []);

    return (
        <QuizContext.Provider
            value={{
                data,
                score,
                setScore
            }}
        >
            {children}
        </QuizContext.Provider>
    );
}

export { QuizContext };