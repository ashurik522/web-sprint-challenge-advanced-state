import React, { useState } from 'react'
import { connect } from 'react-redux'
import * as actionCreators from '../state/action-creators'
import { inputChange } from '../state/action-creators';

export function Form(props) {

  const { form ,inputChange} = props
 

  const onChange = evt => {
   inputChange({
    ...form,
    [evt.target.id]: evt.target.value
   })
  }
  

  const onSubmit = evt => {
    trim()
    
  }

  const trim = 
      form.newQuestion.trim(' ').length > 0 && 
      form.newTrueAnswer.trim(' ').length > 0 &&
      form.newFalseAnswer.trim(' ').length > 0 
  

  return (
    <form id="form" onSubmit={onSubmit}>
      <h2>Create New Quiz</h2>
      <input 
        maxLength={50} 
        onChange={onChange} 
        value={form.newQuestion} 
        id="newQuestion"
        placeholder="Enter question" 
      />
      <input 
        maxLength={50} 
        onChange={onChange} 
        value={form.newTrueAnswer} 
        id="newTrueAnswer" 
        placeholder="Enter true answer" 
      />
      <input 
        maxLength={50} 
        onChange={onChange} 
        value={form.newFalseAnswer} 
        id="newFalseAnswer" 
        placeholder="Enter false answer"  
      />
      <button 
        disabled={!trim} 
        id="submitNewQuizBtn">
          Submit new quiz
      </button>
    </form>
  )
}

export default connect(st => st, actionCreators)(Form)
