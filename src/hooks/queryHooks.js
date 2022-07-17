export const parseURL = (oldURL) => {
	const newURL = oldURL.split(' ').join('+');

	return newURL;
};


//Turns every string into a query key
export const unparseQueryURL = (oldURL) => {
	const string = oldURL.split('+').join(' ');
	const query = string.split(' ').map( query => query.toLowerCase() );

	return [query, string];
}


//Turn whole query into a single string
export const unparseURL = (oldURL) => {

	const newURL = oldURL.split('+').join(' ');

	return newURL;
}