import React from 'react'
import { connect } from 'react-redux'
import {fetchQuiz, selectAnswer, postAnswer} from '../state/action-creators'




function Quiz(props) {

  const { quiz, selectedAnswer, selectAnswer, fetchQuiz, postAnswer } = props

  if(!quiz){
    fetchQuiz()
  }


  const clickHandler = (id) =>{
    selectAnswer(id)
  }
  
  const onSubmit = e => {
    e.preventDefault();
    const answer = {
      "quiz_id" : quiz.quiz_id,
      "answer_id": selectedAnswer
    }
    postAnswer(answer) 
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

            <button disabled={!selectedAnswer} onClick={onSubmit} id="submitAnswerBtn">Submit answer</button>
          </>
        ) : 'Loading next quiz...'
      }
    </div>
  )
}


export default connect(st=>st, {fetchQuiz, selectAnswer, postAnswer})(Quiz)
