import { combineReducers, createStore } from 'redux'

import participantsReducer from './reducers/participants.js'
import resultsReducer from './reducers/results.js'

const reducers =  combineReducers({
  participant: participantsReducer,
})

const store = createStore(reducers)

store.subscribe(()=>{ console.log("store changed", store.getState()) })

export default store
