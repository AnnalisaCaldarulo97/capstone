import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import "bootstrap/dist/js/bootstrap.bundle.min";

import Header from './components/Header';
import Nav from './components/Nav';
import Main from './components/Main';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Nav />
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
