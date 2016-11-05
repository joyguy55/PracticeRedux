const types = require('../types')

export function submitAnswer(answer){
  return{
    type: types.SUBMIT_ANSWER_Q1,
    answer
  }
}
