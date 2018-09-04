import * as React from 'react';
import { Provider } from 'react-redux';
import * as TestRenderer from 'react-test-renderer';
import configureMockStore from 'redux-mock-store';

import App from './App';

const mockStore = configureMockStore();
const store = mockStore({});

describe('App', () => {
  test('should renders App without crashing', () => {
    const renderer = TestRenderer.create(<Provider store={store}><App /></Provider>);
    expect(renderer.toJSON()).toMatchSnapshot();
  });
});