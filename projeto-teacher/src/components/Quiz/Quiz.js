import React, { useState, useEffect } from 'react';
import { fetchQuestions } from '../../utils/ThirdPartyApi';
import ResultPopup from '../ResultPopup/ResultPopup';

function Quiz() {
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showResults, setShowResults] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [answersSummary, setAnswersSummary] = useState([]);

  useEffect(() => {
    const getQuestions = async () => {
      const data = await fetchQuestions();
      setQuestions(data);
    };

    getQuestions();
  }, []);

  const handleAnswerSelect = (answer) => {
    setSelectedAnswer(answer);
  };

  const handleNextQuestion = () => {
    const isCorrect =
      selectedAnswer === questions[currentQuestionIndex].correctAnswer;
    setAnswersSummary([
      ...answersSummary,
      {
        question: questions[currentQuestionIndex].question,
        selectedAnswer,
        correctAnswer: questions[currentQuestionIndex].correctAnswer,
        isCorrect,
      },
    ]);

    if (isCorrect) {
      setScore(score + 1);
    }

    setSelectedAnswer(null);
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setShowResults(true);
    }
  };

  if (showResults) {
    return (
      <div className='quiz__results'>
        <h1>Quiz Results</h1>
        <p>
          Aqui estão seus resultados. Independente de sua pontuação, a Teacher
          Vanessa tem aulas preparadas para todos os níveis. Clique aqui e entre
          em contato!
        </p>
        <p>
          Your score: {score} out of {questions.length}
        </p>
        <h2>Review your answers:</h2>
        <ul>
          {answersSummary.map((summary, index) => (
            <li key={index} style={{ marginBottom: '20px' }}>
              <p>
                <strong>Question:</strong> {summary.question}
              </p>
              <p>
                <strong>Your Answer:</strong> {summary.selectedAnswer}{' '}
                {summary.isCorrect ? '✔️' : '❌'}
              </p>
              {!summary.isCorrect && (
                <p>
                  <strong>Correct Answer:</strong> {summary.correctAnswer}
                </p>
              )}
            </li>
          ))}
        </ul>
      </div>
    );
  }

  if (questions.length === 0) {
    return <div>Loading...</div>;
  }

  const currentQuestion = questions[currentQuestionIndex];
  const answers = [
    ...currentQuestion.incorrectAnswers,
    currentQuestion.correctAnswer,
  ].sort();

  return (
    <div className='quiz'>
      <h1>Trivia Questions</h1>
      <p className='quiz__paragraph'>
        As peguntas a seguir estão relacionadas a gramática e conhecimentos
        gerais. Apenas uma resposata é correta. Ao fim do teste vocês descubrirá
        sua pontuação e verá os acertos e erros. Good luck!!
      </p>
      <div className='quiz__container'>
        <p className='quiz__question'>{currentQuestion.question}</p>
        <ul className='quiz__answers'>
          {answers.map((answer, index) => (
            <li key={index}>
              <label>
                <input
                  type='radio'
                  name='answer'
                  value={answer}
                  checked={selectedAnswer === answer}
                  onChange={() => handleAnswerSelect(answer)}
                />
                {answer}
              </label>
            </li>
          ))}
        </ul>
        <button
          className='quiz__button'
          onClick={handleNextQuestion}
          disabled={selectedAnswer === null}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default Quiz;
