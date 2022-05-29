import React, { useEffect } from 'react';


//React router
import {
	useNavigate
} from 'react-router-dom';


//Custom components
import LoadingScreen from '../../components/LoadingScreen';


//Main component content
const PageNotFound = () => {

	let navigate = useNavigate();

	//When accessing wrong url, send to home page
	useEffect(() => {
		navigate('/');
	}, []);


	//Component render
	return (
		<LoadingScreen />
	);
};


export default PageNotFound; //Export main component
