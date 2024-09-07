import { InitialUrl } from '../utils/constants/fetchConstants';

function ApiFetch(props) {
   const requestOptions = {
      method: props.method || 'GET',
      headers: {
         'Content-Type': 'application/json',
      },
   };
   
   if (props.method !== 'GET' && props.body) {
      requestOptions.body = JSON.stringify(props.body);
   }

   return new Promise((resolve, reject) => {
      fetch(InitialUrl + props.url, requestOptions)
         .then((response) => {
            if (response.ok) {
               return response.json();
            }
            throw new Error(response.message);
         })
         .then((data) => {
            resolve(data);
         })
         .catch((error) => {
            reject(error);
         });
   });
}

export default ApiFetch;

export async function appFile(parameter) {
   return new Promise((resolve, reject) => {
      fetch(InitialUrl + parameter.url, {
         method: 'POST',
         headers: {
            'Content-Type': 'multipart/form-data', // Замените, если используется другой тип данных
         },
         body: parameter.body,
      })
         .then((response) => {
            if (response.ok) {
               return response.json();
            }
            throw new Error(response.message);
         })
         .then((data) => {
            resolve(data);
         })
         .catch((error) => {
            reject(error);
         });
   });
}
