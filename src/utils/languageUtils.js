//Check if there is a language prefered as item in localStorage, if not create a new item 'lang' and set 'en' (english) as default language
export const checkLanguage = () => {

	let language = localStorage.getItem('lang');

	//If there is no language specified in localStorage
	if( language === null ){
		//Create language item to save language preference
		localStorage.setItem('lang', "en");
		
		language = localStorage.getItem('lang').toString();

		return language;
	}

	return language;
};


//Change language preference saved in localStorage
export const changeLocalStorageLanguage = (newLanguage) => {
	localStorage.setItem('lang', newLanguage);
};
