
import callApi from './apiCaller.js'

export const simpleAction = (data) => dispatch => {
   dispatch({
    type: 'SIMPLE_ACTION',
    payload: data
   })
  }
  export const simpleAction1 = (data) => dispatch => {
   dispatch({
    type: 'SIMPLE_ACTION1',
    payload: 'other stuff'
   })
  }
export function fetchUser(data) {
  return (dispatch) =>
     {     
      return callApi('backend_call','post',data).then(res=>{
         
         dispatch(simpleAction(res.data))
      });
     }
}
export function fetchUser1(data) {
   return (dispatch) =>
      {     
       return callApi('backend_call','post',data).then(res=>{
          dispatch(simpleAction1(res.data))
          
       });
      }
 }
 export function fetchUser12(data) {
   return (dispatch) =>
      {     
       return callApi('backend_call_12','post',data).then(res=>{
          dispatch(simpleAction1(res.data))
          
       });
      }
 }