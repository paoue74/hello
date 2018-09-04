import { shallow, ShallowWrapper } from 'enzyme';
import * as React from 'react';

import { Hello, HelloProps } from './Hello.component';

describe('Component', () => {
  test('should render Hello component', () => {
    const changeMsg = jest.fn();
    const enzymeWrapper: ShallowWrapper<HelloProps, {}, Hello> = shallow(<Hello name='test' message='message' changeMsg={changeMsg} />);

    expect(enzymeWrapper).toBeTruthy();
    const paragraphs = enzymeWrapper.find('p');
    expect(paragraphs).toHaveLength(2);
    expect(paragraphs.get(0).props.children).toEqual(['Hello ', 'test', ', ']);
    const button = enzymeWrapper.find('button');
    expect(button).toHaveLength(1);
    button.simulate('click');
    expect(changeMsg).toHaveBeenCalledTimes(1);
  });
});