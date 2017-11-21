import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import FontIcon from 'material-ui/FontIcon';
import Slider from 'react-slick'
import SliderArrow from './SliderArrow.js'

const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  lazyLoad: true,
  dots: false,
  prevArrow: <SliderArrow direction="prev" />,
  nextArrow: <SliderArrow direction="next" />,
}


export default class Listing extends Component {

	state = {
		imgShowing: this.props.listing.keyInfo.pictureUrl,
		matesAmount: 0,
		imgUrlStructure: 'http://img.supercasas.com/AdsPhotos/376x250/5/',
		pictures: this.props.listing.keyInfo.pictures
	}

	render() {
		const picturesHTML = this.state.pictures.map((pictureId, i) => <div key={i}><img className="listing-img" src={this.state.imgUrlStructure + pictureId + '.jpg'} /> </div>)
		const optionalInfo = this.props.listing.optionalInfo
		const optionalInfoHTML = Object.keys(optionalInfo).map((title, i) => <span key={i} >{title}: {optionalInfo[title]}: </span>)
		return (
			<Paper style={style} zDepth={4} className="listing-container listing">
				<div className="info-container">
					<div className="listing-status-wrapper">
						<div className="listing-status-container">
							<div className="listing-status mate-icon">
								<i className="material-icons">perm_identity</i>{this.state.matesAmount}
							</div>
							<div className="listing-status add-remove-icon">
								<i className="material-icons">add</i>
							</div>
						</div>
					</div>
					<Slider {...sliderSettings}>
						{picturesHTML}
					</Slider>
					<div className="info-container-inner">
						<div className="info-header">
							<span className="info-title" >{this.props.listing.keyInfo.title}</span>
							<div className="info-price">
								<span>{this.props.listing.keyInfo.currency}</span><span>$ {this.props.listing.keyInfo.price}</span>
							</div>
						</div>
						<div className="info-optional">
							{optionalInfoHTML}
						</div>
					</div>
				</div>
			</Paper>
		)
	}
}


const style = {
  height: 400,
  width: 400,
  margin: 20,
  textAlign: 'center',
  display: 'inline-block',
};