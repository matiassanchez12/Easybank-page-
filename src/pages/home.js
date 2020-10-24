import React from 'react';
import Presentation from '../components/presentation';
import Whysection from '../components/whysection';
import LatestArticles from '../components/latest-article';

export default function Home () {
  return (
    <div>
      <Presentation />
      <Whysection />
      <LatestArticles />
    </div>
  );
}
