import styles from './App.module.scss';
import { Container } from './components';
import { BurgerMenu } from './components/BurgerMenu/BurgerMenu';

function App() {
  return (
    <>
      <main className={styles.main}>
        <Container>
          <BurgerMenu />
        </Container>
      </main>
    </>
  );
}

export default App;
