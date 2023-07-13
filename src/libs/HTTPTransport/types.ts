export enum Methods {
  GET = 'GET',
  POST = 'POST',
  DELETE = 'DELETE',
  PUT = 'PUT',
}

export type Method = keyof typeof Methods;

export type Options<D> = {
  method: Method,
  headers?: Record<string, string>,
  data?: D,
  timeout?: number,
  withCredentials?: boolean,
};
