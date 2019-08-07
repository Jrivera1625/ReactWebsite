import fetch from 'isomorphic-fetch';

export const API_URL =
  '/api';


export default function callApi(endpoint, method = 'get', body) {
  endpoint = encodeURI(endpoint);
  return fetch(`http://localhost:9000/api/${endpoint}`,
  {method: 'POST',
  headers: { 'content-type': 'application/json' },
  body: JSON.stringify(body)
}
)
  .then(res => res.json().then(json => ({ json, res })))
    .then(({ json, res }) => {
      if (!res.ok) {
        return Promise.reject(json);
      }
  
      return json;
    })
    .then(
      res => res,
      error => error
    );
  }