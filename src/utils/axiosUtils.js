import axios from 'axios';
import {BASEURL} from '../constants/urls';

/**
 * Custom HTTP Service Requests utility which uses axios at core.
 * This service adds authentication token to the request header and
 * takes an optional argument of query params and structures an
 * appropriate URL.
 *
 * @name ServiceRequests
 * @param {string} baseURL - Base URL of services.
 * @example
 * import ServiceRequests from 'utils/ServiceRequests';
 * request = new ServiceRequests('https://my-url');
 * const service = new ServiceRequests('http://10.1.11.31:8080/');
 * service.get('my-end-point/').then(..).catch(..);
 */
class ServiceRequests {
  /**
   * Class Constructor
   *
   * @param {string} baseURL - Base URL of services.
   * @param {string} tokenKey - LocalStorage Key for Auth Token.
   * @example
   * request = new ServiceRequests('https://my-url');
   * const service = new ServiceRequests('http://10.1.11.31:8080/');
   * service.get('my-end-point/').then(..).catch(..);
   */
  constructor(token) {
    // const tokenKey = "dummy";

    this.service = axios.create({
      baseURL: BASEURL,
      headers:
        token === ''
          ? null
          : {
              authorization: `Token ${token}`,
              'Content-Type':
                'application/json; charset=UTF-8,multipart/form-data',
              // authorization: `Token a6359fc696d421e1e973e6a9b404e889a078f9db`,
              'Access-Control-Allow-Credentials': 'true',
            },
      // proxy: {
      //   host: '54.145.63.204',
      //   port: 8000
      // }
    });
  }

  /**
   * For Get Requests.
   *
   */
  get(url, params) {
    return this.service.get(`${url}`, params);
  }

  /**
   * For Post Requests.
   *
   */
  post(url, params) {
    return this.service.post(url, params);
  }

  /**
   * For Put Requests.
   *
   */
  put(url, params) {
    return this.service.put(url, params);
  }

  /**
   * For Delete Requests
   *
   */
  delete(url) {
    return this.service.delete(url);
  }
}

export default ServiceRequests;
