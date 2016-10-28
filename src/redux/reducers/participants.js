
 const participantsReducer = (state={}, action) => {
  switch (action.type) {
    case "SET_PARTICIPANT":{
        return{
          ...state,
          ...action.payload
        }
      break;
      }
    default:{
      return state
    }
  }
}


export default participantsReducer
