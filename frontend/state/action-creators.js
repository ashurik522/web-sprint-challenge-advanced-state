import * as types from './action-types'
import axios from 'axios'

// ❗ You don't need to add extra action creators to achieve MVP
export function moveClockwise() {
  return {
    type: types.MOVE_CLOCKWISE
  }
 }

export function moveCounterClockwise() { 
  return {
    type: types.MOVE_COUNTERCLOCKWISE
  }
}

export function selectAnswer(answer_id) { 
  return {
    type: types.SET_SELECTED_ANSWER, payload: answer_id
  }
}

export function setMessage(message) {
  return {
    type: types.SET_INFO_MESSAGE, payload: message
  }
 }

export function setQuiz() {
  
}

export function inputChange(question) { 
  return {
    type: types.INPUT_CHANGE, payload: question
  }
}

export function resetForm() { }

// ❗ Async action creators
export function fetchQuiz() {
  return function (dispatch) {
    axios.get('http://localhost:9000/api/quiz/next')
      .then(res => {
        dispatch({type: types.SET_QUIZ_INTO_STATE, payload: res.data})
      })
      .catch(err => console.error({err}))
    // First, dispatch an action to reset the quiz state (so the "Loading next quiz..." message can display)
    // On successful GET:
    // - Dispatch an action to send the obtained quiz to its state
  }
}
export const postAnswer = (answer) => (dispatch) => {
  
    axios.post('http://localhost:9000/api/quiz/answer', answer )
      .then(res => {
        const message = res.data.message
        dispatch({type: types.SET_INFO_MESSAGE, payload: message})
        dispatch(selectAnswer(''))
        dispatch(fetchQuiz())
      })
      .catch(err => console.error({err}))
    // On successful POST:
    // - Dispatch an action to reset the selected answer state
    // - Dispatch an action to set the server message to state
    // - Dispatch the fetching of the next quiz
   }

export function postQuiz() {
  return function (dispatch) {
    // On successful POST:
    // - Dispatch the correct message to the the appropriate state
    // - Dispatch the resetting of the form
  }
}
// ❗ On promise rejections, use log statements or breakpoints, and put an appropriate error message in state
