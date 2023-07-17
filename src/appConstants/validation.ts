/* eslint-disable max-len */
export type Rule = {
  rule: RegExp,
  message: string,
  isEqualBy?: string,
};

export enum BaseValidationRules {
  required = 'required',
  login = 'login',
  password = 'password',
  name = 'name',
  email = 'email',
  phone = 'phone',
  userID = 'userID',
}

export const VALIDATION_RULES: Record<keyof typeof BaseValidationRules, Rule> = {
  required: {
    rule: /\S/,
    message: 'Required',
  },
  login: {
    rule: /^[a-zA-Z]([a-zA-Z0-9_-]{3,20})$/,
    message: '3 to 20 characters, in Latin characters, may contain digits, but do not consist of them, no spaces, no special characters',
  },
  password: {
    rule: /^(?=.*[A-Z])(?=.*\d).{8,40}$/,
    message: '8 to 40 characters, at least one uppercase letter and a number are required',
  },
  name: {
    rule: /^[A-Z][a-z]{1,29}|(^[А-Я][а-я]{1,29}$)/,
    message: 'Latin or Cyrillic, first letter must be capitalized, no spaces, no digits, no special characters',
  },
  email: {
    rule: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    message: 'Incorrect email',
  },
  phone: {
    rule: /^(\+7|8)[0-9]{10,15}$/,
    message: '10 to 15 characters, consists of numbers, may start with a plus',
  },
  userID: {
    rule: /^\d+$/,
    message: 'Only number',
  },
};
