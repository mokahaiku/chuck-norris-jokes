import React from 'react';
import { shallow } from 'enzyme';
import Switch from './';
import App from '../App';

describe('Switch', () => {
  it('renders Switch correctly', () => {
    const wrapper = shallow(<Switch />);
    expect(wrapper).toBePresent();
    expect(wrapper).toHaveClassName('Switch');
    expect(wrapper).toHaveTagName('div');
  });

  it('renders button correctly', () => {
    const wrapper = shallow(<Switch />);
    expect(wrapper.find('button')).toBePresent();
    expect(wrapper.find('button')).toHaveClassName('Switch__toggle');
    expect(wrapper.find('button')).toHaveProp('onClick');
    expect(wrapper).toHaveState('isRenderProp', false);
    expect(wrapper.find('button')).toHaveText('Switch to Render prop');
    wrapper.setState({ isRenderProp: true });
    expect(wrapper).toHaveState('isRenderProp', true);
    expect(wrapper.find('button')).toHaveText('Switch to HOC');
  });


  it('renders correct element', () => {
    const wrapper = shallow(<Switch />);
    expect(wrapper.childAt(0)).toHaveTagName(App.displayName);
    expect(wrapper).toHaveState('isRenderProp', false);
    wrapper.setState({ isRenderProp: true });
    expect(wrapper).toHaveState('isRenderProp', true);
    expect(wrapper.childAt(0)).toHaveTagName('AppWithData');
  });
});
