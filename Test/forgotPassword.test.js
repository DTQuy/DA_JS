const forgotPassword = require('../forgotPassword');

test('forgot password with valid email', () => {
  const result = forgotPassword('johndoe@example.com');

  expect(result).toBeTruthy();
});

test('forgot password with invalid email', () => {
  const result = forgotPassword('invalidemail');

  expect(result).toBeFalsy();
});

test('forgot password with empty email', () => {
  const result = forgotPassword('');

  expect(result).toBeFalsy();
});
