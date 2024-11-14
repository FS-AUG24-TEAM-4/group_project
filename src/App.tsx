import { Outlet, useLocation } from 'react-router-dom';
import { Container, Header, Footer } from './components';
import { useSelector } from 'react-redux';
import { RootState } from './app/store';
import { BurgerMenu } from './components/BurgerMenu/BurgerMenu';
import styles from './App.module.scss';
import { useTheme } from './hooks/useTheme';

import { useEffect } from 'react';
import { Themes } from './enums/Themes';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

function App() {
  const burgerstatus = useSelector(
    (state: RootState) => state.burger.burgerStatus,
  );

  const { theme } = useTheme();

  useEffect(() => {
    if (theme === Themes.DARK) {
      document.documentElement.setAttribute('theme-mode', 'dark');
    } else {
      document.documentElement.setAttribute('theme-mode', 'light');
    }
  }, [theme]);

  const location = useLocation();

  return (
    <>
      <Header />
      {burgerstatus ? (
        <BurgerMenu />
      ) : (
        <main className={styles.main}>
          <TransitionGroup>
            <CSSTransition
              key={location.pathname.split('/')[1]}
              timeout={700}
              classNames={{
                enter: styles['fade-enter'],
                enterActive: styles['fade-enter-active'],
                exit: styles['fade-exit'],
                exitActive: styles['fade-exit-active'],
              }}
            >
              <Container>
                <Outlet />
              </Container>
            </CSSTransition>
          </TransitionGroup>
        </main>
      )}
      {!burgerstatus && <Footer />}
    </>
  );
}

export default App;
