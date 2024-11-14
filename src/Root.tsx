import { HashRouter as Router, Route, Routes } from 'react-router-dom';

import { Paths, DeviceCategory } from './enums';

import {
  CartPage,
  ProductsCatalog,
  NotFoundPage,
  ProductPage,
  HomePage,
  FavPage,
  AuthPage,
  CreatorsPage,
} from './pages';
import App from './App';
import { SearchPage } from './pages/SearchPage/SearchPage';
import { AuthProvider } from './auth/AuthContext';

export const Root = () => {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path={Paths.HOME} element={<App />}>
            <Route index element={<HomePage />} />

            <Route path={Paths.SEARCH}>
              <Route index element={<SearchPage />} />
            </Route>
            <Route path={'/authentication'} element={<AuthPage />} />

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

            <Route path={Paths.FAVORITES} element={<FavPage />} />
            <Route path={Paths.CART} element={<CartPage />} />
            <Route path={Paths.CREATORS} element={<CreatorsPage />} />

            <Route path={Paths.NOT_FOUND} element={<NotFoundPage />} />
          </Route>
        </Routes>
      </Router>
    </AuthProvider>
  );
};
