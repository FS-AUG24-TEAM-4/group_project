import { HashRouter as Router, Route, Routes } from 'react-router-dom';

import { Paths, DeviceCategory } from './enums';

import { CartPage, ProductsCatalog, NotFoundPage, ProductPage } from './pages';
import { HomePage } from './pages/HomePage';
import App from './App';

export const Root = () => {
  return (
    <Router>
      <Routes>
        <Route path={Paths.HOME} element={<App />}>
          <Route index element={<HomePage />} />

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
            <Route path={Paths.TABLET} element={<ProductPage />} />
          </Route>

          <Route path={Paths.ACCESSORIES}>
            <Route
              index
              element={
                <ProductsCatalog category={DeviceCategory.ACCESSORIES} />
              }
            />
            <Route path={Paths.ACCESSORIE} element={<ProductPage />} />
          </Route>
          <Route path={Paths.CART} element={<CartPage />} />

          <Route path={Paths.NOT_FOUND} element={<NotFoundPage />} />
        </Route>
      </Routes>
    </Router>
  );
};
