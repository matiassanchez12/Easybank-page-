import React, {useEffect} from 'react';
import Presentation from '../components/presentation';
import Whysection from '../components/whysection';
import LatestArticles from '../components/latest-article';

export default function Home () {
  //Sirve para cuando entro a la pagina "home"
  //aparezca la info desde el comienzo
  useEffect (() => {
    window.scrollTo (0, 0);
  });
  return (
    <div>
      <Presentation />
      <Whysection />
      <LatestArticles />
    </div>
  );
}
