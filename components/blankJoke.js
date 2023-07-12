import { useState } from 'react';
import getJoke from '../api/jokeData';

export default function Joke() {
  const [joke, setJoke] = useState({});

  const [setup, setSetup] = useState();

  const [punchline, setPunchline] = useState();

  const [jokeButton, setJokeButton] = useState('Get a joke!');

  const handleGetJokeClick = async () => {
    if (jokeButton === 'Get a joke!' || jokeButton === 'Get another Joke!') {
      setPunchline('');
      getJoke().then((jokeObj) => {
        setJoke(jokeObj);
        setSetup(jokeObj.setup);
        console.log(jokeObj);
      });

      setJokeButton('Get punchline!');
    } else {
      setPunchline(joke.delivery);
      setJokeButton('Get another Joke!');
    }
  };

  return (
    <>
      <button type="button" onClick={handleGetJokeClick}>
        {jokeButton}
      </button>
      <h2>{setup}</h2>
      <h2>{punchline}</h2>
    </>
  );
}
