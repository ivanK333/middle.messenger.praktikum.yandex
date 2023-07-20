import { HTTPTransport } from '../../libs';

export class BaseApi {
  public http: HTTPTransport;

  constructor() {
    this.http = new HTTPTransport('https://ya-praktikum.tech/api/v2/');
  }
}
