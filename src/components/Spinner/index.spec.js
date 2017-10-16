import React from 'react';
import { shallow } from 'enzyme';
import Spinner from './';

describe('Spinner', () => {
  it('renders Spinner correctly', () => {
    const wrapper = shallow(<Spinner />);
    expect(wrapper).toBePresent();
    expect(wrapper).toHaveClassName('Spinner');
    expect(wrapper).toHaveTagName('div');
  });

  it('renders img correctly', () => {
    const wrapper = shallow(<Spinner />);
    expect(wrapper.find('img')).toBePresent();
    expect(wrapper.find('img')).toHaveClassName('Spinner__image');
    expect(wrapper.find('img')).toHaveProp('alt', 'punch');
    expect(wrapper.find('img')).toHaveProp('src', 'punch.png');
  });
});
