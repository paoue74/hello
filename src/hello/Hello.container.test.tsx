import { shallow, ShallowWrapper } from 'enzyme';
import * as _ from 'lodash';
import * as React from 'react';

import { ContainerProps, HelloContainer, StateProps } from './Hello.container';

function setup(customProps?: any) {
  const defaultProps: ContainerProps = {
    initHelloMsg: jest.fn(),
    initHelloName: jest.fn(),
    message: 'message',
    name: 'name',
    updateHelloMsg: jest.fn(),
  };

  const props: ContainerProps = Object.assign({}, defaultProps, customProps);
  const enzymeWrapper: ShallowWrapper<ContainerProps, StateProps, HelloContainer> = shallow(<HelloContainer { ...props }/>);
  
  return { props, enzymeWrapper };
};

describe('Hello.container', () => {
  test('should render without crash', () => {
    const { enzymeWrapper } = setup();
    expect(enzymeWrapper).toBeTruthy();
  });


  describe('Lifecycle', () => {
    describe('componentDidMount', () => {
      test('should call initHelloName if name is undefined', () => {
        const { props } = setup({ name: undefined });

        expect(props.initHelloName).toHaveBeenCalledTimes(1);
      });

      test('should call initHelloName if name is empty', () => {
        const { props } = setup({ name: undefined });

        expect(props.initHelloName).toHaveBeenCalledTimes(1);
      });

      test('should call initHelloMsg if message is undefined', () => {
        const { props } = setup({ message: undefined });

        expect(props.initHelloMsg).toHaveBeenCalledTimes(1);
      });

      test('should call initHelloMsg if message is empty', () => {
        const { props } = setup({ message: '' });
        
        expect(props.initHelloMsg).toHaveBeenCalledTimes(1);
      });
    });
  });

  describe('Component Handlers', () => {
    test('should call updateHelloMsg when handleChangeMsg is call', () => {
      const { props, enzymeWrapper } = setup();
      const state = enzymeWrapper.instance().state;
      enzymeWrapper.instance().handleChangeMsg();
      
      expect(props.updateHelloMsg).toHaveBeenCalledTimes(1);
      expect(enzymeWrapper.instance().state).not.toEqual(state);
    });
  });
});