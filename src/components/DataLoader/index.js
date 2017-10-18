// @ flow

import * as React from 'react';

type Props = {
  render: Function,
  waitingComponent: React.ComponentType<any>,
  getData: Function,
}

type State = {
  loaded: boolean,
  content: string,
}

class DataLoader extends React.Component<Props, State> {
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
    const content = await this.props.getData();
    this.setState({ loaded: true, content });
  };

  render() {
    const {
      handleUpdate,
      props: { render, waitingComponent: WaitingComponent },
      state: { loaded, content },
    } = this;
    return loaded ? render({ content, handleUpdate }) : <WaitingComponent />;
  }
}

export default DataLoader;
