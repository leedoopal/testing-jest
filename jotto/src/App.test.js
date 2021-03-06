import { shallow } from 'enzyme';
import { findByTestAttr } from '../test/testUtils';
import App from './App';
import { getSecretWord as mockGetSecretWord } from './actions';

jest.mock('./actions');

/**
 * Setup function for App component
 * @returns {ShallowWrapper}
 */
const setup = () => {
  return shallow(<App />);
};

test('renders without error', () => {
  const wrapper = setup();
  const appComponent = findByTestAttr(wrapper, 'component-app');
  expect(appComponent).toHaveLength(1);
});
