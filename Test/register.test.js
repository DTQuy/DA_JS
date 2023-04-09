const register = require('../register');

test('register with valid username and password', () => {
  const user = register('johndoe', 'password');

  expect(user).toBeDefined();
});

test('register with existing username', () => {
  const user = register('johndoe', 'password');

  expect(user).toBeNull();
});

test('register with empty username or password', () => {
  const user = register('', '');

  expect(user).toBeNull();
});
