import React, { Suspense, lazy } from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';


//Styles
import './index.css';


//Redux
import { Provider } from 'react-redux';
import { store } from './store';
 

//React router
import { BrowserRouter } from 'react-router-dom';


//Custom components
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('e-commerce'));
root.render(
	<React.StrictMode>
		<BrowserRouter>
			<Provider store={store} >
				<App />
			</Provider>
		</BrowserRouter>
	</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
