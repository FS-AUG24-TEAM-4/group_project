import { HashRouter as Router, Route, Routes } from 'react-router-dom';

import App from './App';
import { Paths, DeviceCategory } from './enums';
import { CartPage, ProductsCatalog, NotFoundPage, ProductPage } from './pages';

export const Root = () => {
  return (
    <Router>
      <Routes>
        <Route path={Paths.HOME} element={<App />}>
          <Route path={Paths.PHONES}>
            <Route
              index
              element={<ProductsCatalog category={DeviceCategory.PHONES} />}
            />
            <Route path={Paths.PHONE} element={<ProductPage />} />
          </Route>
          <Route path={Paths.TABLETS}>
            <Route
              index
              element={<ProductsCatalog category={DeviceCategory.TABLETS} />}
            />
          </Route>
          <Route path={Paths.ACCESSORIES}>
            <Route
              index
              element={
                <ProductsCatalog category={DeviceCategory.ACCESSORIES} />
              }
            />
          </Route>
          <Route path={Paths.CART} element={<CartPage />} />

          <Route path={Paths.NOT_FOUND} element={<NotFoundPage />} />
        </Route>
      </Routes>
    </Router>
  );
};
