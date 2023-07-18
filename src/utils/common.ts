import { PlainObject } from '../types';

export function isArray(value: unknown): value is [] {
  return Array.isArray(value);
}

export function isObject(value: unknown): value is PlainObject {
  return typeof value === 'object'
    && value !== null
    && value.constructor === Object
    && Object.prototype.toString.call(value) === '[object Object]';
}

export function isEqual(obj1: PlainObject, obj2: PlainObject): boolean {
  if (Object.keys(obj1).length !== Object.keys(obj2).length) {
    return false;
  }

  for (const [key, value1] of Object.entries(obj1)) {
    const value2 = obj2[key];
    if (isArray(value1) && isArray(value2)) {
      if (isEqual(value1, value2)) {
        continue;
      }
      return false;
    }
    if (isObject(value1) && isObject(value2)) {
      if (isEqual(value1, value2)) {
        continue;
      }
      return false;
    }

    if (value1 !== value2) {
      return false;
    }
  }

  return true;
}

export function cloneDeep<T extends object = object>(obj: T) {
  const result: PlainObject = obj instanceof Array ? [] : {};
  for (const [key, value] of Object.entries(obj)) {
    if (isObject(value) || isArray(value)) {
      result[key] = cloneDeep(value);
    } else {
      result[key] = value;
    }
  }

  return result;
}

function merge(lhs: PlainObject, rhs: PlainObject): PlainObject {
  for (const p in rhs) {
    if (!rhs.hasOwnProperty(p)) {
      continue;
    }

    try {
      if (isObject(rhs[p])) {
        rhs[p] = merge(lhs[p] as PlainObject, rhs[p] as PlainObject);
      } else {
        lhs[p] = rhs[p];
      }
    } catch (e) {
      lhs[p] = rhs[p];
    }
  }

  return lhs;
}

export function set(object: PlainObject | unknown, path: string, value: unknown): PlainObject | unknown {
  if (!path || typeof path !== 'string') throw Error('path must be string');
  if (typeof object !== 'object') {
    return object;
  }

  const keys = path.split('.');

  const obj2 = keys.reduceRight((previousValue, currentValue, index) => {
    if (index === keys.length - 1) {
      return { [currentValue]: value };
    }
    return { [currentValue]: previousValue };
  }, {});

  return merge(object as PlainObject, obj2);
}

export function truncateStringWithColon(inputString: string, maxChars: number) {
  if (inputString.length <= maxChars) {
    return `${inputString}`;
  }
  const truncatedString = inputString.slice(0, maxChars);
  return `${truncatedString}...`;
}
