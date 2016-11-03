import React from 'react'
require("./survey.scss")
import Paper from 'material-ui/Paper'
import TextField from 'material-ui/TextField'
import { IconButton } from 'material-ui'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
// import ButtonOn from '../svg/buttonon.js'
// import ButtonOff  from '../svg/buttonoff.js'
// import FileCloudDownload from 'material-ui/svg-icons/file/cloud-download';


import * as actions from '.././redux/actions/submit-answer.js'
// import injectTapEventPlugin from 'react-tap-event-plugin';

const questions = ['Indifferent','Negative','Positive']

class SurveyBox extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      inputOn : false,
      isActive : null,
      answer : null,
    }
  }

  render(){
    const update = (index) => {
      // console.log(index)
        this.setState({ inputOn :!(this.state.inputOn),
                        isActive : "active",
                        answer : index
                      })
    }
    return(
      <div>
        <div className="survey-list">
          <div className="question">Quick Question.</div>
          {
            questions.map((element,index)=>{
              // console.log(index)
              return(
                <Paper className="survey-item">
                  <p>{element}</p>
                  <IconButton value={index} key={index} className="selection ${this.state.className}"
                      onClick={(event)=>{update(event.target.value)}}
                    />
                </Paper>
              )
            })
          }
          <Paper className="survey-item">
             <TextField type="text" hintText="If other please explain" />
          </Paper>
          <div>{ this.state.inputOn ? <div className="submit" onClick={()=>{this.props.action.submitAnswer()}}>SUBMIT</div> : null }</div>
        </div>
      </div>
    )
  }

}

export default connect(
  (state) => { return { participant: state.participant } } , // going down through props
  (dispatch) => { return { action: bindActionCreators( actions, dispatch ) } // going up through action/reducer to state
})(SurveyBox)


        // <div className="question">Thank You. Please include this information and help endorse the blog that you are viewing.</div>
        // <Paper className="survey-item">
        //    <TextField type="text" hintText="Name" />
        // </Paper>
        // <Paper className="survey-item">
        //    <TextField type="text" hintText="Age" />
        // </Paper>
        // <Paper className="survey-item">
        //    <TextField type="text" hintText="City" />
        // </Paper>
        // <Paper className="survey-item">
        //    <TextField type="text" hintText="State" />
        // </Paper>
        // <Paper className="survey-item">
        //    <TextField type="text" hintText="Party: Rep Dem Lean Centrist" onChange={this.addText}/>
        // </Paper>

        // <Paper className="survey-item">
        //   <p>{questions[0]}</p>
        //     <IconButton className="selection ${this.state.className}"
        //       onClick={update}
        //     />
        // </Paper>
        // <Paper className="survey-item">
        //   <p>{questions[1]}</p>
        //   <IconButton className="selection ${this.state.className}"
        //       onClick={update}
        //     />
        // </Paper>
