import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';

import App from './App';
import store from './app/store';
import './main.scss';

createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <App />
  </Provider>,
);
