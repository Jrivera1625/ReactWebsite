import { ADD_USER } from "../actions/actions";

function userDataReducer(state={users: []}, action){
    switch(action.type) {
        case ADD_USER:
          return Object.assign({}, state, 
              {
                users: action.data
               }); 
         default: 
           return state;
     }
}
//Selectors
export const getUserData= state => state.App.users?state.App.users:[  ];
export default userDataReducer;