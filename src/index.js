import React, { Suspense, lazy } from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';


//Styles
import './index.css';


//Utils
import { checkLanguage } from './utils/languageUtils';


//Redux
import { Provider as ReduxProvider } from 'react-redux'; //Redux states provider
import { store } from './store'; //States


//React router
import { BrowserRouter } from 'react-router-dom';


//i18
import { I18nextProvider } from 'react-i18next';
import i18next from 'i18next';
//Languages
import global_es from '../src/translations/es/global.json';
import global_en from '../src/translations/en/global.json';


//Custom component
import LoadingScreen from './components/LoadingScreen';
const App = lazy( () => import('./App') );


i18next.init({
	interpolation: { escapeValue: false },
	lng: `${checkLanguage()}`,
	resources: {
		es: {
			global: global_es
		},
		en: {
			global: global_en
		}
	}

});

const root = ReactDOM.createRoot(document.getElementById('e-commerce'));
root.render(
	<React.StrictMode>
		<BrowserRouter>
			<I18nextProvider i18n={i18next} >
				<ReduxProvider store={store} >
					<Suspense fallback={<LoadingScreen />}>
						<App />
					</Suspense>
				</ReduxProvider>
			</I18nextProvider>
		</BrowserRouter>
	</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
