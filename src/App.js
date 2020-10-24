import React, {useState} from 'react';
import Home from './pages/home';
import Contact from './pages/contact';
import Header from './components/header';
import Footer from './components/footer';
import {Route, Switch} from 'react-router-dom';
import {BrowserRouter as Router} from 'react-router-dom';
import './App.css';

function App () {
  const [isOpenDropbox, setIsOpenDropbox] = useState (false);

  return (
    <div>
      <Router>
        <Header
          isOpenDropbox={isOpenDropbox}
          setIsOpenDropbox={setIsOpenDropbox}
        />
        <div>
          <Route exact path="/" component={Home} />
          <Route path="/contact" component={Contact} />
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
