import { Outlet } from 'react-router-dom';

import { Container, Header, Footer } from './components';
import styles from './App.module.scss';

function App() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <Container>
          <Outlet />
        </Container>
      </main>
      <Footer />
    </>
  );
}

export default App;
