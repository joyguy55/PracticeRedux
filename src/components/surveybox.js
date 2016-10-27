import React from 'react'
import Redux from 'redux'
require("./survey.scss")
import Paper from 'material-ui/Paper'

class SurveyBox extends React.Component{
  constructor(){
    super()
    this.addText = this.addText.bind(this)
  }

  addText(){
    Redux.store.dispatch({ type: 'addText' })
  }

  render(){
    return(
      <div>
        <div className="survey-list">
          <Paper className="survey-item" />
          <Paper className="survey-item" If other please explain>
            <input type="string" onChange={this.addText}/>
          </Paper>
        </div>
      </div>
    )
  }

}

export default SurveyBox
