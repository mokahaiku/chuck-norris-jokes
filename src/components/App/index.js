// @flow

import * as React from 'react';
import Spinner from '../Spinner';
import withData from '../withData';
import { getChuckNorrisJoke } from '../../api';
import './index.css';
import chuck from '../../assets/chuck.png';

type Props = {
  content: string,
  handleUpdate: Function,
}

export function App({ content, handleUpdate }: Props) {
  return (
    <div className="App">
      <img className="App__logo" alt="Chuck Norris" src={chuck} />
      <h1 className="App__content">{content}</h1>
      <button className="App__button" onClick={handleUpdate}>
        Another!
      </button>
    </div>
  );
}

export default withData(getChuckNorrisJoke)(App, Spinner);
