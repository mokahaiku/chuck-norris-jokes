// @flow

import * as React from 'react';
import punch from '../../assets/punch.png';
import './index.css';

export default function Spinner() {
  return (
    <div className="Spinner">
      <img src={punch} className="Spinner__image" alt="punch" />
    </div>
  );
}
