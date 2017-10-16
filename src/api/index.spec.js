import { getChuckNorrisJoke } from './';

test('getChuckNorrisJoke returns a string value', async () => {
  expect.assertions(1);
  const value = await getChuckNorrisJoke();
  expect(typeof value).toBe('string');
});
