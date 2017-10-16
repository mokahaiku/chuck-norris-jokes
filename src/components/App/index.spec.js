import React from 'react';
import { shallow } from 'enzyme';
import App from './';

describe('App', () => {
  it('renders App correctly', () => {
    const wrapper = shallow(<App />);
    expect(wrapper).toBePresent();
    expect(wrapper).toHaveClassName('App');
    expect(wrapper).toHaveTagName('div');
  });

  it('renders img correctly', () => {
    const wrapper = shallow(<App />).find('img');
    expect(wrapper).toBePresent();
    expect(wrapper).toHaveClassName('App__logo');
    expect(wrapper).toHaveProp('alt', 'Chuck Norris');
    expect(wrapper).toHaveProp('src', 'chuck.png');
  });

  it('renders h1 correctly', () => {
    const wrapper = shallow(<App content="Chuck" />).find('h1');
    expect(wrapper).toBePresent();
    expect(wrapper).toHaveClassName('App__content');
    expect(wrapper).toHaveText('Chuck');
  });

  it('renders button correctly', () => {
    const wrapper = shallow(<App content="Chuck" />).find('button');
    expect(wrapper).toBePresent();
    expect(wrapper).toHaveClassName('App__button');
    expect(wrapper).toHaveText('Another!');
  });

  it('reacts to button being clicked', () => {
    const handleUpdate = jest.fn();
    const wrapper = shallow(<App content="Chuck" handleUpdate={handleUpdate} />).find('button');
    wrapper.simulate('click');
    expect(handleUpdate).toHaveBeenCalled();
    expect(handleUpdate).toHaveBeenCalledTimes(1);
  });
});
