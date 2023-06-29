export function queryStringify<D>(data: D) {
  const result = Object.entries(data).map(([key, value]) => {
    if (typeof value === 'string' || typeof value === 'number') {
      return `${key}=${value.toString()}`;
    }
    return '';
  });
  return `${result.join('&')}`;
}
