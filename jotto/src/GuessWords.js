import React from 'react';
import PropTypes from 'prop-types';

const GuessWords = (props) => {
  let contents;
  if (props.guessWords.length === 0) {
    contents = (
      <span data-test="guess-instructions">
        시크릿 단어를 다시 추측해보세요!
      </span>
    );
  } else {
    const guessedWordsRows = props.guessedWords.map((word, index) => (
      <tr data-test="guessed-word" key={index}>
        <td>{word.guessedWords}</td>
        <td>{word.letterMatchCount}</td>
      </tr>
    ));

    contents = (
      <div data-test="guessed-words">
        <h3>추측한 단어들</h3>
        <table>
          <thead>
            <tr>
              <th>Guess</th>
              <th>Matching Letters</th>
            </tr>
          </thead>
          <tbody>{guessedWordsRows}</tbody>
        </table>
      </div>
    );
  }
  return <div data-test="component-guessed-words">{contents}</div>;
};

GuessWords.propTypes = {
  guessedWords: PropTypes.arrayOf(
    PropTypes.shape({
      guessedWords: PropTypes.string.isRequired,
      letterMatchCount: PropTypes.number.isRequired,
    }),
  ),
};

export default GuessWords;
