import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'

import Header  from './components/Header';
import Nav  from './components/Nav';
import Main  from './components/Main';
import Footer  from './components/Footer';

function App() {
  return (
    <div className="App">
      <meta name="language" content="english"/> 
      <meta name="rating" content="safe for kids"/> 
      <meta name="description" content="Indulge in fresh, flavorful dishes at Little Lemon! Explore our seasonal menu, all prepared with locally sourced ingredients. Make a reservation online or call us for a delightful dining experience."/>
      <meta name="og:title" content="Little Lemon Restaurant"/>
      <meta name="og:description" content="Indulge in fresh, flavorful dishes at Little Lemon! Explore our seasonal menu, all prepared with locally sourced ingredients. Make a reservation online or call us for a delightful dining experience."/>
      <meta name="og:image" content=""/>
      <Nav />
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
