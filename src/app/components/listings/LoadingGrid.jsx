import React from 'react'
import Paper from 'material-ui/Paper'

const LoadingGrid = () => {
  const loadingListing = []
  let i = 0
  while (i++ < 20) {
    loadingListing.push(<Paper key={i} style={style} zDepth={0} className="listing-container listing loading" />)
  }
  return (
    <div style={{ margin: '0px 0px 0px 4%' }}>
      {loadingListing}
    </div>
  )
}

const style = {
  height: 430,
  width: 400,
  margin: 20,
  textAlign: 'center',
  display: 'inline-block'
}

export default LoadingGrid
