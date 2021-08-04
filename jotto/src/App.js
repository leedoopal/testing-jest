import './App.css';

import Congrats from './Congrats';
import GuessWords from './GuessWords';

function App() {
  return (
    <div data-test="component-app" className="container">
      <h1>Jotto</h1>
      <Congrats success={false} />
      <GuessWords
        guessedWords={[{ guessedWords: 'train', letterMatchCount: 3 }]}
      />
    </div>
  );
}

export default App;
