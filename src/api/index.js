// @flow

const CHUCK_NORRIS_API = 'https://api.chucknorris.io/jokes/random';

export const getChuckNorrisJoke = async (): Promise<string> => {
  const response: Response = await fetch(CHUCK_NORRIS_API);
  const { value }: { value: string } = await response.json();
  return value;
};
