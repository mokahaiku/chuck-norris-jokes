import React from 'react';
import { shallow } from 'enzyme';
import withData from './';

describe('withData', () => {
  let MockMainComponent;
  let MockWaitingComponent;
  let getDataMock;
  let WrappedMockComponent;
  beforeEach(() => {
    MockMainComponent = () => <div />;
    MockMainComponent.displayName = 'MockMainComponent';
    MockWaitingComponent = () => <span />;
    MockWaitingComponent.displayName = 'MockWaitingComponent';
    getDataMock = jest.fn();
    WrappedMockComponent = withData(getDataMock)(MockMainComponent, MockWaitingComponent);
  });

  it('renders correct component depending on state', () => {
    const wrapper = shallow(<WrappedMockComponent />);
    expect(wrapper).toBePresent();
    expect(wrapper).toHaveState('loaded', false);
    expect(wrapper).toHaveTagName('MockWaitingComponent');
    wrapper.setState({ loaded: true, content: 'Chuck!' });
    expect(wrapper).toHaveState('loaded', true);
    expect(wrapper).toHaveTagName('MockMainComponent');
  });

  it('calls passed function', () => {
    const wrapper = shallow(<WrappedMockComponent />);
    expect(wrapper).toBePresent();
    expect(getDataMock).toHaveBeenCalled();
    expect(getDataMock).toHaveBeenCalledTimes(1);
  });
});
