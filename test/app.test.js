import ErrorRepository from '../src/app';

test('new error repository', () => {
  const recieved = new ErrorRepository();
  const expected = new Map([
    [101, 'Some error'],
    [102, 'Some other error'],
    [202, 'Really fatal error'],
  ]);
  expect(recieved.errors).toEqual(expected);
});

test('translate error', () => {
  const newTestMap = new ErrorRepository();
  expect(newTestMap.translate(202)).toBe('Really fatal error');
});

test('unknown error', () => {
  const newTestMap = new ErrorRepository();
  expect(newTestMap.translate(203)).toBe('Unknown error');
});
