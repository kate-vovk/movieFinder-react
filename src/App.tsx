import React, { FunctionComponent } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Layout } from './components/Layout/Layout';
import { AppRouter } from './routing/AppRouter';
import HTTPService from './services/httpService';
export const App: FunctionComponent = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Layout>
          <AppRouter />
        </Layout>
      </BrowserRouter>
      <button
        type="button"
        onClick={() => {
          HTTPService.get('movie/449406/credits').then((res: any) => {
            console.log(res);
          });
        }}
      >
        get
      </button>
    </div>
  );
};
