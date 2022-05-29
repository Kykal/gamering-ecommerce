export const validateURL = (preURL) => {
	let postURL = preURL.split(' ').join('+');

	return postURL;
};