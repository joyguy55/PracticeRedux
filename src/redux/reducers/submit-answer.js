
const answers = {
  question1: "",
  question2: "",
  question3: ""
}

export const recordReducer = (state = answers, action) => {
  answers[action.type]
  // switch (action.type){
  //   case 'addText':
  //     return state.otherAnswer = e.target.value;
  //   default:
  //     return state;
  // }
  return state
}
