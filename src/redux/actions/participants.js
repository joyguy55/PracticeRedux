export function setparticipantActions({name,age,city,state}){
  return{
    type:"SET_PARTICIPANT",
    payload:{
      name,
      age,
      city,
      state,
    }
  }
}
