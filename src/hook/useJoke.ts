import React, { useCallback, useState } from 'react';

type Jokes = {
  [key: number]: string;
  1: string;
  2: string;
  3: string;
  4: string;
  5: string;
};

type UseJokeReturnType = [
  string,
  React.ChangeEventHandler<HTMLSelectElement>,
  React.Dispatch<React.SetStateAction<string>>,
];

const useJoke = (): UseJokeReturnType => {
  const jokes: Jokes = {
    1: 'Why can you never trust spiders? Because they post stuff on the web.',
    2: 'Where do computers go to dance? The disk-o',
    3: 'Why did the computer sneeze? It had a virus.',
    4: 'What is an alien’s favourite place on a computer? The space bar.',
    5: 'What did the computer do at lunchtime? Had a byte.',
  };

  const [text, setText] = useState('');
  const handler = useCallback<React.ChangeEventHandler<HTMLSelectElement>>(e => {
    const num = Number((e.target as HTMLSelectElement).value);
    const keys: number[] = Object.keys(jokes).map(Number);

    setText(jokes[num] ?? jokes[keys[Math.floor(Math.random() * keys.length)]]);
  }, []);

  return [text, handler, setText];
};

export default useJoke;
