import React, { useCallback } from 'react';

const Home = () => {
  const onChangeJoke = useCallback((e: React.ChangeEvent) => {
    console.log((e.target as HTMLInputElement).value);
  }, []);

  return (
    <>
      <header>Pick a joke.</header>
      <p>useJoke() outputs a random joke.</p>

      <select onChange={onChangeJoke}>
        <option value="0">useJoke()</option>
        <option value="1">useJoke(1)</option>
        <option value="2">useJoke(2)</option>
        <option value="3">useJoke(3)</option>
        <option value="4">useJoke(4)</option>
        <option value="5">useJoke(5)</option>
      </select>

      <button type="button">Let&apos;s Fun</button>
    </>
  );
};

export default Home;
