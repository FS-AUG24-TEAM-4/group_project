import { Outlet } from 'react-router-dom';

import { Container, Header, Footer } from './components';

function App() {
  return (
    <>
      <Header />
      <main>
        <Container>
          <Outlet />
        </Container>
      </main>
      <Footer />
    </>
  );
}

export default App;
