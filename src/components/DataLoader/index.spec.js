import React from 'react';
import { shallow } from 'enzyme';
import DataLoader from './';

describe('DataLoader', () => {
  let MockMainComponent;
  let MockWaitingComponent;
  let getDataMock;
  beforeEach(() => {
    MockMainComponent = () => <div />;
    MockMainComponent.displayName = 'MockMainComponent';
    MockWaitingComponent = () => <span />;
    MockWaitingComponent.displayName = 'MockWaitingComponent';
    getDataMock = jest.fn();
  });

  it('renders correct component depending on state', () => {
    const wrapper = shallow(<DataLoader
      getData={getDataMock}
      waitingComponent={MockWaitingComponent}
      render={({ content, handleUpdate, ...props }) => (
        <MockMainComponent {...props} content={content} handleUpdate={handleUpdate} />
      )}
    />);
    expect(wrapper).toBePresent();
    expect(wrapper).toHaveState('loaded', false);
    expect(wrapper).toHaveTagName('MockWaitingComponent');
    wrapper.setState({ loaded: true, content: 'Chuck!' });
    expect(wrapper).toHaveState('loaded', true);
    expect(wrapper).toHaveTagName('MockMainComponent');
  });

  it('calls passed function', () => {
    const wrapper = shallow(<DataLoader
      getData={getDataMock}
      waitingComponent={MockWaitingComponent}
      render={({ content, handleUpdate, ...props }) => (
        <MockMainComponent {...props} content={content} handleUpdate={handleUpdate} />
      )}
    />);
    expect(wrapper).toBePresent();
    expect(getDataMock).toHaveBeenCalled();
    expect(getDataMock).toHaveBeenCalledTimes(1);
  });
});
