import React, { FunctionComponent } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Layout } from './components/layout/Layout';
import { AppRouter } from './routing/AppRouter';

export const App: FunctionComponent = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Layout>
          <AppRouter />
        </Layout>
      </BrowserRouter>
    </div>
  );
};
