export const VALIDATION_PATTERNS = {
  email: /^(?!.*\.\.)[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
  EMAIL_REGEX: /^[a-zA-Z0-9._%+-]+@(?!(?:gmail|yahoo|hotmail|outlook|aol|icloud|protonmail|yandex|mail|live|msn)\.)[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
  mobile: /^[6-9]\d{9}$/,
  name: /^[a-zA-Z\s]+$/,
  company: /^[a-zA-Z0-9\s&.-]+$/,
  phone: /^[\+]?[1-9][\d]{0,15}$/
};
