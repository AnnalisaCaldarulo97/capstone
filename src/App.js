import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import "bootstrap/dist/js/bootstrap.bundle.min";
import 'bootstrap-icons/font/bootstrap-icons.css';
import Header from './components/Header';
import Nav from './components/Nav';
import Main from './components/Main';
import Testimonials from "./components/Testimonials";
import About from './components/About';


import Footer from './components/Footer';

function App() {
  return (
    <div className="App ">
      <Nav />
      <Header />
      <Main />
      <Testimonials />
      <About />
      <Footer />
    </div>
  );
}

export default App;
