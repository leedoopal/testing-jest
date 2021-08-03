import React from 'react';
import PropTypes from 'prop-types';

const GuessWords = ({ guessedWords }) => {
  let contents;
  if (guessedWords?.length === 0) {
    contents = (
      <span data-test="guess-instructions">
        시크릿 단어를 다시 추측해보세요!
      </span>
    );
  } else {
    const guessedWordsRows = guessedWords?.map((word) => (
      <tr data-test="guessed-word" key={word.guessedWords}>
        <td>{word.guessedWords}</td>
        <td>{word.letterMatchCount}</td>
      </tr>
    ));

    contents = (
      <div data-test="guessed-words">
        <h3>추측한 단어들</h3>
        <table className="table table-sm">
          <thead className="thead-light">
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
