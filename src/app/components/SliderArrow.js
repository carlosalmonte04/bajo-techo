import React, { Component } from 'react'

const SliderArrow = (props) => {
	return (
		<div className={`slider-btn-wrapper ${props.direction === 'prev' ? 'prev' : 'next'}`}>
			<button onClick={props.onClick} className="slider-btn">
				<i className={`material-icons ${props.direction === 'prev' ? 'prev' : 'next'}`}>{props.direction === 'prev' ? 'keyboard_arrow_left' : 'keyboard_arrow_right'}</i>
			</button>
		</div>
	)
}

export default SliderArrow