import logo from './logo.svg';
import './App.css';

import Congrats from './Congrats';
import GuessWords from './GuessWords';

function App() {
  return (
    <div className="App">
      <h1>Jotto</h1>
      <Congrats success={false} />
      <GuessWords guessedWords={[]} />
    </div>
  );
}

export default App;
