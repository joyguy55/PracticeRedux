import React from 'react'
import Paper from 'material-ui/Paper'
import { IconButton } from 'material-ui'

const AnswerDiv = (props) => {

const questions = props.questions

  return(
     <div>
      {
        questions.map((element,index)=>{
          return(
            <Paper className="survey-item" key={index} onClick={()=>{props.update(index)}}>
              <p>{element}</p>
              <IconButton key={index} className="selection ${this.state.className}"/>
            </Paper>
          )
        })
      }
    </div>
  )

}

export default AnswerDiv
