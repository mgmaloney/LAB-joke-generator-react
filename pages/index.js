import { useState } from 'react';
import getJoke from '../api/jokeData';
import Joke from '../components/blankJoke';

function Home() {
  return <Joke />;
}

export default Home;
