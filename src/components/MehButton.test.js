import React from 'react';
import { shallow } from 'enzyme';
import MehButton from './MehButton';

describe('MehButton component', () => {
  it('renders MehButton', () => {
    const wrapper = shallow(<MehButton />);
    expect(wrapper).toMatchSnapshot();
  });
});
