import {z} from 'zod';

export const loginSchema = z.object({
  username: z.string().min(5),
  password: z.string().min(6),
});

export const EMAIL_REGEX =
  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
export const PASSWORD_REGEX =
  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
export const PHONE_REGEX = '(0047|\\+47|47)?\\d{8}';

export const USERNAME_RULES = {
  required: 'Username is required',
  minLength: {
    value: 4,
    message: 'Username should be at least 4 characters long',
  },
  mmaxLength: {
    value: 24,
    message: 'Username should be max 24 characters long',
  },
};
export const EMAIL_RULES = {
  required: 'Email is required',
  pattern: {value: EMAIL_REGEX, message: 'Invalid email address'},
};
export const PASSWORD_RULES = {
  required: 'Password is required',
  minLength: {value: 8, message: 'Password should be minimum 6 characters'},
};
export const PHONE_RULES = {
  required: 'Mobile number is required',
  pattern: {value: PHONE_REGEX, message: 'Invalid mobile number'},
};
