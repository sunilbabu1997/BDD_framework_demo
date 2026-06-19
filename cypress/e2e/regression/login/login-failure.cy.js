import LoginPage from '../../../pages/LoginPage';
import loginData from '../../../fixtures/login-data.json';

const loginPage = new LoginPage();

describe('OrangeHRM Login — Failure Scenarios', () => {
  beforeEach(() => {
    loginPage.visit();
  });

  loginData.invalidCredentials.testCases.forEach(({ email, password, expectedError, type }, index) => {
    it(`should show error for: email="${email || '(empty)'}" (case ${index + 1})`, () => {
      loginPage.login(email, password);
      if (type === 'field') {
        loginPage.assertFieldError(expectedError);
      } else {
        loginPage.assertAlertError(expectedError);
      }
    });
  });

  it('should stay on login page after failed login', () => {
    loginPage.login(loginData.invalidCredentials.testCases[1].email, loginData.invalidCredentials.testCases[1].password);
    loginPage.assertUrlContains('/auth/login');
  });
});
