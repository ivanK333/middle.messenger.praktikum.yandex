export function queryStringify(data: Record<string, any>) {
  const result = Object.entries(data).map(([key, value]) => `${key}=${value.toString()}`);
  return `${result.join('&')}`;
}
