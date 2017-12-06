import React from 'react'
import KeyboardArrowLeft from 'material-ui/svg-icons/hardware/keyboard-arrow-left'
import KeyboardArrowRight from 'material-ui/svg-icons/hardware/keyboard-arrow-right'

const SliderArrow = (props) => {
  return (
    <div className={`slider-btn-wrapper ${props.direction === 'prev' ? 'prev' : 'next'}`}>
      <button onClick={props.onClick} className="slider-btn">
        {props.direction === 'prev'
          ? <KeyboardArrowLeft className="material-icons prev" />
          : <KeyboardArrowRight className="material-icons next" />}
      </button>
    </div>
  )
}

export default SliderArrow
