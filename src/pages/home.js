import React, {useEffect} from 'react';
import Presentation from '../components/presentation';
import Whysection from '../components/whysection';
import LatestArticles from '../components/latest-article';

export default function Home () {
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
