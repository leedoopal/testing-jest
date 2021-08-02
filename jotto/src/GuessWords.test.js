import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAttr, checkProps } from '../test/testUtils';
import GuessWords from './GuessWords';

const defaultProps = {
  guessWords: [{ guessWords: 'train', letterMatchCount: 3 }],
};

/**
 * GuessedWords component에서 사용하는 ShallowWrapper를 생성해주는 Factory function
 * @function setup
 * @param {object} props
 * @returns {ShallowWrapper}
 */
const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props };
  return shallow(<GuessWords {...setupProps} />);
};

test('does not throw warning with expected props', () => {
  checkProps(GuessWords, defaultProps);
});

describe('if there are no words guessed', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = setup({ guessWords: [] });
  });

  test('renders without error', () => {
    const component = findByTestAttr(wrapper, 'component-guessed-words');
    expect(component.length).toBe(1);
  });

  test('renders instructions to guess a word', () => {
    const instructions = findByTestAttr(wrapper, 'guess-instructions');
    expect(instructions.text().length).not.toBe(0);
  });
});

describe('if there are words guessed', () => {
  const guessedWords = [
    { guessedWords: 'train', letterMatchCount: 3 },
    { guessedWords: 'agile', letterMatchCount: 1 },
    { guessedWords: 'party', letterMatchCount: 5 },
  ];
  let wrapper;

  beforeEach(() => {
    wrapper = setup({ guessedWords });
  });

  test('renders without error', () => {
    const component = findByTestAttr(wrapper, 'component-guessed-words');
    expect(component.length).toBe(1);
  });
  test('renders "guessed words" section', () => {
    const guessedWordsNode = findByTestAttr(wrapper, 'guessed-words');
    expect(guessedWordsNode.length).toBe(1);
  });
  test('correct number of guessed words', () => {
    const guessedWordsNodes = findByTestAttr(wrapper, 'guessed-words');
    expect(guessedWordsNodes.length).toBe(guessedWords.length);
  });
});
