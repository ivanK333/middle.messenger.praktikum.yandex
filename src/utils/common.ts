/* eslint-disable no-continue,no-restricted-syntax */

export type PlainObject<T = unknown> = Record<string, T>;

function isArray(value: unknown): value is [] {
  return Array.isArray(value);
}

export function isObject(value: unknown): value is PlainObject {
  return typeof value === 'object'
    && value !== null
    && value.constructor === Object
    && Object.prototype.toString.call(value) === '[object Object]';
}

export function isEqual(lhs: PlainObject | unknown[], rhs: PlainObject | unknown[]): boolean {
  if (Object.keys(lhs).length !== Object.keys(rhs).length) {
    return false;
  }

  for (const [key, value] of Object.entries(lhs)) {
    const rightValue = rhs[key];
    if (isArray(value) && isArray(rightValue)) {
      if (isEqual(value, rightValue)) {
        continue;
      }
      return false;
    }
    if (isObject(value) && isObject(rightValue)) {
      if (isEqual(value, rightValue)) {
        continue;
      }
      return false;
    }

    if (value !== rightValue) {
      return false;
    }
  }

  return true;
}

export function cloneDeep<R>(data: PlainObject | unknown[]): R {
  const result = data instanceof Array ? [] : {};

  for (const [key, value] of Object.entries(data)) {
    if (isArray(value) || isObject(value)) {
      result[key] = cloneDeep(value);
    } else {
      result[key] = data[key];
    }
  }

  return result as R;
}
