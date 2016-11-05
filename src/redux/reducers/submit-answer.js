const types = require('../types')

const surveyAnswers = {
  question1: {
              title: "What",
              answer: ""
              },
  question2: {
              title: "Why",
              answer: ""
              },
  question3: {
              title: "How",
              answer: ""
            }
}

export default function(state = surveyAnswers, action){
console.log(state)

  const newState = JSON.parse(JSON.stringify(state))

  const actions = {
    [types.SUBMIT_ANSWER_Q1](){return(newState.question1.answer=action.payload)},
  }

  return actions[action.type] === undefined ? state :actions[action.type]
}
