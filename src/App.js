import React, {useState} from 'react';
import Header from './components/header';
import Presentation from './components/presentation';
import Whysection from './components/whysection';
import LatestArticles from './components/latest-article';
import Footer from './components/footer';

import './App.css';

function App () {
  const [isOpenDropbox, setIsOpenDropbox] = useState (false);

  return (
    <div className={isOpenDropbox ? 'menuIsOpen' : 'menuIsClose'}>
      <Header
        isOpenDropbox={isOpenDropbox}
        setIsOpenDropbox={setIsOpenDropbox}
      />
      <Presentation />
      <Whysection />
      <LatestArticles />
      <Footer />
    </div>
  );
}

export default App;
