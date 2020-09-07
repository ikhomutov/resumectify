import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom';

import Loader from './components/Loader';
import './index.css';

const App = lazy(() => import('./App'));


ReactDOM.render(
  <Suspense fallback={<Loader />}>
    <App />
  </Suspense>,
  document.getElementById('root')
);
