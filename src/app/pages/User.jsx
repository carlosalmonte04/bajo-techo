import React, { Component } from 'react'
import { connect } from 'react-redux'
import AnimatedWrapper from '../HOCs/AnimatedWrapper'
import HeaderContainer from '../containers/common/HeaderContainer'
import FooterContainer from '../containers/common/FooterContainer'
import UserJumbotronContainer from '../containers/user/UserJumbotronContainer'
import UserProfileContainer from '../containers/user/UserProfileContainer'
import fetchUserListings from '../actions/ui/fetchUserListings'

class User extends Component {

  componentDidMount() {
    const { userId } = this.props.match.params
    this.props.fetchUserListings(userId)
  }

  render() {
    return (
      <div className="user-wrapper">
        <HeaderContainer className="header" location={this.props.location} history={this.props.history} />
        <div className="user-content">
          <UserJumbotronContainer />
          <UserProfileContainer user={this.props.user} isLoading={this.props.isLoading} history={this.props.history} />
          <section className="user-section listings">
          </section>
        </div>
        <FooterContainer />
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return {
    fetchUserListings: userId => dispatch(fetchUserListings(userId))
  }
}

function mapStateToProps(state) {
  return {
    user: state.uiReducer.user,
    isLoading: state.uiReducer.isLoading
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(AnimatedWrapper(User))