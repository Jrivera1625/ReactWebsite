
export const simpleAction =(state = {}, action) => {
  switch (action.type) {
   case 'SIMPLE_ACTION':
    return {
     result: action.payload
    }
   default:
    return state
  }
 }
 export const simpleAction1 =(state = {}, action) => {
  switch (action.type) {
   case 'SIMPLE_ACTION1':
    return {
     otherresult: action.payload
    }
   default:
    return state
  }
 }
 //export 