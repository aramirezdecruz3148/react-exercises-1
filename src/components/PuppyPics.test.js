import React from 'react';
import { shallow } from 'enzyme';
import PuppyPics from './PuppyPics';

describe('PuppyPics component', () => {
  it('renders PuppyPics', () => {
    const wrapper = shallow(<PuppyPics />);
    expect(wrapper).toMatchSnapshot();
  });
});
