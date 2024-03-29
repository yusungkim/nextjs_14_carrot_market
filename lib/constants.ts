export const USERNAME_MIN_LENGTH = 3;
export const USERNAME_MAX_LENGTH = 40;
export const PASSWORD_MIN_LENGTH = 8;
export const PASSWORD_MAX_LENGTH = 20;

// Regex
export const USERNAME_REGEX = new RegExp(/^[a-zA-Z0-9\s]+$/)
export const USERNAME_REGEX_MESSAGE = "A username must have only letters, numbers and spaces";

export const PASSWORD_REGEX = new RegExp(
  /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).+$/
);
export const PASSWORD_REGEX_MESSAGE = "A password must have lowercase, UPPERCASE, number and special character";