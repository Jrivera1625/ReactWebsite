import fetch from 'isomorphic-fetch';

export const API_URL =
  '/api';

// export default function callApi(endpoint, method = 'get', body) {
//   endpoint = encodeURI(endpoint);
//   return fetch(`http://localhost:9000/${endpoint}`, {
//     headers: { 'content-type': 'application/json' },
//     method,
//     body: JSON.stringify(body),
//   })
//   .then(response => response.json().then(json => ({ json, response })))
//   .then(({ json, response }) => {
//     if (!response.ok) {
//       return Promise.reject(json);
//     }

//     return json;
//   })
//   .then(
//     response => response,
//     error => error
//   );
// }
export default function callApi(endpoint, method = 'get', body) {
  endpoint = encodeURI(endpoint);
  return fetch(`http://localhost:9000/api/${endpoint}`)
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