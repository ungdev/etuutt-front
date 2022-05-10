import axios, { AxiosResponse, Method } from 'axios';
import { toast } from 'react-toastify';
import { apiUrl } from './environment';

let token = null as string | null;

// Send request to API and handle errors
const requestAPI = <T>(
  method: Method,
  baseURL: string,
  route: string,
  casLogin: string | undefined,
  body?: T | undefined,
  disableCache?: boolean
) =>
  new Promise<AxiosResponse<T>>((resolve, reject) => {
    // Create the request
    axios
      .request<T>({
        baseURL,
        method,
        headers: casLogin
          ? {
              accept: 'application/ld+json',
              'CAS-LOGIN': casLogin,
            }
          : {
              accept: 'application/ld+json',
            },
        url: route,
        data: body,
        timeout: 5000,
      })
      // Success
      .then((response) => resolve(response))
      // Error
      .catch((error) => {
        if (error.message === 'Network Error' || error.code === 'ECONNABORTED') {
          toast.error('Connexion au serveur impossible');
        } else {
          toast.error(error.response ? error.response.data.error : 'Une erreur est survenue');
        }

        reject();
      });
  });

// Set the authorization header with the given token for next requests
export const setAuthorizationToken = (_token: string) => {
  token = _token;
};

// Access the API through different HTTP methods
export const API = {
  get: <T>(route: string, casLogin: string | undefined) =>
    requestAPI<T>('GET', apiUrl(), route, casLogin),
  post: <T>(route: string, casLogin: string | undefined, body: T | undefined) =>
    requestAPI<T>('POST', apiUrl(), route, casLogin, body),
  put: <T>(route: string, casLogin: string | undefined, body: T | undefined) =>
    requestAPI<T>('PUT', apiUrl(), route, casLogin, body),
  patch: <T>(route: string, casLogin: string | undefined, body: T | undefined) =>
    requestAPI<T>('PATCH', apiUrl(), route, casLogin, body),
  delete: <T>(route: string, casLogin: string | undefined) =>
    requestAPI<T>('DELETE', apiUrl(), route, casLogin),
};
