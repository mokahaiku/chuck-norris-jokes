// @ flow

import * as React from 'react';
import { getDisplayName } from '../utils';

export default getData =>
  function withData(WrappedComponent, WaitingComponent) {
    class WithData extends React.Component {
      state = {
        loaded: false,
        content: '',
      };

      componentDidMount() {
        this.loadNewData();
      }

      handleUpdate = () => {
        this.setState({ loaded: false }, this.loadNewData);
      };

      loadNewData = async () => {
        const content = await getData();
        this.setState({ loaded: true, content });
      };

      render() {
        const { handleUpdate, state: { loaded, content } } = this;
        return loaded ? (
          <WrappedComponent {...this.props} content={content} handleUpdate={handleUpdate} />
        ) : (
          <WaitingComponent />
        );
      }
    }
    WithData.displayName = `WithData(${getDisplayName(WrappedComponent)})`;
    return WithData;
  };
