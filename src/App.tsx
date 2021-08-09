import React, { FunctionComponent } from 'react';
import HTTPService from './services/httpService';

HTTPService.get('movie/449406/credits').then((res: any) => {
  console.log(res.data);
});
HTTPService.get('movie/2').then((res: any) => {
  console.log(res.data);
});
export const App: FunctionComponent = () => {
  return <div className="App">Test</div>;
};
