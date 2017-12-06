import React from 'react'
import SearchBar from '../../components/common/SearchBar'

const JumbotronContainer = () => {
  return (
    <section className="index-jumbotron">
      <div className="form-container">
        <div className="blur-div" />
        <div className="slogan-container">
          <div className="slogan">
            <h1>Dile a tu mamá que</h1>
            <h1>te vas.</h1>
          </div>
        </div>
        <form className="search-input-main-container" onSubmit={e => this.handleSubmit(e)}>
          <SearchBar />
        </form>
      </div>
    </section>
  )
}

export default JumbotronContainer
