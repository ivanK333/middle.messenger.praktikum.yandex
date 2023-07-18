import { queryStringify } from '../../utils';
import { router } from '../../router';
import { Methods, Options } from '.';
import { ROUTES } from '../../appConstants';

export class HTTPTransport {
  public baseUrl: string;

  constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
  }

  request = <D, R = void>(path: string, options: Options<D>): Promise<R> => {
    const {
      method,
      data,
      headers,
      timeout,
      withCredentials,
    } = options;

    const isGet = method === Methods.GET;

    let query = '';

    if (data && isGet) {
      query = queryStringify(data);
    }

    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.open(method, `${this.baseUrl}${path}${query ? `?${query}` : ''}`, true);

      xhr.timeout = timeout || 5000;
      xhr.withCredentials = !!withCredentials;

      xhr.onload = () => {
        const contentType = xhr.getResponseHeader('Content-Type');
        let { response } = xhr;

        if (contentType?.includes('application/json')) {
          response = JSON.parse(xhr.response);
        }

        if (xhr.status === 200) {
          resolve(response);
          return;
        }

        if (xhr.status === 401) {
          router.go(ROUTES.signIn);
          localStorage.clear();
        }

        reject(response);
      };

      xhr.onabort = reject;
      xhr.onerror = reject;
      xhr.ontimeout = reject;

      if (!(data instanceof FormData)) {
        xhr.setRequestHeader('Content-Type', 'application/json');
      }

      if (headers) {
        Object.keys(headers).forEach((key) => {
          xhr.setRequestHeader(key, headers[key]);
        });
      }

      if (isGet || !data) {
        xhr.send();
      } else {
        if (data instanceof FormData) {
          xhr.send(data);
          return;
        }

        xhr.send(JSON.stringify(data));
      }
    });
  };

  get = <D, R = void>(url: string, options: Omit<Options<D>, 'method'>): Promise<R> => this.request(url, {
    ...options,
    method: Methods.GET,
  });

  delete = <D, R = void>(
    url: string,
    options: Omit<Options<D>, 'method'>,
  ): Promise<R> => this.request(url, {
    ...options,
    method: Methods.DELETE,
  });

  post = <D, R = void>(
    url: string,
    options: Omit<Options<D>, 'method'>,
  ): Promise<R> => this.request(url, {
    ...options,
    method: Methods.POST,
  });

  put = <D, R = void>(url: string, options: Omit<Options<D>, 'method'>): Promise<R> => this.request(url, {
    ...options,
    method: Methods.PUT,
  });
}
