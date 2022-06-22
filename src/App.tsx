import './App.scss';

import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Main from './components/pages/Main';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Main></Main>
      <Footer></Footer>
    </div>
  );
}

export default App;
