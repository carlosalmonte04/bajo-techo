import React from 'react'
import PropTypes from 'prop-types'
import ListingsTitle from '../../components/listings/ListingsTitle'
import Toolbar from '../../components/listings/Toolbar'

const ListingsJumbotronContainer = (props) => {
  return (
    <div className="listings-jumbotron">
      <ListingsTitle match={props.match} />
      <Toolbar />
    </div>
  )
}

const { shape, string } = PropTypes

ListingsJumbotronContainer.propTypes = {
  match: shape({
    params: shape({
      location: string.isRequired
    })
  })
}

ListingsJumbotronContainer.defaultProps = {
  match: {
    params: {
      location: 'santiago'
    }
  }
}

export default ListingsJumbotronContainer
