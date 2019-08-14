import React from 'react';
import { shallow } from 'enzyme';
import CuteButton from './CuteButton';

describe('CuteButton component', () => {
  it('renders CuteButton', () => {
    const wrapper = shallow(<CuteButton />);
    expect(wrapper).toMatchSnapshot();
  });
});
