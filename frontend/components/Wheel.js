import React, {useEffect} from 'react'
import { connect } from 'react-redux'
import { moveClockwise, moveCounterClockwise, fetchQuiz } from '../state/action-creators'



function Wheel(props) {
  
  const clockwiseClick = () => {
    props.moveClockwise()
  }
  
  const counterClockwiseClick = () => {
    props.moveCounterClockwise()
  }

  return (
    <div id="wrapper">
      <div id="wheel">
        <div className={`cog${props.wheel === 0 ? ' active' : ''}`} style={{ "--i": 0 }}>
          {props.wheel === 0 ? 'B' : ''}
        </div>
        <div className={`cog${props.wheel === 1 ? ' active' : ''}`} style={{ "--i": 1 }}>
          {props.wheel === 1 ? 'B' : ''}
        </div>
        <div className={`cog${props.wheel === 2 ? ' active' : ''}`} style={{ "--i": 2 }}>
          {props.wheel === 2 ? 'B' : ''}
        </div>
        <div className={`cog${props.wheel === 3 ? ' active' : ''}`} style={{ "--i": 3 }}>
          {props.wheel === 3 ? 'B' : ''}
        </div>
        <div className={`cog${props.wheel === 4 ? ' active' : ''}`} style={{ "--i": 4 }}>
          {props.wheel === 4 ? 'B' : ''}
        </div>
        <div className={`cog${props.wheel === 5 ? ' active' : ''}`} style={{ "--i": 5 }}>
          {props.wheel === 5 ? 'B' : ''}
        </div>
      </div>
      <div id="keypad">
        <button onClick={counterClockwiseClick} id="counterClockwiseBtn" >Counter clockwise</button>
        <button onClick={clockwiseClick} id="clockwiseBtn">Clockwise</button>
      </div>
    </div> 
  )
}

const mapStateToProps = (state) => {
  return {
    wheel: state.wheel
  }
}

export default connect(mapStateToProps, {moveClockwise, moveCounterClockwise})(Wheel)

