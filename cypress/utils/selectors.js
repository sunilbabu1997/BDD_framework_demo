export const SELECTORS = {
  LOGIN: {
    USERNAME: 'input[name="username"]',
    PASSWORD: 'input[type="password"]',
    LOGIN_BUTTON: 'button[type="submit"]',
    ERROR: '.oxd-alert-content-text',
    FORGOT_PASSWORD: '.orangehrm-login-forgot',
    TITLE: '.orangehrm-login-title',
  },
  DASHBOARD: {
    HEADING: 'h6',
    PROFILE_DROPDOWN: '.oxd-userdropdown-tab',
    LOGOUT_LINK: 'a[href="/web/index.php/auth/logout"]',
    SIDE_PANEL: '.oxd-sidepanel',
  },
  NAVIGATION: {
    ADMIN: 'a[href="/web/index.php/admin/viewAdminModule"]',
    PIM: 'a[href="/web/index.php/pim/viewPimModule"]',
    LEAVE: 'a[href="/web/index.php/leave/viewLeaveModule"]',
  },
};

export function byTestId(testId) {
  return `[data-testid="${testId}"]`;
}
