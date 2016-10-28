import React from 'react'
require("./survey.scss")
import Paper from 'material-ui/Paper'
import TextField from 'material-ui/TextField'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import * as actions from '.././redux/actions/participants.js'

class SurveyBox extends React.Component{
  constructor(props){
    super(props)
  }

  render(){
    const setParticipant = this.props.action.setparticipantActions
    console.log(this.props)
    return(
      <div>
        <div className="survey-list">
          <div className="question">Thank You. Please include this information and help endorse the blog that you are viewing.</div>
          <Paper className="survey-item">
             <TextField type="text" hintText="Name" onChange={()=>{setparticipant()}}/>
          </Paper>
          <Paper className="survey-item">
             <TextField type="text" hintText="Age" onChange={()=>{setparticipant()}}/>
          </Paper>
          <Paper className="survey-item">
             <TextField type="text" hintText="City" onChange={()=>{setparticipant()}}/>
          </Paper>
          <Paper className="survey-item">
             <TextField type="text" hintText="State" onChange={()=>{setparticipant()}}/>
          </Paper>
          <Paper className="survey-item">
             <TextField type="text" hintText="Party: Rep Dem Lean Centrist" onChange={this.addText}/>
          </Paper>
        </div>
      </div>
    )
  }

}

export default connect(
  (state) => { return { participant: state.participant } } , // going down through props
  (dispatch) => { return { action: bindActionCreators( actions, dispatch ) } // going up through action/reducer to state
})(SurveyBox)

{/* <div className="question">How did you feel about Evan mcmullin and #Mormonmafia viral events during the 2016 election?</div>
<Paper className="survey-item" />
<Paper className="survey-item">
   <TextField type="text" hintText="If other please explain" onChange={this.addText}/>
</Paper> */}
