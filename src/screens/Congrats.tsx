import brain from '../assets/brain.png';
import '../App.css';
import './styles.css';

function Congrats() {
  return (
    <div className="challenge-screen">
      <h1>Parabéns! Você venceu o desafio!</h1>
      <img src={brain} className="image-2" />
    </div>
  );
}

export default Congrats;
