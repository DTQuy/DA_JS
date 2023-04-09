const login = require('../login');

test('login with correct username and password', () => {
  const user = login('johndoe', 'password');

  expect(user).toBeDefined();
});

test('login with incorrect username or password', () => {
  const user = login('johndoe', 'wrongpassword');

  expect(user).toBeNull();
});

test('login with empty username or password', () => {
  const user = login('', '');

  expect(user).toBeNull();
});
