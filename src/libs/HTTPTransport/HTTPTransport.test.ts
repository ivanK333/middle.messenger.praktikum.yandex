import { expect } from 'chai';
import sinon, { SinonFakeXMLHttpRequestStatic, SinonFakeXMLHttpRequest } from 'sinon';
import { HTTPTransport } from '.';

describe('HTTP TRANSPORT', () => {
  let xhr: SinonFakeXMLHttpRequestStatic;
  let instance: HTTPTransport;
  const requests: SinonFakeXMLHttpRequest[] = [];
  beforeEach(() => {
    xhr = sinon.useFakeXMLHttpRequest();

    xhr.onCreate = (req) => {
      requests.push(req);
    };

    instance = new HTTPTransport('');
  });

  afterEach(() => {
    requests.length = 0;
    xhr.restore();
  });

  it('get', async () => {
    instance.get('/', {});

    const [request] = requests;

    expect(request.method).to.equal('GET');
  });
});
