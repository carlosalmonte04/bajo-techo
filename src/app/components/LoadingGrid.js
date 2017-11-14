import React from 'react';
import Listing from './Listing.js'
import Paper from 'material-ui/Paper';


const LoadingGrid = props => {
	const fakeArray = []
	let i = 0
	while(i++ < 20 ) {
		fakeArray.push(null)
	}
  const loadingListing = fakeArray.map((list, key) => <Paper key={key} style={style} zDepth={0} className="listing-container loading" />)
  return (
    <div className="results-container-inner" >
    	{loadingListing}
    </div>
  )
}

const style = {
  height: 300,
  width: 300,
  margin: 20,
  textAlign: 'center',
  display: 'inline-block',
};

export default LoadingGrid