'use strict';

import React from 'react';
import Screen from '../app/Screen';
import Formulae from '../app/Formulae';
import Keyboard from '../app/Keyboard';

export default function () {
  return (
    <div className='main'>
      <Screen />
      <Formulae />
      <Keyboard />
    </div>
  );
}
