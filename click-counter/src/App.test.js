import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from '@wojtekmaj/enzyme-adapter-react-17';
import App from './App';

Enzyme.configure({ adapter: new EnzymeAdapter() });

const setup = (props = {}) => {
  return shallow(<App {...props} />);
};

test('renders without error', () => {});

test('renders increment button', () => {});

test('renders counter display', () => {});

test('counter display starts at 0', () => {});

test('clicking button increments counter display', () => {});
