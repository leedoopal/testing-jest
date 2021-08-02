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
