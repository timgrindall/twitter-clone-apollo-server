import React, { Component } from 'react';
import { ApolloProvider } from 'react-apollo';
import apolloClient from './config/createApolloClient';	/* was imported from ./settings/createApolloClient but in error */
import { Posts } from './modules';

class App extends Component {

	render() {

		return (
			/* not using container class anymore */
			<ApolloProvider client={apolloClient}>
				<Posts />
			</ApolloProvider>
		);
	}
}

export default App;