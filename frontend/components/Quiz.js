import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import {fetchQuiz, selectAnswer} from '../state/action-creators'


function Quiz(props) {

  const { quiz, selectedAnswer, selectAnswer, fetchQuiz } = props

  useEffect(()=> {
    fetchQuiz()
  },[])


  const clickHandler = (id) =>{
    selectAnswer(id)
  }
  
  
  return (
    <div id="wrapper">
      {
        quiz ? (
          <>
            <h2>{quiz.question}</h2>

            <div id="quizAnswers">
              <div className={`answer${selectedAnswer === quiz.answers[0].answer_id ? ' selected' : ''}` }>
                {quiz.answers[0].text}
                <button onClick={() => clickHandler(quiz.answers[0].answer_id)}>
                  {selectedAnswer === quiz.answers[0].answer_id ? "SELECTED" : "Select"}
                </button>
              </div>

              <div className={`answer${selectedAnswer === quiz.answers[1].answer_id ? ' selected' : ''}` }>
                {quiz.answers[1].text}
                <button onClick={() => clickHandler(quiz.answers[1].answer_id)}>
                  {selectedAnswer === quiz.answers[1].answer_id ? "SELECTED" : "Select"}
                </button>
              </div>
            </div>

            <button disabled={!selectedAnswer} id="submitAnswerBtn">Submit answer</button>
          </>
        ) : 'Loading next quiz...'
      }
    </div>
  )
}


export default connect(st=>st, {fetchQuiz, selectAnswer})(Quiz)
