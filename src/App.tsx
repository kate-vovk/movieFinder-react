/* eslint-disable no-use-before-define */
import React, { FunctionComponent } from 'react';
import HTTPService from './services/httpService';

export const App: FunctionComponent = () => {
  return <div className="App">{HTTPService.get('movie/449406/credits')}</div>;
};
