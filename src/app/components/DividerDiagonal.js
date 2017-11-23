import React, { Component } from 'react';

const RoofDiviver = (props) => {

    return (
			<div className={props.className} style={{background: props.color || 'white', zIndex: props.zIndex || 1}}>
			</div>
    )
}

export default RoofDiviver