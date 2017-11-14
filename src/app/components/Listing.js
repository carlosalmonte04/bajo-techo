import React, { Component } from 'react';
import Paper from 'material-ui/Paper';


export default class Listing extends Component {

	state = {
		imgShowing: this.props.listing.keyInfo.pictureUrl
	}

	render() {
		const optionalInfo = this.props.listing.optionalInfo
		const optionalInfoHTML = Object.keys(optionalInfo).map(title => <span>{title}: {optionalInfo[title]}: </span>)
		return (
			<Paper key={this.props.key} style={style} zDepth={4} className="listing-container listing">
				<div className="info-container">
					<img className="listing-img" src={this.state.imgShowing} />
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