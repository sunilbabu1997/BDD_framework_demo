export function generateEmail(domain = 'test.com') {
  const timestamp = Date.now();
  return `test-user-${timestamp}@${domain}`;
}

export function generatePassword(length = 12) {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*';
  let password = '';
  for (let i = 0; i < length; i++) {
    password += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return password;
}

export function generateRandomString(prefix = 'test', length = 8) {
  const suffix = Math.random().toString(36).substring(2, 2 + length);
  return `${prefix}-${suffix}`;
}

export function getTodayISO() {
  return new Date().toISOString().split('T')[0];
}
