import React from 'react';
import { mount } from 'enzyme';

import App from './App';
import { findByTestAttr } from '../test/testUtils';

/**
 * 지정된 initial 조건을 사용하여 wrapper 생성
 * 그리고 'train'이라는 추측어 제출
 * @function
 *
 * @param {object} state - initial conditions
 * @returns {Wrapper} - App 컴포넌트가 마운트 되었을 때 Enzyme wrapper
 */

const setup = (state = {}) => {
  // TODO: apply state
  const wrapper = mount(<App />);

  // add value to input box
  const inputBox = findByTestAttr(wrapper, 'input-box');
  inputBox.simulate('change', { target: { value: 'train' } });

  // simulate click on submit button
  const submitButton = findByTestAttr(wrapper, 'submit-button');
  submitButton.simulate('click', { preventDefault() {} });

  return wrapper;
};

describe('no words guessed', () => {});

describe('some words guessed', () => {});

describe('guess secret word', () => {});
