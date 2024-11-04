import { HashRouter as Router, Route, Routes } from 'react-router-dom';

import App from './App';
import { Paths } from './enums';
import { PhonesPage, NotFoundPage } from './pages';

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
