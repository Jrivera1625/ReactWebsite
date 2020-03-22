
import callApi from './apiCaller.js'

 export const gitAction = (data) => dispatch => {
    dispatch({
     type: 'GIT_ACTION',
     payload: data
    })
   }
  
 export function fetchGitUserData(data) {
  return (dispatch) =>
     {     
      return callApi('git_call','post',data).then(res=>{
         dispatch(gitAction(res.data))
         
      });
     }
}