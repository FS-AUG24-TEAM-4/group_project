import { HashRouter as Router, Route, Routes } from 'react-router-dom';

import App from './App';
import { NotFoundPage } from './pages/NotFoundPage';
import { PhonesPage } from './pages/PhonesPage';
import { Paths } from './types';

export const Root = () => {
  return (
    <Router>
      <Routes>
        <Route path={Paths.HOME} element={<App />}>
          <Route path={Paths.PHONES}>
            <Route index element={<PhonesPage />} />
          </Route>

          <Route path={Paths.NOT_FOUND} element={<NotFoundPage />} />
        </Route>
      </Routes>
    </Router>
  );
};
