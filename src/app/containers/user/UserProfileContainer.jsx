import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import ListingCardSmall from '../../components/user/ListingCardSmall'

class UserProfifleContainer extends Component {
// TODO fetch user according to url params, toggle loading when done
  render() {
    if (!this.props.isLoading) {
      console.log("")
      return (
        <section className="user-section profile">
          <div className="user-profile-picture" />
          <div className="user-name">
            <h1>Carlos Almonte</h1>
          </div>
          <div className="user-headline">
            <h4>Confiable, energetico y economicamente listo para el primer paso en mi vida.</h4>
          </div>
          <div className="user-backgrounds">
            <span>Estudiante de Mercadologia en UTESA</span>
          </div>
          <div className="user-contacts">
            <Link to="#">carlos@techonido.com</Link>
          </div>
          <div className="user-contacts">
            <Link to="#">Facebook</Link>
            <Link to="#">Twitter</Link>
            <Link to="#">Instagram</Link>
            <Link to="#">Snapchat</Link>
            <Link to="#">Whatsapp</Link>
          </div>
          <div className="user-reason">
            <span>quiero un techo unido porque:</span>
            <p>
              a cada rato se me le daña una vaina al apartamento
              y el encargado dura un viaje pa' arreglarlo.
              Quiero vivir con alguien cool.
            </p>
          </div>
          <div className="user-bio">
            <span>bio:</span>
            <p>
              Naci en Baní pero m crie en la hermosa ciudad corazon.
              Llevo 3 mese que no me baño en mi pension porque el agua no sube.
              querio mudarme de esta pocilga.
              Ayudenme con 50% y nos vamos hoy mismo.
            </p>
          </div>
          <div className="user-listings">
            <span>interesado en:</span>
            <div>
              {Object.keys(this.props.user.listings).map(listingId => <ListingCardSmall key={listingId} listing={this.props.user.listingsObjs[listingId]} history={this.props.history}/>)}
            </div>
          </div>
        </section>
      )
    }
    return (
      <div>
      </div>
    )
  }
}

export default UserProfifleContainer
