import React, {useEffect, useState} from 'react';
import Home from './pages/home';
import Contact from './pages/contact';
import About from './pages/about';
import Blog from './pages/blog';
import Careers from './pages/careers';
import Header from './components/header';
import Footer from './components/footer';
import Login from './components/login';

import {Route} from 'react-router-dom';
import {BrowserRouter as Router} from 'react-router-dom';
import fire from './firebase-config';

import './App.css';

function App () {
  const [user, setUser] = useState ('');
  const [password, setPassword] = useState ('');
  const [email, setEmail] = useState ('');
  const [passwordError, setPasswordError] = useState ('');
  const [emailError, setEmailError] = useState ('');
  const [hasAccount, setHasAccount] = useState (true);
  const [modalIsOpen, setIsOpen] = useState (false);
  const [isLogin, setIsLogin] = useState (false);
  const [isLoading, setIsLoading] = useState (false);

  const clearInputs = () => {
    setEmail ('');
    setPassword ('');
  };
  const clearErrors = () => {
    setEmailError ('');
    setPasswordError ('');
  };

  const handleLogin = () => {
    setIsLoading (true);
    clearErrors ();
    fire.auth ().signInWithEmailAndPassword (email, password).catch (err => {
      switch (err.code) {
        case 'auth/invalid-email':
          setEmailError (err.message);
          break;
        case 'auth/argument-error':
          setEmailError (err.message);
          break;
        case 'auth/user-disabled':
          setEmailError (err.message);
          break;
        case 'auth/user-not-found':
          setEmailError (err.message);
          break;
        case 'auth/wrong-password':
          setPasswordError (err.message);
          break;
        case 'auth/weak-password':
          setPasswordError (err.message);
          break;
        default:
          alert (
            'We dont know what the problem is. Try again this later, please'
          );
          break;
      }
      setIsLoading (false);
    });
  };

  const handleSignup = () => {
    setIsLoading (true);
    clearErrors ();
    fire
      .auth ()
      .createUserWithEmailAndPassword (email, password)
      .catch (err => {
        switch (err.code) {
          case 'auth/email-already-in-use':
            setEmailError (err.message);
            break;
          case 'auth/argument-error':
            setEmailError (err.message);
            break;
          case 'auth/invalid-email':
            setEmailError (err.message);
            break;
          case 'auth/weak-password':
            setPasswordError (err.message);
            break;
          default:
            alert (
              'We dont know what the problem is. Try again this later, please'
            );
            break;
        }
        setIsLoading (false);
      });
  };

  const handleLogOut = () => {
    fire.auth ().signOut ();
    setIsLogin (false);
    setHasAccount (true);
  };

  useEffect (() => {
    const authListener = () => {
      fire.auth ().onAuthStateChanged (user => {
        if (user) {
          clearInputs ();
          setUser (user);
          setTimeout (() => {
            setIsOpen (false);
            setIsLoading (false);
            setIsLogin (true);
          }, 1000);
        }
      });
    };
    authListener ();
  }, []);

  function openModal () {
    setIsOpen (true);
  }

  function closeModal () {
    setIsOpen (false);
  }

  return (
    <div>
      <Router>
        <Header
          openModal={openModal}
          isLogin={isLogin}
          handleLogOut={handleLogOut}
        />
        <Login
          email={email}
          setEmail={setEmail}
          password={password}
          setPassword={setPassword}
          handleLogin={handleLogin}
          handleSignup={handleSignup}
          hasAccount={hasAccount}
          setHasAccount={setHasAccount}
          emailError={emailError}
          passwordError={passwordError}
          modalIsOpen={modalIsOpen}
          closeModal={closeModal}
          isLoading={isLoading}
        />
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
