import * as React from 'react';
import * as TestRenderer from 'react-test-renderer';

import { ReactTestInstance } from 'react-test-renderer';
import { HelloSFC, HelloSFCProps } from './HelloSFC.component';

describe('HelloSFC component', () => {
  test('should render HelloSFC without crashing', () => {
    const props: HelloSFCProps = {
      changeMsg: jest.fn(),
      message: 'This is SFC component',
      name: 'SFC',
    }
    const renderer: TestRenderer.ReactTestRenderer = TestRenderer.create(<HelloSFC {...props }/>);
    const testInstance: TestRenderer.ReactTestInstance = renderer.root;
  
    expect(testInstance).toBeTruthy();
    const paragraphs: ReactTestInstance[] = testInstance.findAllByType('p');
    expect(paragraphs).toHaveLength(2);
    expect(paragraphs[0].props.children.indexOf(props.name)).not.toBeLessThan(0);
    expect(paragraphs[1].props.children).toEqual(props.message);
    const button: ReactTestInstance = testInstance.findByType('button');
    expect(button).toBeTruthy();
  });
});