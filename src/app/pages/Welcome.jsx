import React, { Component } from 'react'
import Waypoint from 'react-waypoint'
import PropTypes from 'prop-types'
import AnimatedWrapper from '../HOCs/AnimatedWrapper'
import HeaderContainer from '../containers/common/HeaderContainer'
import JumbotronContainer from '../containers/welcome/JumbotronContainer'
import PitchesContainer from '../containers/welcome/PitchesContainer'
import DividerDiagonal from '../components/welcome/DividerDiagonal'
import FooterContainer from '../containers/common/FooterContainer'

class WelcomeComponent extends Component {
  state = {
    headerClass: 'header transparent'
  }

  shouldComponentUpdate(nextProps, nextState) {
    return this.state.headerClass !== nextState.headerClass
  }

  handleWaypointEnter = (e) => {
    this.setState({ headerClass: 'header transparent' })
  }

  handleWaypointLeave = (e) => {
    this.setState({ headerClass: 'header shrink' })
  }

  render() {
    return (
      <div className="index-wrapper">
        <HeaderContainer
          className={this.state.headerClass}
          location={this.props.location}
          history={this.props.history}
        />
        <Waypoint onEnter={this.handleWaypointEnter} onLeave={this.handleWaypointLeave} />
        <JumbotronContainer />
        <DividerDiagonal className="divider-diagonal" />
        <PitchesContainer />
        <DividerDiagonal className="divider-diagonal" color="rgba(99, 139, 230, 1)" zIndex={-1} />
        <FooterContainer />
      </div>
    )
  }
}

const { shape, string } = PropTypes

WelcomeComponent.propTypes = {
  location: shape({}).isRequired,
  history: shape([string]).isRequired
}

export default AnimatedWrapper(WelcomeComponent)
