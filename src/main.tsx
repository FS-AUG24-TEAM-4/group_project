import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';

import store from './app/store';
import './main.scss';
import { Root } from './Root';

createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <Root />
  </Provider>,
);
