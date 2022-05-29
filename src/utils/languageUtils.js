//Check if language item exists
export const checkLanguage = () => {

	const language = readLanguage();
	
	//If there is no language saved
	if( language === null ){
		createLanguage();
		return readLanguage();
	}
	
	return language.toString();
};


//Update language key value
export const updateLanguage = (newLanguage) => {
	localStorage.setItem('lang', newLanguage);
};


//FOR LOCAL USE
//Create a language key and set it 'en' (english)
const createLanguage = () => {
	localStorage.setItem('lang', 'en');
};

//Fetch saved language
const readLanguage = () => {
	return localStorage.getItem('lang');
};
