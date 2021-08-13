import { FunctionComponent } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Layout } from './layout/Layout/Layout';
import { AppRouter } from './routing/AppRouter';
import './reset.css';

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
