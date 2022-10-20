import { useState } from 'react';
import challenge from '../assets/challenge2.png';
import '../App.css';
import './styles.css';

interface IChallenge {
  onSubmit?(): void;
}

function Challenge2({ onSubmit }: IChallenge) {
  const challengeAnswer = ['construtivista'];
  const [answer, setAnswer] = useState('');
  const [correctAnswer, setCorrectAnswer] = useState<boolean | undefined>(
    undefined
  );

  const validateAnswer = () => {
    if (challengeAnswer.find((el) => el === answer.toLowerCase())) {
      setCorrectAnswer(true);
      onSubmit?.();
    } else {
      setCorrectAnswer(false);
    }
  };

  return (
    <div className="challenge-screen">
      <span className="title">
        Resolva o caça-palavras e, de acordo com ele, descubra o nome do
        seguinte processo de apropriação do conhecimento.
      </span>
      <img src={challenge} className="image-2" />

      <div className="card">
        <input
          onChange={(e) => setAnswer(e.target.value)}
          className="answer"
          placeholder="Resposta"
          onKeyDown={(e) => {
            if (e.code === 'Enter') {
              validateAnswer();
            }
          }}
        />
        <button onClick={validateAnswer}>Responder</button>
        {correctAnswer === false && (
          <p className="error-text">Ops! tente de novo</p>
        )}
      </div>
    </div>
  );
}

export default Challenge2;
