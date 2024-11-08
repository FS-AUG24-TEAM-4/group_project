import { Outlet } from 'react-router-dom';

import { Container, Header, Footer } from './components';
import { useSelector } from 'react-redux';
import { RootState } from './app/store';
import { BurgerMenu } from './components/BurgerMenu/BurgerMenu';
import styles from './App.module.scss';

function App() {
  const burgerstatus = useSelector(
    (state: RootState) => state.burger.burgerStatus,
  );

  return (
    <>
      {burgerstatus ? (
        <>
          <Header />
          <BurgerMenu />
        </>
      ) : (
        <>
          <Header />
          <main className={styles.main}>
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
