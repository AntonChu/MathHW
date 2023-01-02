import Magician from '../js/magician';

test.each([
  ['distance < 2, stoned === false', [1, false], 100],
  ['distance < 2, stoned === true', [1, true], 100],
  ['distance > 1, stoned === false', [2, false], 90],
  ['distance > 1, stoned === true', [2, true], 85],
])('test case %s with %i arguments', (_, argument, expected) => {
  const hero = new Magician(...argument);
  expect(hero.attack).toBe(expected);
});
