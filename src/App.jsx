import React from 'react';


//React router
import {
	Route,
	Routes
} from 'react-router-dom';


//Routes
import Home				from './pages/Home';
import Components		from './pages/Components';
import Accesories		from './pages/Accesories';
import Peripherals	from './pages/Peripherals';
import NotFound		from './pages/NotFound';
import Search			from './pages/Search';


//Main component content
const App = () => {
	
	//Component render
	return (
		<Routes>
			<Route path="/"				element={ <Home />			} />
			<Route path="/search"		element={ <Search />			} />
			<Route path="/components"	element={ <Components />	} />
			<Route path="/accesories"	element={ <Accesories />	} />
			<Route path="/peripherals" element={ <Peripherals />	} />
			<Route path="*"			 	element={ <NotFound />		} />
		</Routes>
	);
};


export default App; //Export main component
