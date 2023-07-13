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

export function merge(obj1: PlainObject, obj2: PlainObject): PlainObject {
  const merged: PlainObject = {};

  const keys = Array.from(new Set([...Object.keys(obj1), ...Object.keys(obj2)]));

  for (const key of keys) {
    if (obj1.hasOwnProperty(key) && obj2.hasOwnProperty(key)) {
      if (typeof obj1[key] === 'object' && typeof obj2[key] === 'object') {
        merged[key] = merge(obj1[key] as PlainObject, obj2[key] as PlainObject);
      } else {
        merged[key] = obj2[key];
      }
    } else if (obj1.hasOwnProperty(key)) {
      merged[key] = obj1[key];
    } else {
      merged[key] = obj2[key];
    }
  }

  return merged;
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

  const newData = merge(object as PlainObject, obj2);

  Object.assign(object as PlainObject, newData);
  return object;
}
