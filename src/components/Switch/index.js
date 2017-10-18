// @ flow

import * as React from 'react';
import App, { AppWithData } from '../App';
import './index.css';

class Switch extends React.Component {
  state: {
    isRenderProp: boolean;
  };

  state = {
    isRenderProp: false,
  };

  get buttonTitle() {
    return `Switch to ${this.state.isRenderProp ? 'HOC' : 'Render prop'}`;
  }

  handleSwitchClick = () => this.setState(({ isRenderProp }) => ({ isRenderProp: !isRenderProp }));

  render() {
    return (
      <div className="Switch">
        {this.state.isRenderProp ? <AppWithData /> : <App />}
        <button onClick={this.handleSwitchClick} className="Switch__toggle">
          {this.buttonTitle}
        </button>
      </div>
    );
  }
}

export default Switch;
