import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from '@wojtekmaj/enzyme-adapter-react-17';
import App from './App';

Enzyme.configure({ adapter: new EnzymeAdapter() });

/**
 * App component를 위한 ShallowWrapper를 생성하는 factory function
 * @function setup
 * @param {object} props
 * @returns {ShallowWrapper}
 */

const setup = (props = {}) => shallow(<App {...props} />);

/**
 * 주어진 data-test 값을 가진 노드를 포함하는 ShallowWrapper를 반환
 * @param {ShallowWrapper} wrapper - 내부 검색을 위한 shallow wrapper
 * @param {string} val
 */
const findByTestAttr = (wrapper, val) => wrapper.find(`[data-test='${val}']`);

test('renders without error', () => {
  const wrapper = setup();
  const appComponent = findByTestAttr(wrapper, 'component-app');
  expect(appComponent.length).toBe(1);
});

test('renders increment button', () => {
  const wrapper = setup();
  const button = findByTestAttr(wrapper, 'increment-button');
  expect(button.length).toBe(1);
});

test('renders counter display', () => {
  const wrapper = setup();
  const counterDisplay = findByTestAttr(wrapper, 'counter-display');
  expect(counterDisplay.length).toBe(1);
});

test('counter display starts at 0', () => {
  const wrapper = setup();
  const count = findByTestAttr(wrapper, 'count').text();
  expect(count).toBe('0');
});

describe('Increment', () => {
  test('renders increment button', () => {
    const wrapper = setup();
    const incrementButton = findByTestAttr(wrapper, 'increment-button');
    expect(incrementButton.length).toBe(1);
  });

  test('counter increments when button is clicked', () => {
    const wrapper = setup();
    const incrementButton = findByTestAttr(wrapper, 'increment-button');
    incrementButton.simulate('click');

    const count = findByTestAttr(wrapper, 'count').text();
    expect(count).toBe('1');
  });
});

describe('decrement button', () => {
  test('renders decrement button', () => {
    const wrapper = setup();
    const button = findByTestAttr(wrapper, 'decrement-button');
    expect(button.length).toBe(1);
  });

  test('clicking decrement button decrements counter display when state is greater than 0', () => {
    const wrapper = setup();

    // 카운터가 0보다 클 수 있게 incrementButton을 클릭
    const incrementButton = findByTestAttr(wrapper, 'increment-button');
    incrementButton.simulate('click');

    // decrementButton을 찾고, 클릭
    const decrementButton = findByTestAttr(wrapper, 'decrement-button');
    decrementButton.simulate('click');

    // count display와 테스트 값 찾기
    const count = findByTestAttr(wrapper, 'count').text();
    expect(count).toBe('0');
  });
});

describe('error when counter goes below 0', () => {
  test('error does not show when not needed', () => {
    const wrapper = setup();
    const errorDiv = findByTestAttr(wrapper, 'error-message');

    const errorHasHiddenClass = errorDiv.hasClass('hidden');
    expect(errorHasHiddenClass).toBe(true);
  });

  describe('counter is 0 and decrement is clicked', () => {
    let wrapper;

    beforeEach(() => {
      wrapper = setup();

      const button = findByTestAttr(wrapper, 'decrement-button');
      button.simulate('click');
    });

    test('error shows', () => {
      const errorDiv = findByTestAttr(wrapper, 'error-message');
      const errorHasHiddenClass = errorDiv.hasClass('hidden');
      expect(errorHasHiddenClass).toBe(false);
    });

    test('counter still displays 0', () => {
      const count = findByTestAttr(wrapper, 'count').text();
      expect(count).toBe('0');
    });

    test('clicking increment clears the error', () => {
      const incrementButton = findByTestAttr(wrapper, 'increment-button');
      incrementButton.simulate('click');

      const errorDiv = findByTestAttr(wrapper, 'error-message');
      const errorHasHiddenClass = errorDiv.hasClass('hidden');
      expect(errorHasHiddenClass).toBe(true);
    });
  });
});
