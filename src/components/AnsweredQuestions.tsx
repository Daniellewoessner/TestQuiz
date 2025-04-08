import { useState } from 'react';

interface AnsweredQuestionProps {
  questionId: string;
  initialAnswered: boolean;
}

const AnsweredQuestion = ({ questionId, initialAnswered }: AnsweredQuestionProps) => {
  const [answered, setAnswered] = useState(initialAnswered);

  const handleToggle = () => {
    setAnswered(!answered);
  };

  return (
    <div className="form-check">
      <input
        className="form-check-input"
        type="checkbox"
        id={`answered-${questionId}`}
        checked={answered}
        onChange={handleToggle}
      />
      <label className="form-check-label" htmlFor={`answered-${questionId}`}>
        Answered
      </label>
    </div>
  );
};

export default AnsweredQuestion;