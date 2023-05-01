import React from 'react';

import useJoke from 'hook/useJoke';
import JokingWrapper from 'style/JokingPage';

const Home = () => {
  const [jokeText, onChangeJokeText] = useJoke();

  return (
    <JokingWrapper>
      <header>Pick a joke.</header>
      <p>useJoke() outputs a random joke.</p>

      <select onChange={onChangeJokeText}>
        <option hidden />
        <option value={0}>useJoke()</option>
        <option value={1}>useJoke(1)</option>
        <option value={2}>useJoke(2)</option>
        <option value={3}>useJoke(3)</option>
        <option value={4}>useJoke(4)</option>
        <option value={5}>useJoke(5)</option>
      </select>

      <div>{jokeText}</div>
    </JokingWrapper>
  );
};

export default Home;
