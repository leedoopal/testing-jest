import React from 'react';
import PropTypes from 'prop-types';

const GuessWords = (props) => {
  return <div></div>;
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
