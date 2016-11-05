import { combineReducers, createStore } from 'redux'

import participantsReducer from './reducers/participants.js'
import answersReducer from './reducers/submit-answer.js'

const reducers =  combineReducers({
  participant: participantsReducer,
  answers: answersReducer
})

const store = createStore(reducers)

store.subscribe(()=>{ console.log("store changed", store.getState()) })

export default store
