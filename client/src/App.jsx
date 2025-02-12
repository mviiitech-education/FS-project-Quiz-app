import './App.css';
import { useState } from 'react';
import Home from './components/Home';
import Quiz from './components/Quiz';
import AuthProvider from './context/AuthContext';
import QuizProvider from './context/QuizContext';
import Result from './components/Result';

const App = () => {
  const [page, setPage] = useState('home');

  const PAGES = {
    home: <Home setPage={setPage} />,
    quiz: <Quiz setPage={setPage} />,
    result: <Result setPage={setPage} />
  }

  return (
    <QuizProvider>
      <AuthProvider>
        {PAGES[page]}
      </AuthProvider>
    </QuizProvider>
  );
};

export default App;
