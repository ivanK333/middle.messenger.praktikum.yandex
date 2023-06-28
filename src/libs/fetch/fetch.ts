import { queryStringify } from '../../utils';

const METHODS = {
  GET: 'GET',
  POST: 'POST',
  DELETE: 'DELETE',
  PUT: 'PUT',
};

export class Fetch {
  request = (path, options) => {
    const {
      method,
      data,
      headers,
      timeout,
    } = options;

    const isGet = method === METHODS.GET;

    let query = '';

    if (data && isGet) {
      query = queryStringify(data);
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
      } else {
        xhr.send(data);
      }
    });
  };

  get = (url, options) => this.request(url, {
    ...options,
    method: METHODS.GET,
  });

  delete = (url, options) => this.request(url, {
    ...options,
    method: METHODS.DELETE,
  });

  post = (url, options) => this.request(url, {
    ...options,
    method: METHODS.POST,
  });

  put = (url, options) => this.request(url, {
    ...options,
    method: METHODS.PUT,
  });
}
