import React, { useRef, useState, useEffect } from 'react';
import './index.css';

function QuizApp() {
  const [questions, setQuestions] = useState([]); 
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0); 
  const [correctAnswers, setCorrectAnswers] = useState(0); 
  const [showResult, setShowResult] = useState(false);
  const [isOptionSelected, setIsOptionSelected] = useState(false); 
  const [shuffledOptions, setShuffledOptions] = useState([]); 
  const selectedOptionRefs = useRef([]); 

  useEffect(() => {
    fetch('https://the-trivia-api.com/v2/questions')
      .then((response) => response.json())
      .then((data) => {
        setQuestions(data); 
      })
      .catch((error) => console.error('Error fetching questions:', error));
  }, []);


  useEffect(() => {
    if (questions.length > 0) {
      const currentQuestion = questions[currentQuestionIndex];
      const options = [...currentQuestion.incorrectAnswers, currentQuestion.correctAnswer];
      setShuffledOptions(shuffleOptions(options)); 
    }
  }, [currentQuestionIndex, questions]);

  function shuffleOptions(options) {
    for (let i = options.length - 1; i > 0; i--) {
      const randomIndex = Math.floor(Math.random() * (i + 1));
      [options[i], options[randomIndex]] = [options[randomIndex], options[i]];
    }
    return options;
  }

  const handleOptionChange = () => {
    const isSelected = selectedOptionRefs.current.some((input) => input?.checked);
    setIsOptionSelected(isSelected);
  };

  function handleNextQuestion() {
    const selectedOption = selectedOptionRefs.current.find((input) => input?.checked);

    if (selectedOption) {
      const isCorrect = selectedOption.value === questions[currentQuestionIndex].correctAnswer;
      if (isCorrect) {
        setCorrectAnswers(correctAnswers + 1);
      }
    }

    selectedOptionRefs.current.forEach((input) => {
      if (input) {
        input.checked = false;
      }
    });

    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setShowResult(true); 
    }

    setIsOptionSelected(false);
  }

  if (questions.length === 0) {
    return <h1 className="text-3xl font-bold text-center mt-10">Loading questions...</h1>;
  }

  if (showResult) {
    const incorrectAnswers = questions.length - correctAnswers;
    return (
      <div className="max-w-lg mx-auto mt-20 p-6 bg-white shadow-lg rounded-lg">
        <h1 className="text-4xl font-bold text-center text-green-600">Quiz Finished!</h1>
        <h2 className="text-2xl font-semibold text-center mt-4">Your Results:</h2>
        <p className="text-xl mt-2 text-center">Correct Answers: {correctAnswers}</p>
        <p className="text-xl mt-2 text-center">Incorrect Answers: {incorrectAnswers}</p>
      </div>
    );
  }


  const currentQuestion = questions[currentQuestionIndex];

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-xl w-full bg-white p-6 rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold text-center text-indigo-600 mb-6">Quiz App</h1>
        <div>
          <h2 className="text-2xl font-semibold mb-4">
            Q{currentQuestionIndex + 1}: {currentQuestion.question.text}
          </h2>
          <ul className="space-y-4">
            {shuffledOptions.map((option, index) => (
              <li key={index} className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="option"
                  id={option}
                  value={option}
                  ref={(el) => (selectedOptionRefs.current[index] = el)}
                  onChange={handleOptionChange}
                  className="h-4 w-4 text-indigo-600 border-gray-300 focus:ring-indigo-500"
                />
                <label
                  htmlFor={option}
                  className="text-lg font-medium text-gray-700"
                >
                  {option}
                </label>
              </li>
            ))}
          </ul>
          <button
            onClick={handleNextQuestion}
            disabled={!isOptionSelected}
            className={`mt-6 w-full py-3 text-lg font-semibold rounded-lg transition ${
              isOptionSelected ? 'bg-indigo-600 text-white hover:bg-indigo-700' : 'bg-gray-400 text-gray-700 cursor-not-allowed'
            }`}
          >
            {currentQuestionIndex < questions.length - 1 ? 'Next Question' : 'Finish Quiz'}
          </button>
        </div>
      </div>
    </div>
  );
}

export default QuizApp;
