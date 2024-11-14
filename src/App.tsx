import { Outlet, useLocation } from 'react-router-dom';
import { Container, Header, Footer } from './components';
import { useSelector } from 'react-redux';
import { RootState } from './app/store';
import { BurgerMenu } from './components/BurgerMenu/BurgerMenu';
import styles from './App.module.scss';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

function App() {
  const burgerstatus = useSelector(
    (state: RootState) => state.burger.burgerStatus,
  );

  const location = useLocation();

  return (
    <>
      <Header />
      <TransitionGroup>
        {burgerstatus ? (
          <CSSTransition
            key={location.key}
            timeout={200}
            classNames={{
              enter: styles['menu-enter'],
              enterActive: styles['menu-enter-active'],
              exit: styles['menu-exit'],
              exitActive: styles['menu-exit-active'],
            }}
            unmountOnExit
          >
            <BurgerMenu />
          </CSSTransition>
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
      </TransitionGroup>
      <Footer />
    </>
  );
}

export default App;
