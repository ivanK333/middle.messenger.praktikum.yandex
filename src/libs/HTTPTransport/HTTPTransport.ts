import { queryStringify } from '../../utils';
import { Methods, Options } from '.';

export class HTTPTransport {
  request = <D, R = void>(path: string, options: Options<D>): Promise<R | XMLHttpRequest> => {
    const {
      method,
      data,
      headers,
      timeout,
    } = options;

    const isGet = method === Methods.GET;

    let query = '';

    if (data && isGet) {
      query = queryStringify<D>(data);
    }

    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.open(method, `${path}${query ? `?${query}` : ''}`, true);

      xhr.timeout = timeout || 5000;

      xhr.onload = () => {
        resolve(xhr);
      };

      xhr.onabort = reject;
      xhr.onerror = reject;
      xhr.ontimeout = reject;

      if (headers) {
        Object.keys(headers).forEach((key) => {
          xhr.setRequestHeader(key, headers[key]);
        });
      }

      if (isGet || !data) {
        xhr.send();
      } else if (data instanceof FormData) {
        xhr.send(data);
      }
    });
  };

  get = <D, R = void>(url: string, options: Omit<Options<D>, 'method'>): Promise<R | XMLHttpRequest> => this.request(url, {
    ...options,
    method: Methods.GET,
  });

  delete = <D, R = void>(
    url: string,
    options: Omit<Options<D>, 'method'>,
  ): Promise<R | XMLHttpRequest> => this.request(url, {
    ...options,
    method: Methods.DELETE,
  });

  post = <D, R = void>(
    url: string,
    options: Omit<Options<D>, 'method'>,
  ): Promise<R | XMLHttpRequest> => this.request(url, {
    ...options,
    method: Methods.POST,
  });

  put = <D, R = void>(url: string, options: Omit<Options<D>, 'method'>): Promise<R | XMLHttpRequest> => this.request(url, {
    ...options,
    method: Methods.PUT,
  });
}
