import React from 'react'

const obj = {}

class SurveyBox extends React.Component{
  constructor(){
    super()
    this.mutate = this.mutate.bind(this)
  }

  mutate(e){
    return console.log(e.target.value)
  }

  render(){
    return(
      <div>
        <ul className="survey-list">
          <li className=""><btn>text</btn></li>
          <li className="">If other please explain<input type="string" onChange={this.mutate}/></li>
        </ul>
      </div>
    )
  }

}

export default SurveyBox
