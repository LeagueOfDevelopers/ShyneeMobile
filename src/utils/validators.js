export const required = (value, errorMessage = 'Required') => (value || typeof value === 'number' ? undefined : errorMessage);

export const email = (value, errorMessage = 'Invalid email address') => (value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
  ? errorMessage
  : undefined);

export const password = (value, errorMessage = 'Password requires 8 or more symbols') => (value && value.length < 8 ? errorMessage : undefined);