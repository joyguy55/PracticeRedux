import Redux from 'redux'

const recordText = (state = {}, action) => {
  switch (action.type){
    case 'addText':
      return state.otherAnswer = e.target.value;
    default:
      return state;
  }
}

const { createStore } = Redux

const store = createStore(recordText)
