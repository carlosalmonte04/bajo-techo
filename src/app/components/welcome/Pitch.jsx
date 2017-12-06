import React from 'react'

const Pitch = (props) => {
  console.log("I AM PROPS, ", props)

  return (
    <div className={`pitch-${props.direction}-container`}>
      <div className={`pitch-${props.direction}-img`}>
        {props.children}
      </div>
      <div className={`pitch-${props.direction}-text`}>
        <div className={`pitch-${props.direction}-title`}>
          <h2>{props.pitchTitle}</h2>
        </div>
        <p>{props.pitch}</p>
      </div>
    </div>
  )
}

export default Pitch