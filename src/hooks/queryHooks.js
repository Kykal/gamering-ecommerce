export const parseURL = (oldURL) => {
	const newURL = oldURL.split(' ').join('+');

	return newURL;
};


//Turns every string into a query key
export const unparseQueryURL = (oldURL) => {
	let newURL = oldURL.split('+').join(' ').split(' ');
	newURL = newURL.map( query => query.toLowerCase() );

	return newURL;
}


//Turn whole query into a single string
export const unparseURL = (oldURL) => {

	const newURL = oldURL.split('+').join(' ');

	return newURL;
}