export enum AuthErrors {
  INVALID_EMAIL = 'Invalid email format.',
  NO_EMAIL = 'No user found with this email.',
  INCORRECT_PASSWORD = 'Incorrect password.',
  TOO_MANY_REQUESTS = 'Too many attempts. Try again later.',
  DEFAULT = 'Something went wrong. Please try again.',
  EMAIL_USED = 'This email is already registered.',
  WEAK_PASSWORD = 'Password is too weak. Minimum 6 characters.',
}
