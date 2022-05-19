import React from 'react';


//React router
import {
	Route,
	Routes
} from 'react-router-dom';


//Routes
import Home from './pages/Home';


//Main component content
const App = () => {

	//Component render
	return (
		<Routes>
			<Route path="/" exact element={ <Home /> } />
		</Routes>
	);
};


export default App; //Export main component
