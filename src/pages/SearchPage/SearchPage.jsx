import React from 'react';


//React router
import { useSearchParams } from 'react-router-dom';


//Main component content
const SearchPage = () => {

	const [ searchParams ] = useSearchParams();

	const query = searchParams.get('query');

	//Component render
	return (
		<>
			<p style={{ color:"var(--white-1)" }} >Search - {query}</p>
		</>
	);
};


export default SearchPage; //Export main component
