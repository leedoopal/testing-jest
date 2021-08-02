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
