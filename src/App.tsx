import { Outlet } from 'react-router-dom';
import cn from 'classnames';

import { Container, Header, Footer } from './components';
import { useSelector } from 'react-redux';
import { RootState } from './app/store';
import { BurgerMenu } from './components/BurgerMenu/BurgerMenu';
import styles from './App.module.scss';
import { useTheme } from './hooks/useTheme';

import { useEffect } from 'react';
import { Themes } from './enums/Themes';

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
          <main className={cn(styles.main)}>
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
