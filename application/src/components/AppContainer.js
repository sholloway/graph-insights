import React from 'react'
import { connect } from 'react-redux'

function AppContainer({ }) {
	return (
		<div className="insight-application-container">
			<p>Hi from the Application Container</p>
		</div>
	)
}

export default connect(state => ({ }))(AppContainer)
