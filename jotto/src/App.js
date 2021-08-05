import './App.css';

import Congrats from './Congrats';
import GuessWords from './GuessWords';
import Input from './Input';

function App() {
  // TODO: props 가져오기
  const success = false;
  const secretWord = 'party';
  const guessedWords = [];

  return (
    <div data-test="component-app" className="container">
      <h1>Jotto</h1>
      <Congrats success={true} />
      <Input success={success} secretWord={secretWord} />
      <GuessWords guessedWords={guessedWords} />
    </div>
  );
}

export default App;
