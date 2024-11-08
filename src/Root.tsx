import { HashRouter as Router, Route, Routes } from 'react-router-dom';

import App from './App';
import { Paths } from './enums';
import { PhonesPage, NotFoundPage, ProductPage } from './pages';
import { CartPage } from './pages/CartPage';

export const Root = () => {
  return (
    <Router>
      <Routes>
        <Route path={Paths.HOME} element={<App />}>
          <Route path={Paths.PHONES}>
            <Route index element={<PhonesPage />} />
            <Route path={Paths.PHONE} element={<ProductPage />} />
          </Route>

          <Route path={Paths.CART} element={<CartPage />} />

          <Route path={Paths.NOT_FOUND} element={<NotFoundPage />} />
        </Route>
      </Routes>
    </Router>
  );
};
