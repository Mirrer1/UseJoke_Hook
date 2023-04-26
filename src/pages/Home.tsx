import React, { useCallback } from 'react';

import JokingWrapper from 'style/JokingPage';

const Home = () => {
  const onChangeJoke = useCallback((e: React.ChangeEvent) => {
    console.log((e.target as HTMLInputElement).value);
  }, []);

  return (
    <JokingWrapper>
      <header>Pick a joke.</header>
      <p>useJoke() outputs a random joke.</p>

      <select onChange={onChangeJoke}>
        <option hidden />
        <option value="0">useJoke()</option>
        <option value="1">useJoke(1)</option>
        <option value="2">useJoke(2)</option>
        <option value="3">useJoke(3)</option>
        <option value="4">useJoke(4)</option>
        <option value="5">useJoke(5)</option>
      </select>

      <div>Why can you never trust spiders? Because they post stuff on the web.</div>
    </JokingWrapper>
  );
};

export default Home;
