import { FunctionComponent } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Layout } from './sharedComponents/layout';
import { Routes } from './Routes';
import './reset.css';
import '@/localization/i18n';
import { ErrorBoundary } from './sharedComponents/ErrorBoundary/ErrorBoundary';

export const App: FunctionComponent = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Layout>
          <ErrorBoundary>
            <Routes />
          </ErrorBoundary>
        </Layout>
      </BrowserRouter>
    </div>
  );
};
