import { Outlet } from 'react-router-dom';

import { Container, Header, Footer } from './components';
import { useSelector } from 'react-redux';
import { RootState } from './app/store';
import { BurgerMenu } from './components/BurgerMenu/BurgerMenu';

function App() {
  const burgerstatus = useSelector(
    (state: RootState) => state.burger.burgerStatus,
  );

  return (
    <>
      {burgerstatus ? (
        <BurgerMenu />
      ) : (
        <>
          <Header />

          <main>
            <Container>
              <Outlet />
            </Container>
          </main>
          <Footer />
        </>
      )}
    </>
  );
}

export default App;
