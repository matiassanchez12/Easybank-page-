import React from 'react';
import Home from './pages/home';
import Contact from './pages/contact';
import About from './pages/about';
import Blog from './pages/blog';
import Careers from './pages/careers';
import Header from './components/header';
import Footer from './components/footer';

import {Route} from 'react-router-dom';
import {BrowserRouter as Router} from 'react-router-dom';
import './App.css';

function App () {
  return (
    <div>
      <Router>
        <Header />
        <div>
          <Route exact path="/" component={Home} />
          <Route path="/contact" component={Contact} />
          <Route path="/blog" component={Blog} />
          <Route path="/careers" component={Careers} />
          <Route path="/about" component={About} />
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
