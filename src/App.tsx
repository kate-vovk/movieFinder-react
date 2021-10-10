import { FunctionComponent } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Layout } from './sharedComponents/layout';
import { Routes } from './Routes';
import { ErrorComponent } from '@/sharedComponents/ErrorComponent/ErrorComponent';
import './reset.css';
import '@/localization/i18n';

export const App: FunctionComponent = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <ErrorComponent>
          <Layout>
            <Routes />
          </Layout>
        </ErrorComponent>
      </BrowserRouter>
    </div>
  );
};
