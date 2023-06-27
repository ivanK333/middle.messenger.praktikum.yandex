const METHODS = {
  GET: 'GET',
  POST: 'POST',
  DELETE: 'DELETE',
  PUT: 'PUT',
};

/**
 * Функцию реализовывать здесь необязательно, но может помочь не плодить логику у GET-метода
 * На входе: объект. Пример: {a: 1, b: 2, c: {d: 123}, k: [1, 2, 3]}
 * На выходе: строка. Пример: ?a=1&b=2&c=[object Object]&k=1,2,3
 */
function queryStringify(data) {
  const result = Object.entries(data).map(([key, value]) => `${key}=${value.toString()}`);
  return `${result.join('&')}`;
  // Можно делать трансформацию GET-параметров в отдельной функции
}
class HTTPTransport {
  request = (path, options) => {
    const {
      method, data, headers, timeout,
    } = options;

    const isGet = method === METHODS.GET;

    let query = '';

    if (isGet) {
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

      if (isGet) {
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
