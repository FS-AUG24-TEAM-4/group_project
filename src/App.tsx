import { Outlet } from 'react-router-dom';

import styles from './App.module.scss';
import { Container } from './components';

function App() {
  return (
    <>
      <main className={styles.main}>
        <Container>
          <Outlet />
        </Container>
      </main>
    </>
  );
}

export default App;
