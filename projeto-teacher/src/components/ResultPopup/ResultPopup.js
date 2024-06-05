function ResultPopup({ score, totalQuestions, answersSummary, onClose }) {
  return (
    <div>
      <span className='close' onClick={onClose}>
        &times;
      </span>
      <h1>Quiz Results</h1>
      <p>
        Your score: {score} out of {totalQuestions}
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

export default ResultPopup;
