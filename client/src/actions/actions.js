
import callApi from './apiCaller.js'
export const ADD_USER = 'ADD_USER'; // action types

export function getUserData(data) {
   return {
      type: ADD_USER,
      userData: data
   }
}
export function fetchUser(data) {
  return (dispatch) =>
     {     
      return callApi('backend_call','post',data).then(res=>{
         console.log("action message", res)
         dispatch(getUserData(res.data))
      });
     }
}